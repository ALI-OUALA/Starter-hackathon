## 2024-05-22 - Named Exports with React.lazy
**Learning:** Components like `LearnMore`, `RegistrationForm`, and `EventCalendar` are named exports, not default exports. `React.lazy` requires a default export.
**Action:** Use `.then(module => ({ default: module.ComponentName }))` when lazy loading named exports.

## 2025-05-22 - GSAP to Framer Motion Timing
**Learning:** GSAP's `yoyo: true` doubles the total animation cycle duration (forward + backward), whereas Framer Motion's keyframes define the entire sequence within the `duration`. When migrating, double the duration in Framer Motion to match GSAP's speed if using explicit return keyframes.
**Action:** Be explicit with keyframes (e.g., `[0, 30, 0]`) and set the total duration to match the full cycle time.

## 2025-05-23 - SVG Filter Reuse
**Learning:** `ElectricBorder` was generating a unique SVG filter for every instance (10+ on the page), causing DOM bloat and potential rendering overhead, despite the filters being visually identical.
**Action:** Extract heavy, identical SVG filters into a single global definition (e.g., in `App.tsx`) and reference it by ID in the consuming components.

## 2025-05-24 - Visual Component Separation
**Learning:** `ElectricBorder` re-rendered expensive visual elements (glows, borders) every time its children (e.g., form inputs) updated, causing unnecessary VDOM diffing for 100+ nodes on every keystroke.
**Action:** Extract static visual elements into a memoized sub-component (e.g., `ElectricBorderVisuals`) so they only re-render when their specific props (`color`, `variant`) change, not when children change.

## 2025-05-25 - Conditional Heavy Filters
**Learning:** The 'minimal' variant of `ElectricBorder` applied the same heavy SVG displacement filter as the 'default' variant, despite not needing the wavy distortion effect. This caused unnecessary GPU overhead on simple inputs.
**Action:** Conditionally apply CSS filters (e.g., `filter: url(...)`) only when the visual variant requires it. Use `filter: none` for simpler variants.
