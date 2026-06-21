1. **Identify the Bottleneck**: The codebase contains multiple instances of inline `initial`, `animate`, and `whileInView` framer-motion variants (e.g. `initial={{ opacity: 0, y: -20 }}`) inside React components like `EventCalendar.tsx`, `Footer.tsx`, and `Hero.tsx`. Defining these objects inline causes React to recreate them on every render cycle, increasing garbage collection (GC) pressure and triggering unnecessary VDOM diffing overhead, especially in heavily animated applications.

2. **The Optimization**: Extract these inline motion variants into module-level static constants (e.g. `const headerInitial = { opacity: 0, y: -20 } as const;`). I will modify `src/components/EventCalendar.tsx`, `src/components/Footer.tsx`, and `src/components/Hero.tsx` to pull these inline definitions up to the module scope. This guarantees referential equality across renders, completely avoiding the memory allocation churn.

3. **Validation**: I will run the Vite development build (`pnpm run build`) to ensure there are no syntax errors and that the components still build correctly with the extracted variants.

4. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**

5. **Commit and Submit**: I will create a branch and submit the changes with the appropriate PR structure indicating the performance impact (reduced GC pressure and VDOM overhead) and the measurement method.
