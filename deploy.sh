#!/usr/bin/env bash
# Build and deploy gui-fernandes-web (Nuxt -> Firebase Hosting + Functions).
# See README-deploy.md for details and troubleshooting.
set -euo pipefail

# ---- Config -----------------------------------------------------------------
PROJECT_ID="gui-fernandes-web"
REQUIRED_NODE_MAJOR=22
SERVER_DIR=".output/server"
# Firebase imports the whole server bundle to discover functions; Nuxt bundles
# are slow to load on Windows, so allow more than the default 10 seconds.
export FUNCTIONS_DISCOVERY_TIMEOUT="${FUNCTIONS_DISCOVERY_TIMEOUT:-60}"

# ---- Options ----------------------------------------------------------------
ASSUME_YES=false
SKIP_BUILD=false
ONLY=""

usage() {
  cat <<'EOF'
Usage: ./scripts/deploy.sh [options]

  -y, --yes          Skip confirmation prompts (uncommitted changes, tbd() placeholders)
  --skip-build       Reuse the existing .output build instead of rebuilding
  --only <targets>   Deploy only some targets, e.g. "hosting" or "functions"
  -h, --help         Show this help

Environment overrides:
  FUNCTIONS_DISCOVERY_TIMEOUT   Seconds Firebase waits for the server to load (default 60)
  FIREBASE_CLI                  Command used to run the Firebase CLI
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -y|--yes)     ASSUME_YES=true ;;
    --skip-build) SKIP_BUILD=true ;;
    --only)       ONLY="${2:?--only needs a value, e.g. hosting}"; shift ;;
    -h|--help)    usage; exit 0 ;;
    *)            echo "Unknown option: $1"; usage; exit 1 ;;
  esac
  shift
done

# ---- Helpers ----------------------------------------------------------------
step() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }
warn() { printf '\033[1;33m!  %s\033[0m\n' "$1"; }
fail() { printf '\033[1;31mx  %s\033[0m\n' "$1"; exit 1; }

confirm() {
  $ASSUME_YES && return 0
  read -r -p "$1 [y/N] " reply
  [[ "$reply" =~ ^[Yy]$ ]]
}

# Always run from the repo root, wherever the script is called from.
cd "$(dirname "$0")/.."

# Prefer a locally installed CLI (fast); fall back to npx @latest (slower).
if [[ -z "${FIREBASE_CLI:-}" ]]; then
  if [[ -x node_modules/.bin/firebase ]]; then
    FIREBASE_CLI="npx firebase"
  else
    FIREBASE_CLI="npx --yes firebase-tools@latest"
  fi
fi

# ---- 1. Environment checks --------------------------------------------------
step "Checking environment"

node_major="$(node -p 'process.versions.node.split(".")[0]')"
if [[ "$node_major" != "$REQUIRED_NODE_MAJOR" ]]; then
  fail "Node $(node -v) detected, but Node $REQUIRED_NODE_MAJOR is required. Run: nvm use $REQUIRED_NODE_MAJOR"
fi
echo "Node $(node -v), Firebase CLI via: $FIREBASE_CLI"

branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ -n "$(git status --porcelain)" ]]; then
  warn "Uncommitted changes on '$branch'. Deploys use your working tree, not the last commit."
  confirm "Deploy anyway?" || fail "Aborted."
fi

if [[ -d data ]] && grep -rq "tbd(" data/; then
  count="$(grep -ro "tbd(" data/ | wc -l | tr -d ' ')"
  warn "$count tbd() placeholder(s) in data/. They render as yellow tags on the live site."
  confirm "Deploy with placeholders?" || fail "Aborted."
fi

# ---- 2. Build ---------------------------------------------------------------
if $SKIP_BUILD; then
  [[ -f "$SERVER_DIR/index.mjs" ]] || fail "No build found in $SERVER_DIR. Run without --skip-build."
  step "Skipping build (reusing .output)"
else
  step "Building Nuxt with the firebase preset"
  NITRO_PRESET=firebase npx nuxt build
fi

# ---- 3. Server dependencies -------------------------------------------------
# Nitro only copies the files it traces into .output/server/node_modules, which
# leaves firebase-functions incomplete. Wipe it and do a clean, full install.
if [[ -z "$ONLY" || "$ONLY" == *functions* ]]; then
  step "Installing server dependencies in $SERVER_DIR"
  rm -rf "$SERVER_DIR/node_modules" "$SERVER_DIR/package-lock.json"
  npm --prefix "$SERVER_DIR" install --omit=dev --no-audit --no-fund --loglevel=error
else
  step "Hosting-only deploy, skipping server dependency install"
fi

# ---- 4. Deploy --------------------------------------------------------------
step "Deploying to $PROJECT_ID"
args=(deploy --project "$PROJECT_ID")
[[ -n "$ONLY" ]] && args+=(--only "$ONLY")

# FIREBASE_CLI is intentionally unquoted so "npx firebase" splits into words.
$FIREBASE_CLI "${args[@]}"

printf '\n\033[1;32mDeployed in %ss\033[0m\n' "$SECONDS"