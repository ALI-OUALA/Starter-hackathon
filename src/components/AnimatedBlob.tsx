import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function AnimatedBlob() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [0, 400]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Wrapper for initial positioning */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px]">
        {/* Wrapper for scroll animations */}
        <motion.div
          className="w-full h-full"
          style={{
            y,
            scale,
            rotate,
          }}
        >
          {/* Inner blob for continuous animations */}
          <motion.div
            className="w-full h-full bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-pink-500/30 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 30, 0],
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
              ],
            }}
            transition={{
              x: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              y: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              borderRadius: {
                duration: 16,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-800/20 via-purple-600/10 to-blue-500/20 rounded-full blur-3xl" />
    </div>
  );
}
