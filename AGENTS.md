# Repository Guidelines

## Project Structure & Module Organization
- Root contains `index.html`, `vite.config.ts`, and `package.json`.
- Source lives in `src/`: `main.tsx` mounts React 18, while `App.tsx` orchestrates view switching.
- `src/components` holds page sections; `components/ui` wraps Radix primitives; `components/figma` supplies design-specific helpers.
- Tailwind-generated globals sit in `src/index.css` with overrides in `src/styles/globals.css`; licensing copy stays in `src/Attributions.md`.
- Add new media under `src/styles` or a scoped folder inside `src/components` to keep imports local.

## Build, Test, and Development Commands
- `npm install` installs dependencies; keep `package-lock.json` checked in.
- `npm run dev` launches Vite with HMR on http://localhost:5173—smoke-test hero animations, dialogs, and form flows here.
- `npm run build` outputs a production bundle in `dist/`; resolve any warnings before merging.
- `npx vite preview --host` (optional) serves the built assets for device QA.

## Coding Style & Naming Conventions
- Use TypeScript + React function components; prefer hooks and prop drilling over context unless data is shared globally.
- Indent with two spaces; order imports external → aliased → relative (`./`).
- Files and components use PascalCase (`RegisterDialog.tsx`); hooks/utilities camelCase (`useMobile`); constants UPPER_SNAKE.
- Compose styling with Tailwind classes and reuse helpers from `src/components/ui` and `tailwind-merge` to avoid duplicate utilities.
- Keep component-specific styles colocated; avoid inline style objects unless values are computed.

## Testing Guidelines
- Automated tests are not wired yet; adopt Vitest + Testing Library when adding logic-heavy features.
- Name specs `ComponentName.test.tsx` and colocate them next to the component or in `src/__tests__`.
- Cover state transitions (`App.tsx`) and interactions (`RegistrationForm.tsx`, `EventCalendar.tsx`); include basic a11y assertions for Radix wrappers.
- Until coverage tooling lands, note manual QA steps in PRs (e.g., “Verify calendar navigation on desktop and mobile”).

## Commit & Pull Request Guidelines
- Write imperative commit summaries (“Add schedule tooltip”) under 72 characters.
- Squash incidental fixes before opening a PR; keep PR scope to a cohesive feature or bug.
- PR descriptions should link tickets, summarize changes, list tests run, and include UI screenshots/GIFs.
- Call out CSS token or dependency updates explicitly and tag reviewers responsible for deployment.

## Design & Configuration Tips
- Update design tokens via `src/index.css`; document the upstream source (Figma or Tailwind config) when editing generated sections.
- Reuse animation primitives (`AnimatedBlob`, `GridPattern`) instead of cloning motion code.
- Keep third-party acknowledgments in `src/Attributions.md` so credits ship with the bundle.
