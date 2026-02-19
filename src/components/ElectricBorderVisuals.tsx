import { memo } from "react";
import { ELECTRIC_FILTER_ID } from "./ElectricFilterDef";

interface ElectricBorderVisualsProps {
  color: string;
  variant: "default" | "minimal";
}

// ⚡ Bolt Optimization:
// Separated visual elements from content wrapper to allow memoization.
// This prevents expensive border/glow re-renders when children (like inputs) update.
export const ElectricBorderVisuals = memo(function ElectricBorderVisuals({
  color,
  variant,
}: ElectricBorderVisualsProps) {
  return (
    <>
      {/* Outer border with slight opacity */}
      <div
        className="border-2 rounded-2xl pr-1 pb-1"
        style={{ borderColor: `${color}80` }}
      >
        {/* Main electric border */}
        <div
          className="electric-main-border w-full h-full rounded-2xl border-2 -mt-1 -ml-1"
          style={{
            borderColor: color,
            filter: `url(#${ELECTRIC_FILTER_ID})`,
          }}
        />
      </div>

      {/* Glow layers */}
      <div
        className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
        style={{
          borderColor: `${color}99`,
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
        style={{
          borderColor: color,
          filter: 'blur(4px)',
        }}
      />

      {/* Overlay effects - only for default variant */}
      {variant === "default" && (
        <>
          <div
            className="absolute inset-0 rounded-2xl opacity-100 mix-blend-overlay pointer-events-none"
            style={{
              transform: 'scale(1.1)',
              filter: 'blur(16px)',
              background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl opacity-50 mix-blend-overlay pointer-events-none"
            style={{
              transform: 'scale(1.1)',
              filter: 'blur(16px)',
              background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
            }}
          />

          {/* Background glow */}
          <div
            className="absolute inset-0 rounded-2xl -z-10 opacity-30 pointer-events-none"
            style={{
              filter: 'blur(32px)',
              transform: 'scale(1.1)',
              background: `linear-gradient(-30deg, ${color}, transparent, ${color}cc)`,
            }}
          />
        </>
      )}
    </>
  );
});
