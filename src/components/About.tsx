import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useCallback, useRef, type KeyboardEvent } from "react";
import { Calendar, MapPin, Clock, Award, Users, Target } from "lucide-react";
import { ElectricBorder } from "./ElectricBorder";

interface AboutProps {
  onCalendarClick: () => void;
}

export function About({ onCalendarClick }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleCalendarOpen = useCallback(() => {
    onCalendarClick();
  }, [onCalendarClick]);

  const handleLocationOpen = useCallback(() => {
    const mapUrl = "https://maps.google.com/?q=STARTER+Hackathon+Hybrid+Hub";
    const newWindow = window.open(mapUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }, []);

  const handleKeyActivate = (event: KeyboardEvent<HTMLDivElement>, action?: () => void) => {
    if (!action) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "November 15-17, 2025",
      action: handleCalendarOpen,
      actionLabel: "View the detailed schedule",
    },
    {
      icon: Clock,
      label: "Duration",
      value: "72 Hours",
      action: handleCalendarOpen,
      actionLabel: "View the detailed schedule",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hybrid Event",
      action: handleLocationOpen,
      actionLabel: "Open the venue in Google Maps",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Participants" },
    { icon: Award, number: "$50K", label: "In Prizes" },
    { icon: Target, number: "20+", label: "Mentors" },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden" ref={ref}>
      {/* Diagonal background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-900/20 to-transparent transform skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-purple-400 uppercase tracking-wider text-sm font-semibold">About The Event</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 text-purple-100"
              >
                Your Launchpad to{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-purple-300/80 leading-relaxed"
            >
              STARTER is more than just a hackathon – it's a launchpad for your
              next big idea. Whether you're a seasoned developer or just
              starting your journey, this event is designed to help you push
              your boundaries and create something amazing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-purple-300/80 leading-relaxed"
            >
              With mentorship from industry leaders, workshops on the latest
              technologies, and a community of passionate builders, you'll have
              everything you need to bring your vision to life.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20"
                >
                  <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-black text-purple-100">{stat.number}</div>
                  <div className="text-xs text-purple-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Details cards with unique design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: 30, rotateY: -10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 30, rotateY: -10 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: 1.03,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className={`group relative ${detail.action ? "cursor-pointer" : "cursor-default"}`}
                style={{ perspective: "1000px" }}
                onClick={detail.action}
                onKeyDown={(event) => handleKeyActivate(event, detail.action)}
                role={detail.action ? "button" : undefined}
                tabIndex={detail.action ? 0 : -1}
                aria-label={
                  detail.action
                    ? `${detail.label}: ${detail.value}. ${detail.actionLabel}`
                    : `${detail.label}: ${detail.value}`
                }
              >
                <ElectricBorder color="#8b5cf6">
                  {/* Main card */}
                  <div className="relative flex items-center gap-6 bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-8 rounded-2xl overflow-hidden">
                    {/* Decorative background shape */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
                    
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:border-purple-400/60 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <detail.icon className="w-7 h-7 text-purple-300 group-hover:text-purple-200 transition-colors relative z-10" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-2xl transition-colors" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <p className="text-sm text-purple-400 mb-1.5 uppercase tracking-wide font-semibold">
                        {detail.label}
                      </p>
                      <p className="text-xl font-bold text-purple-100 group-hover:text-purple-50 transition-colors">
                        {detail.value}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    {detail.action ? (
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    ) : null}
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}

            {/* Additional decorative card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <ElectricBorder color="#ec4899">
                <div className="relative p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
                  <p className="text-purple-200 relative z-10 leading-relaxed">
                    <span className="text-pink-400 font-bold">💡 Pro Tip:</span> Bring your laptop, your creativity, and an open mind. The rest, we'll provide!
                  </p>
                </div>
              </ElectricBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
