## 2024-05-22 - Named Exports with React.lazy
**Learning:** Components like `LearnMore`, `RegistrationForm`, and `EventCalendar` are named exports, not default exports. `React.lazy` requires a default export.
**Action:** Use `.then(module => ({ default: module.ComponentName }))` when lazy loading named exports.

## 2025-05-22 - GSAP to Framer Motion Timing
**Learning:** GSAP's `yoyo: true` doubles the total animation cycle duration (forward + backward), whereas Framer Motion's keyframes define the entire sequence within the `duration`. When migrating, double the duration in Framer Motion to match GSAP's speed if using explicit return keyframes.
**Action:** Be explicit with keyframes (e.g., `[0, 30, 0]`) and set the total duration to match the full cycle time.
