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

## 2025-05-26 - ElectricBorder Composition Performance
**Learning:** `ElectricBorder` is memoized internally (`ElectricBorderVisuals`), but wrapping dynamic children (like form inputs) causes the parent `ElectricBorder` wrapper to re-render on every child update. This propagates re-renders to siblings if they are not memoized.
**Action:** Wrap `ElectricBorder` + `Input` pairs in a memoized component (e.g. `TextInputField`) and ensure all props passed to it (especially callbacks and JSX labels) are stable.

## 2025-05-27 - SVG Filter Optimization
**Learning:** High `numOctaves` (e.g., 10) in SVG filters like `feTurbulence` causes significant GPU/CPU load, especially when animated. Deduplication of identical noise generators also saves processing.
**Action:** Use lower `numOctaves` (2-3) for visual effects unless fine detail is critical. Reuse noise outputs for multiple displacement maps where possible.

## 2025-05-28 - Static Data Extraction
**Learning:** Large static data arrays (e.g., schedules, FAQs) defined inside component render functions are re-allocated on every render, increasing garbage collection pressure.
**Action:** Move static data definitions outside the component (to module scope) or use `useMemo` (if dependent on props) to ensure reference stability and reduce memory churn.

## 2025-05-29 - Layout Thrashing with Continuous Filters
**Learning:** Animating non-transform CSS properties (like `borderRadius`) on a large element with an expensive filter (`blur-3xl`) causes severe layout and paint thrashing on every frame, killing framerate.
**Action:** Replace morphing shape animations (`borderRadius`) with GPU-accelerated transforms (`scaleX`, `scaleY`, `rotate`) combined with a fixed border radius, and add `will-change: transform`.

## 2025-05-30 - Form State Colocation
**Learning:** Placing rapidly changing state (like `formData` updated on every keystroke) at the top level of a page component causes all static siblings—including heavy animated elements (`motion.div`) and complex wrappers (`ElectricBorder`)—to re-render unnecessarily.
**Action:** Move form state down into a dedicated inner component (e.g., `RegistrationInnerForm`). This isolates the re-renders to the form fields themselves, preventing full-page VDOM diffing on every keystroke.

## 2025-05-31 - Lazy Loading Navigation Waterfall
**Learning:** Using `React.lazy` for route components improves initial load time but introduces a noticeable latency (and Suspense spinner) when the user first navigates to them, disrupting the SPA experience.
**Action:** Implement intent-based or idle-time prefetching (`import(...)`) for lazy-loaded routes so the chunks are already in the browser cache before the user clicks.

## 2025-06-01 - Layout Thrashing with Continuous Transforms on Blurred Elements
**Learning:** Animating transform properties (`y`, `rotate`) on a large element with an expensive CSS filter (`backdrop-blur-xl`) continuously forces the browser to repaint the blur on the main thread if the element is not explicitly promoted to its own composite layer, leading to jittery scrolling and high GPU/CPU usage.
**Action:** Explicitly add `style={{ willChange: "transform" }}` to elements with continuous layout or transform animations, especially those with heavy CSS filters like `backdrop-blur`, to ensure the browser composites these elements on the GPU and prevents main-thread paint thrashing.

## 2025-06-02 - Layout Thrashing with Hover Transforms on Blurred Elements
**Learning:** Similar to continuous animations, interaction-based animations (like Framer Motion's `whileHover`) on elements with heavy CSS filters (such as `backdrop-blur-xl` or those rendered within an `ElectricBorder`) also cause main-thread paint thrashing during the interaction. The browser must recalculate and repaint the blur effect on every frame of the hover transition.
**Action:** Always explicitly add `style={{ willChange: "transform" }}` to interactive elements (e.g., cards, lists, icons) that use `whileHover` or `whileTap` to animate transform properties when they also contain or are layered with expensive CSS effects like blurs.

## 2025-06-03 - Page-Level Layout Re-render Isolation with useInView
**Learning:** Using `useInView` at the top level of a large page component (like `EventCalendar`) causes the entire page—including headers, hero sections, and footers—to unnecessarily re-render when the user scrolls to the target section. This forces VDOM diffing for elements that have already animated in and have no dynamic state changes.
**Action:** Extract scroll-triggered sections into their own dedicated sub-components (e.g., `ScheduleTimeline`) and move the `useInView` hook inside them. This isolates the re-render solely to the section that needs to animate on scroll.

## 2025-06-04 - React Re-Renders Triggered by useInView Hook
**Learning:** Using the `useInView` hook from `motion/react` combined with a `useRef` to manually trigger scroll animations (`animate={isInView ? { ... } : { ... }}`) forces a React state update whenever the intersection observer fires. This causes unnecessary component re-renders.
**Action:** When implementing scroll-triggered animations with Framer Motion, strongly prefer using the built-in `whileInView` and `viewport={{ once: true }}` props directly on `motion` elements. This defers the intersection observation and animation triggering entirely to Framer Motion's internal optimizations without triggering React component state updates or re-renders.

## 2025-06-05 - Layout Thrashing with Mount Animations on Blurred Elements
**Learning:** Similar to continuous or interaction-based animations, initial mount animations (like `opacity` or `y` translation) on elements with heavy CSS filters (such as `backdrop-blur-xl`) cause main-thread paint thrashing until the animation completes. This is particularly noticeable on large structural elements like sticky headers that slide and fade in when the component mounts.
**Action:** Always explicitly add `style={{ willChange: "transform, opacity" }}` to elements that animate in on mount when they also contain or are layered with expensive CSS effects like blurs. This ensures the browser promotes them to a composite layer immediately, maintaining a smooth 60fps during the entrance animation.

## 2025-06-06 - Framer Motion staggerChildren Overhead
**Learning:** Replacing a standard DOM `div` with a `<motion.div>` solely to use Framer Motion's `staggerChildren` (instead of using inline math like `delay: index * 0.1` on child `motion.div`s) is an API refactoring, not a measurable performance optimization. In fact, it slightly increases React component tree overhead by introducing another complex `motion` object layer.
**Action:** Do not "optimize" inline math delays into `staggerChildren` unless the parent wrapper is already a `motion` component or there is a proven bug with the inline delays. Focus on removing unnecessary `motion` wrappers instead.

## 2025-06-07 - Object Reallocation in Mapped Arrays
**Learning:** Defining inline object literals (like `whileHover={{ scale: 1.02 }}`) inside `.map()` arrays causes React to create a new object reference on every render for every mapped element, adding garbage collection churn and potentially breaking pure component shallow comparisons down the tree.
**Action:** Always extract static configuration objects, variants, and inline style objects that do not depend on closure variables to module-level constants (outside the component) when they are used inside `map` operations.

## 2025-06-08 - Fixing Fatal Undefined Style Bug Passed to React
**Learning:** An undefined reference (e.g., `style={detailStyle}` where `detailStyle` is undefined) passed to a heavily nested `motion.div` in `About.tsx` was causing a fatal `ReferenceError` exception, potentially crashing the layout or blocking rendering entirely. Replacing this with a module-scoped constant directly targets both bug fixing and performance (by preventing React reallocations on each render of the map loop).
**Action:** Always verify that extracted or assumed style objects are actually defined in scope. When extracting styles like `{ willChange: "transform" }` for `motion` elements, make sure to define them as `const` outside the component scope to combine bug fixes with memory allocation optimizations.

## 2025-06-09 - Inline Arrays in Maps
**Learning:** Defining inline static arrays (like ["#8b5cf6", "#ec4899", "#06b6d4"]) inside .map() array iterations causes React to reallocate the array on every render cycle for each item in the map loop. This increases garbage collection pressure, even if the array itself is small. Extracting these to constants ensures reference stability and reduces memory churn.
**Action:** Extract inline static arrays into module-scoped constants outside the component definition.

## 2025-06-10 - Inline Motion Variants inside Components
**Learning:** Defining `variants={{ ... }}` inline on `motion.div` elements (even outside of `.map()` loops) inside a React component causes the object reference to be recreated on every render. For static variants, this adds unnecessary garbage collection pressure and VDOM diffing overhead, especially when multiplied across many animated elements.
**Action:** Always extract static `framer-motion` variants into module-scoped constants outside of the React component, maintaining `as const` if type inferences are needed.

## 2025-06-11 - Static Motion Variants Extraction
**Learning:** Defining inline `variants` objects for Framer Motion on `<motion.div>` or `<motion.section>` elements within components causes React to allocate a new object on every render. Even though these variants are static, this increases GC pressure and breaks pure component shallow comparisons. Grouping these across the codebase (e.g., stagger containers) amplifies the problem.
**Action:** Always extract static `variants` objects into module-level constants (e.g., `staggerContainerVariants`) outside the component to ensure referential equality across renders.

## 2025-06-12 - Static variants extraction applied outside maps
**Learning:** Defining inline `variants` objects for Framer Motion on `<motion.div>` or `<motion.section>` elements within components causes React to allocate a new object on every render. Even though these variants are static, this increases GC pressure and breaks pure component shallow comparisons. Grouping these across the codebase (e.g., stagger containers) amplifies the problem.
**Action:** Always extract static `variants` objects into module-level constants (e.g., `fadeInUpVariant`) outside the component to ensure referential equality across renders, even when not inside a map.
