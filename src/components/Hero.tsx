import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";

interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

export function Hero({ onRegisterClick, onLearnMoreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-500/30 rounded-2xl rotate-12"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-pink-500/30 rounded-full"
      />

      <div className="max-w-7xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">November 15-17, 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-4 relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
                <span className="relative bg-gradient-to-br from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  STARTER
                </span>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-purple-100/90 leading-relaxed"
            >
              Where Innovation <span className="text-pink-400">Begins</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-purple-300/70 leading-relaxed max-w-xl"
            >
              Join developers, designers, and innovators from around the world
              in a 72-hour journey to build the future. Turn your ideas into
              reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                onClick={onRegisterClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg group shadow-lg shadow-purple-500/50 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={onLearnMoreClick}
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Right side - Decorative cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Main floating card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-80 h-96 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-purple-400/40 rounded mb-2" />
                    <div className="h-2 w-16 bg-purple-400/20 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-purple-400/20 rounded" />
                  <div className="h-2 w-5/6 bg-purple-400/20 rounded" />
                  <div className="h-2 w-4/6 bg-purple-400/20 rounded" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-12 bg-purple-500/30 rounded-xl" />
                </div>
              </motion.div>

              {/* Secondary card */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-64 h-80 bg-gradient-to-br from-pink-600/20 to-purple-800/20 backdrop-blur-xl rounded-3xl border border-pink-500/30 p-6 shadow-2xl"
              >
                <div className="w-10 h-10 bg-pink-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-pink-300" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-pink-400/20 rounded" />
                  <div className="h-2 w-4/5 bg-pink-400/20 rounded" />
                  <div className="h-2 w-3/5 bg-pink-400/20 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
