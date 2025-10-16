export function GridPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
    </div>
  );
}
