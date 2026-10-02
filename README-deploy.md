# Deploying gui-fernandes-web

The site is a Nuxt app deployed to Firebase project `gui-fernandes-web`. Nuxt's `firebase` preset builds two things into `.output/`:

- `.output/public` — static assets, served by **Firebase Hosting**
- `.output/server` — the server-side rendering bundle, deployed as a **Cloud Function** that Hosting forwards page requests to

## Quick start

From Git Bash, in the repo root:

```bash
./scripts/deploy.sh
```

That's it. The script checks your environment, builds, installs the server dependencies and deploys.

### Options

| Command | What it does |
| --- | --- |
| `./scripts/deploy.sh` | Full build and deploy (Hosting + Functions) |
| `./scripts/deploy.sh --only hosting` | Static assets only. Faster, skips the server install. Only safe when no server code changed. |
| `./scripts/deploy.sh --only functions` | Server function only |
| `./scripts/deploy.sh --skip-build` | Reuse the existing `.output` build (e.g. retrying after a network failure) |
| `./scripts/deploy.sh --yes` | Skip the confirmation prompts |
| `./scripts/deploy.sh --help` | Show all options |

Options can be combined: `./scripts/deploy.sh --skip-build --only functions -y`.

### Optional: npm shortcut

Add to `package.json` → `scripts`:

```json
"deploy": "bash scripts/deploy.sh"
```

Then run `npm run deploy` (pass options after `--`, e.g. `npm run deploy -- --only hosting`).

### Optional: faster CLI startup

The script uses `npx firebase-tools@latest` by default, which re-checks npm for the latest version on every run. Installing the CLI in the project makes the script use the local copy instead:

```bash
npm install -D firebase-tools
```

Update it occasionally with `npm install -D firebase-tools@latest`.

## What the script does

1. **Checks Node is version 22.** Cloud Functions runs this code on Node 22 (`engines` in the server `package.json`), and newer Node versions break an old dependency (see troubleshooting). Switch with `nvm use 22`.
2. **Warns about uncommitted changes.** `firebase deploy` uploads whatever is in your working folder, not what's committed, so unfinished work goes live.
3. **Warns about `tbd()` placeholders** in `data/`, which show as yellow tags on the site.
4. **Builds** with `NITRO_PRESET=firebase npx nuxt build`.
5. **Reinstalls `.output/server/node_modules` from scratch.** Nitro only copies the files it traces, which leaves `firebase-functions` incomplete, and the Firebase CLI needs the full package to analyse the code. A plain `npm install` on top of the traced folder crashes npm, so the folder is deleted first.
6. **Deploys** with `FUNCTIONS_DISCOVERY_TIMEOUT=60`, because loading the Nuxt bundle on Windows takes longer than Firebase's default 10 seconds.

> If `firebase.json` still has a `predeploy` hook that installs `.output/server`, remove it — the script already does this, and keeping both installs twice. If you prefer deploying by hand without the script, keep the hook and follow the manual steps below.

## Manual deploy (without the script)

```bash
nvm use 22
NITRO_PRESET=firebase npx nuxt build
rm -rf .output/server/node_modules .output/server/package-lock.json
npm --prefix .output/server install --omit=dev
FUNCTIONS_DISCOVERY_TIMEOUT=60 npx firebase-tools@latest deploy --project gui-fernandes-web
```

## Troubleshooting

Every error below was hit while getting the first deploy working.

| Error | Cause | Fix |
| --- | --- | --- |
| `Assertion failed: resolving hosting target of a site with no site name or target name` | Bug in an old Firebase CLI version | Use `npx firebase-tools@latest` (or update the local install) |
| `HTTP Error: 401, Request had invalid authentication credentials` while `firebase login` says "Already logged in" | Saved login token expired or was revoked | `npx firebase-tools@latest login --reauth`. If it persists, check `echo $GOOGLE_APPLICATION_CREDENTIALS` and `echo $FIREBASE_TOKEN` aren't overriding the login. |
| `Couldn't find firebase-functions package` / `Cannot find module ...firebase-functions\lib\v2\index.js` / `An unexpected error has occurred` | `.output/server/node_modules` only has Nitro's traced files | Clean install in `.output/server` (step 5) |
| `npm error Cannot read properties of null (reading 'fsTop')` | npm crashing while trying to repair Nitro's traced `node_modules` | Delete `.output/server/node_modules` and `package-lock.json` first, then install. Also try `npm cache verify` and updating npm. |
| `TypeError: Cannot read properties of undefined (reading 'prototype')` in `buffer-equal-constant-time` | Running on Node 25+, which removed `SlowBuffer` | `nvm use 22`. Check with `node -v`; if it looks right but still fails, run `where node` to find a second Node install. |
| `User code failed to load. Cannot determine backend specification. Timeout after 10000` | Server bundle takes more than 10s to load | `FUNCTIONS_DISCOVERY_TIMEOUT=60`. If it still times out, test the load time with `time node -e "import('./.output/server/index.mjs').then(() => process.exit(0))"`. If that hangs, some server code is doing work (like a network call) at import time instead of inside a request handler. |

Deprecation warnings during `npm install` (`inflight`, `glob`, `request`, etc.) are harmless noise from old sub-dependencies.

For more detail on any failure, add `--debug` to the deploy command, or read `firebase-debug.log` in the repo root.