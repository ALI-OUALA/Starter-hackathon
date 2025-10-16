import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Trophy, 
  Code, 
  Zap, 
  Users,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";
import { ElectricBorder } from "./ElectricBorder";

interface LearnMoreProps {
  onBack: () => void;
  onRegisterClick: () => void;
}

export function LearnMore({ onBack, onRegisterClick }: LearnMoreProps) {
  return (
    <div className="min-h-screen">
      {/* Header with back button */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
          >
            Register Now
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <HeroSection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Prizes Section */}
      <PrizesSection />

      {/* Tracks Section */}
      <TracksSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection onRegisterClick={onRegisterClick} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Everything You Need to Know
          </h1>
          <p className="text-xl text-purple-300/80 leading-relaxed">
            STARTER is a 72-hour innovation marathon where developers, designers, and creators
            come together to build the future. Here's what you need to know.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const schedule = [
    {
      day: "Day 1 - Friday",
      date: "November 15, 2025",
      events: [
        { time: "6:00 PM", title: "Registration & Check-in", icon: Users },
        { time: "7:00 PM", title: "Opening Ceremony", icon: Rocket },
        { time: "8:00 PM", title: "Team Formation", icon: Users },
        { time: "9:00 PM", title: "Hacking Begins!", icon: Code },
      ]
    },
    {
      day: "Day 2 - Saturday",
      date: "November 16, 2025",
      events: [
        { time: "9:00 AM", title: "Breakfast & Networking", icon: Users },
        { time: "11:00 AM", title: "Workshop: AI Integration", icon: Lightbulb },
        { time: "2:00 PM", title: "Workshop: Design Thinking", icon: Lightbulb },
        { time: "6:00 PM", title: "Mentor Office Hours", icon: Users },
        { time: "8:00 PM", title: "Dinner & Entertainment", icon: Users },
      ]
    },
    {
      day: "Day 3 - Sunday",
      date: "November 17, 2025",
      events: [
        { time: "9:00 AM", title: "Final Push", icon: Zap },
        { time: "12:00 PM", title: "Hacking Ends", icon: Clock },
        { time: "1:00 PM", title: "Project Presentations", icon: Rocket },
        { time: "4:00 PM", title: "Judging & Deliberation", icon: Award },
        { time: "5:00 PM", title: "Closing Ceremony & Awards", icon: Trophy },
      ]
    }
  ];

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Event Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-100">
            72 Hours of Innovation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
            >
              <ElectricBorder color={dayIndex === 0 ? "#8b5cf6" : dayIndex === 1 ? "#ec4899" : "#06b6d4"}>
                <div className="bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-6 rounded-2xl h-full">
                  <h3 className="text-2xl font-bold text-purple-100 mb-2">{day.day}</h3>
                  <p className="text-purple-400 text-sm mb-6">{day.date}</p>
                  
                  <div className="space-y-4">
                    {day.events.map((event, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <event.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-purple-300 text-sm font-semibold">{event.time}</p>
                          <p className="text-purple-200">{event.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const prizes = [
    {
      place: "1st Place",
      amount: "$20,000",
      description: "Grand Prize + Mentorship + Cloud Credits",
      color: "#f59e0b",
      icon: Trophy
    },
    {
      place: "2nd Place",
      amount: "$15,000",
      description: "Runner-up Prize + Cloud Credits",
      color: "#a78bfa",
      icon: Award
    },
    {
      place: "3rd Place",
      amount: "$10,000",
      description: "Third Prize + Swag Package",
      color: "#06b6d4",
      icon: Award
    },
    {
      place: "Best Design",
      amount: "$5,000",
      description: "Design Tools Suite + Training",
      color: "#ec4899",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Prize Pool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-100">
            $50K in Prizes
          </h2>
          <p className="text-xl text-purple-300/70">
            Compete for amazing rewards and recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <ElectricBorder color={prize.color}>
                <div className="bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-6 rounded-2xl text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <prize.icon className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-100 mb-2">{prize.place}</h3>
                  <p className="text-3xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">
                    {prize.amount}
                  </p>
                  <p className="text-sm text-purple-300/70">{prize.description}</p>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TracksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tracks = [
    {
      title: "AI & Machine Learning",
      description: "Build intelligent applications powered by AI and ML technologies",
      color: "#8b5cf6"
    },
    {
      title: "Web3 & Blockchain",
      description: "Create decentralized applications and smart contracts",
      color: "#ec4899"
    },
    {
      title: "Climate Tech",
      description: "Develop solutions for environmental sustainability",
      color: "#10b981"
    },
    {
      title: "HealthTech",
      description: "Innovate in healthcare and wellness technology",
      color: "#f59e0b"
    },
    {
      title: "FinTech",
      description: "Build the future of financial services",
      color: "#06b6d4"
    },
    {
      title: "Open Innovation",
      description: "Any creative project that doesn't fit other categories",
      color: "#a78bfa"
    }
  ];

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Tracks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-100">
            Choose Your Track
          </h2>
          <p className="text-xl text-purple-300/70 max-w-2xl mx-auto">
            Pick a track that matches your passion and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all"
            >
              <div className="w-2 h-16 rounded-full mb-4" style={{ background: track.color }} />
              <h3 className="text-xl font-bold text-purple-100 mb-2">{track.title}</h3>
              <p className="text-purple-300/70">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Who can participate?",
      answer: "STARTER is open to everyone! Whether you're a student, professional, or hobbyist, if you're passionate about building and innovation, you're welcome to join."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or in teams of up to 4 people. Don't have a team? No problem! We'll help you find teammates during our team formation session."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, any hardware you plan to use, and your creativity! We'll provide meals, snacks, drinks, and workspace."
    },
    {
      question: "Is it really 72 hours straight?",
      answer: "While hacking runs for 72 hours, you're not expected to code non-stop! We have designated rest areas and encourage you to take breaks, sleep, and recharge."
    },
    {
      question: "What if I'm a beginner?",
      answer: "Perfect! STARTER welcomes all skill levels. We'll have workshops, mentors, and resources to help you learn and build something amazing."
    },
    {
      question: "How much does it cost?",
      answer: "Absolutely FREE! We cover food, workspace, swag, and provide access to all workshops and mentorship sessions at no cost."
    }
  ];

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-100">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-purple-100 mb-2">{faq.question}</h3>
                  <p className="text-purple-300/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ElectricBorder color="#8b5cf6">
            <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 backdrop-blur-xl p-12 rounded-2xl text-center">
              <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-purple-300/80 mb-8 max-w-2xl mx-auto">
                Join 500+ innovators in creating the next big thing. Registration closes soon!
              </p>
              <Button
                onClick={onRegisterClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/50"
              >
                Register for STARTER
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ElectricBorder>
        </motion.div>
      </div>
    </section>
  );
}
