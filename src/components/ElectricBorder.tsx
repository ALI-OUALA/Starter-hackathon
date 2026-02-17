import { ReactNode } from "react";
import { ELECTRIC_FILTER_ID } from "./ElectricFilterDef";

interface ElectricBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function ElectricBorder({ 
  children, 
  className = "",
  color = "#8b5cf6" // purple-500 by default
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

          {/* Overlay effects */}
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
        </div>

        {/* Content wrapper */}
        <div className="relative rounded-2xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
