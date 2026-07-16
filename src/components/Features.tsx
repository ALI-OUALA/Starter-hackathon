import { motion } from "motion/react";
import { Code, Users, Trophy, Zap, Sparkles, Rocket } from "lucide-react";
import { ElectricBorder } from "./ElectricBorder";

// ⚡ Bolt Optimization: Extracted inline styles to module-level constants.
// This prevents React from creating new object references on every render,
// reducing garbage collection churn and unnecessary vDOM diffing overhead.
const transformHardwareAcceleration = { willChange: "transform" } as const;

// ⚡ Bolt Optimization: Extracted inline array to a module-level constant.
const FEATURE_COLORS = ["#8b5cf6", "#ec4899", "#f59e0b", "#06b6d4"];

const features = [
  {
    icon: Code,
    title: "Build & Learn",
    description: "Work on real-world projects and learn cutting-edge technologies from industry experts.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Users,
    title: "Network",
    description: "Connect with talented individuals and form teams that could last beyond the hackathon.",
    color: "from-pink-500 to-purple-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
  },
  {
    icon: Trophy,
    title: "Win Prizes",
    description: "Compete for amazing prizes and recognition from leading tech companies.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Zap,
    title: "Fast-Paced",
    description: "72 hours of intense innovation, creativity, and collaboration in an exciting environment.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
  },
];

// ⚡ Bolt Optimization: Extracted inline animation objects to prevent re-allocation on every render inside the mapped array.
const featureHoverState = {
  scale: 1.02,
  rotateY: 2,
  transition: { duration: 0.2 }
};

const featureIconHoverState = {
  rotate: 360,
  scale: 1.1
};

const featureIconTransition = { duration: 0.6 } as const;

// ⚡ Bolt Optimization: Extracted inline animation variants to a module-level constant.
// This prevents React from creating a new object reference on every render for each mapped item,
// reducing garbage collection churn and unnecessary vDOM diffing overhead.
const featureCardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 100 }
  }
} as const;

// ⚡ Bolt Optimization: Extracted inline animation variants to module-level constants.
// This prevents React from creating new object references on every render,
// reducing garbage collection churn and unnecessary vDOM diffing overhead.
const featureHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} as const;

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
} as const;

const featureInfoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
} as const;

// ⚡ Bolt Optimization: Extracted inline viewport configuration object to a module-level constant.
// This prevents reallocation of the viewport object on every render cycle, reducing overhead.
const viewportConfig = { once: true, amount: 0.2 } as const;

export function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={staggerContainerVariants}
      className="py-32 px-4 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={featureHeaderVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">What You'll Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-200 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Why Join STARTER?
          </h2>
          <p className="text-xl text-purple-300/70 max-w-2xl mx-auto">
            Experience the thrill of creating something extraordinary in just 72 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={featureCardVariants}
              whileHover={featureHoverState}
              className="group relative"
              style={transformHardwareAcceleration}
            >
              {/* ⚡ Bolt Optimization: Use 'minimal' variant in mapped lists to prevent rendering expensive SVG filters and mix-blend modes multiple times */}
              <ElectricBorder 
                color={FEATURE_COLORS[index] || "#06b6d4"}
                variant="minimal"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-purple-950/50 to-purple-900/30 backdrop-blur-xl p-8 rounded-2xl">
                  {/* Icon container */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div 
                      whileHover={featureIconHoverState}
                      transition={featureIconTransition}
                      style={transformHardwareAcceleration}
                      className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 border ${feature.borderColor} group-hover:shadow-lg transition-all duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-purple-300 group-hover:text-purple-200 transition-colors" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-purple-100 group-hover:text-purple-50 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-purple-300/80 leading-relaxed group-hover:text-purple-300/90 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-purple-500/20 rounded-tr-3xl group-hover:border-purple-400/40 transition-colors" />
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-b-2xl`} />
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          variants={featureInfoVariants}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/30">
            <Rocket className="w-5 h-5 text-purple-400" />
            <p className="text-purple-200">
              <span className="font-bold">500+</span> participants • <span className="font-bold">$50K</span> in prizes • <span className="font-bold">72</span> hours of innovation
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
