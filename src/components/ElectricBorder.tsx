import { ReactNode } from "react";

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
  // Generate unique ID for each instance
  const filterId = `turbulent-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute w-0 h-0">
        <defs>
          <filter 
            id={filterId} 
            colorInterpolationFilters="sRGB" 
            x="-20%" 
            y="-20%" 
            width="140%" 
            height="140%"
          >
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap 
              in="SourceGraphic" 
              in2="combinedNoise" 
              scale="30" 
              xChannelSelector="R" 
              yChannelSelector="B" 
            />
          </filter>
        </defs>
      </svg>

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
                filter: `url(#${filterId})`,
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
