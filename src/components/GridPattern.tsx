import { memo } from "react";

// ⚡ Bolt Optimization: Extracted inline style object to prevent reallocation on every render.
const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px'
} as const;

// ⚡ Bolt Optimization:
// Memoized to prevent re-rendering when App state (like views) changes.
export const GridPattern = memo(function GridPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="absolute inset-0" style={gridStyle} />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
    </div>
  );
});
