# Gui Fernandes · Portfolio

Personal portfolio built with Nuxt 3. Single page, server-rendered, deployed to Firebase.

## Project structure

```
components/
  layout/      TheHeader, MobileMenu
  sections/    One folder per page section (hero, specialism, lab, featured, work, experience, toolkit, contact)
  ui/          Small reusable pieces: PillButton, SectionLabel, TagChip, TbdTag, InfoText
  _legacy/     Previous design. Not registered or used.
composables/   useTicker, useActiveSection, useCvDownload, useScroller
data/          All page content (text, links, projects, experience). Edit here, not in components.
types/         Content types (portfolio.ts)
utils/         tbd() helper, allocation demo maths, ml/ (the three ML lab algorithms)
```

## Editing content and the yellow TBD tags

All copy lives in `data/*.ts`. Anything that still needs checking is wrapped in `tbd()`:

```ts
year: tbd('2026') // renders with a yellow "to be confirmed" tag
year: '2026' // renders as normal text
```

To find everything left to confirm, search the project for `tbd(`. Work rows without an `href` also show an "add link" tag.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## BUILD & DEPLOY

```bash
npm run build --preset=firebase

npx firebase-tools deploy


npm run deploy 
```