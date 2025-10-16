
# Create Hackathon Landing Page

Modern landing page built with Vite, React 18, and TypeScript, styled with Tailwind and powered by accessible Radix UI primitives. Clean structure, fast DX, and easy to extend.


## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind utilities (generated in `src/index.css`) with lightweight overrides in `src/styles/globals.css`
- Radix UI wrappers under `src/components/ui`
- Motion/animation primitives (`AnimatedBlob`, `GridPattern`)
- Form handling with `react-hook-form` and toasts via `sonner`
- Calendar via `react-day-picker`

## Quick Start

1) Install dependencies

```bash
npm install
```

2) Start the dev server (HMR on http://localhost:5173)

```bash
npm run dev
```

3) Build for production

```bash
npm run build
```

4) (Optional) Preview the production build

```bash
npx vite preview --host
```

> Keep `package-lock.json` checked in to ensure consistent installs.

## Project Structure

```
.
├─ index.html
├─ vite.config.ts
├─ package.json
├─ src/
│  ├─ main.tsx                # Mounts React 18
│  ├─ App.tsx                 # Orchestrates view switching
│  ├─ index.css               # Generated Tailwind layer + tokens
│  ├─ styles/globals.css      # Local overrides
│  ├─ Attributions.md         # Third‑party acknowledgments
│  ├─ components/
│  │  ├─ Hero.tsx, Features.tsx, Footer.tsx, About.tsx, LearnMore.tsx
│  │  ├─ EventCalendar.tsx    # Calendar section
│  │  ├─ RegistrationForm.tsx # Form flows
│  │  ├─ RegisterDialog.tsx   # Dialog wrapper
│  │  ├─ AnimatedBlob.tsx, GridPattern.tsx, ElectricBorder.tsx
│  │  ├─ figma/               # Design-specific helpers
│  │  └─ ui/                  # Radix UI wrappers (accordion, dialog, etc.)
│  └─ ...
└─ public/
```

Add new media under `src/styles` or within a component-scoped folder in `src/components` to keep imports local.

## Features

- Responsive hero and section layout based on the provided Figma
- Accessible dialogs, menus, and inputs via Radix wrappers in `components/ui`
- Smooth micro‑interactions/animation primitives without heavy runtime cost
- Form validation and submission UX with toast feedback
- Event calendar browsing with keyboard and screen‑reader support

## Development Notes

- TypeScript + function components; prefer hooks and prop drilling over context unless shared globally
- Imports ordered: external → aliased → relative (`./`)
- Naming: Components PascalCase, hooks/utilities camelCase, constants UPPER_SNAKE
- Compose styles with Tailwind; reuse helpers from `components/ui` and `tailwind-merge`
- Keep component-specific styles colocated; avoid inline style objects unless computed

## Manual QA Checklist

- Hero renders correctly on mobile and desktop
- Dialogs open/close and trap focus (`RegisterDialog`)
- Registration form validates inputs and shows toasts
- Calendar navigation works via click and keyboard
- No console errors; layout stable across breakpoints

## Scripts

- `npm run dev` — Launch Vite with HMR
- `npm run build` — Produce optimized bundle in `dist/`
- `npx vite preview --host` — Serve the built assets for device QA

## Attributions

Credits and third‑party acknowledgments live in `src/Attributions.md` so they ship with the bundle.

## Contributing

- Keep PR scope cohesive; squash incidental fixes
- Write imperative commits (e.g., "Add schedule tooltip") under 72 characters
- In PR descriptions: link tickets, summarize changes, list tests run, and include UI screenshots/GIFs
- Call out CSS token or dependency updates explicitly

## Deployment

Any static host (Netlify, Vercel, S3, etc.) works:

1) `npm run build` → outputs to `dist/`
2) Upload `dist/` to your host
3) Use `npx vite preview --host` locally for a production‑like check
  
