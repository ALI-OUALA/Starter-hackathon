## 2024-05-22 - Named Exports with React.lazy
**Learning:** Components like `LearnMore`, `RegistrationForm`, and `EventCalendar` are named exports, not default exports. `React.lazy` requires a default export.
**Action:** Use `.then(module => ({ default: module.ComponentName }))` when lazy loading named exports.

## 2025-05-22 - GSAP to Framer Motion Timing
**Learning:** GSAP's `yoyo: true` doubles the total animation cycle duration (forward + backward), whereas Framer Motion's keyframes define the entire sequence within the `duration`. When migrating, double the duration in Framer Motion to match GSAP's speed if using explicit return keyframes.
**Action:** Be explicit with keyframes (e.g., `[0, 30, 0]`) and set the total duration to match the full cycle time.

## 2025-05-23 - SVG Filter Reuse
**Learning:** `ElectricBorder` was generating a unique SVG filter for every instance (10+ on the page), causing DOM bloat and potential rendering overhead, despite the filters being visually identical.
**Action:** Extract heavy, identical SVG filters into a single global definition (e.g., in `App.tsx`) and reference it by ID in the consuming components.
