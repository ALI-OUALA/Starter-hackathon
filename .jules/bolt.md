## 2025-02-18 - Extract Inline Object Literals in Lists
**Learning:** Defining inline object literals (e.g. `whileHover={{ scale: 1.05 }}`) inside mapping functions (like `.map()`) creates new object instances on every render. For performance, particularly with Framer Motion, this causes unnecessary garbage collection and vDOM thrashing.
**Action:** Always extract configuration objects (variants, hover states, styles) into module-level static variables whenever possible, especially when they are applied inside loops rendering multiple child components.
