import { ReactNode } from "react";
import { ElectricBorderVisuals } from "./ElectricBorderVisuals";

interface ElectricBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  variant?: "default" | "minimal";
}

export function ElectricBorder({ 
  children, 
  className = "",
  color = "#8b5cf6", // purple-500 by default
  variant = "default"
}: ElectricBorderProps) {
  // Uses global filter defined in ElectricFilterDef (rendered in App.tsx)
  
  return (
    <div className={`relative ${className}`}>
      <div 
        className="electric-border-container relative p-0.5 rounded-2xl"
        style={{
          background: `linear-gradient(-30deg, ${color}40, transparent, ${color}40), linear-gradient(to bottom, #1a0f2e, #1a0f2e)`,
        }}
      >
        <div className="electric-inner-container relative">
          {/* Visuals are memoized to prevent re-renders when children change */}
          <ElectricBorderVisuals color={color} variant={variant} />
        </div>

        {/* Content wrapper */}
        <div className="relative rounded-2xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
