import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Clock,
  MapPin,
  Users,
  Code,
  Lightbulb,
  Rocket,
  Award,
  Trophy,
  Zap,
  Coffee,
  Utensils
} from "lucide-react";
import { Button } from "./ui/button";
import { ElectricBorder } from "./ElectricBorder";

interface EventCalendarProps {
  onBack: () => void;
  onRegisterClick: () => void;
}

export function EventCalendar({ onBack, onRegisterClick }: EventCalendarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const schedule = [
    {
      day: "Friday - Day 1",
      date: "November 15, 2025",
      color: "#8b5cf6",
      events: [
        { 
          time: "6:00 PM - 7:00 PM", 
          title: "Registration & Check-in", 
          description: "Get your badge, meet the team, and settle in",
          icon: Users,
          location: "Main Hall"
        },
        { 
          time: "7:00 PM - 8:00 PM", 
          title: "Opening Ceremony", 
          description: "Welcome speech, keynote, and event kickoff",
          icon: Rocket,
          location: "Auditorium"
        },
        { 
          time: "8:00 PM - 9:00 PM", 
          title: "Team Formation & Networking", 
          description: "Find your teammates and start brainstorming",
          icon: Users,
          location: "Main Hall"
        },
        { 
          time: "9:00 PM", 
          title: "Hacking Begins! 🚀", 
          description: "Start building your project",
          icon: Code,
          location: "All Spaces"
        },
        { 
          time: "11:00 PM", 
          title: "Late Night Snacks", 
          description: "Pizza and energy drinks",
          icon: Coffee,
          location: "Cafeteria"
        },
      ]
    },
    {
      day: "Saturday - Day 2",
      date: "November 16, 2025",
      color: "#ec4899",
      events: [
        { 
          time: "8:00 AM - 9:00 AM", 
          title: "Breakfast", 
          description: "Fuel up for the day ahead",
          icon: Utensils,
          location: "Cafeteria"
        },
        { 
          time: "10:00 AM - 11:00 AM", 
          title: "Workshop: AI & Machine Learning", 
          description: "Learn how to integrate AI into your project",
          icon: Lightbulb,
          location: "Workshop Room A"
        },
        { 
          time: "11:00 AM - 12:00 PM", 
          title: "Workshop: UI/UX Design Principles", 
          description: "Create beautiful and intuitive interfaces",
          icon: Lightbulb,
          location: "Workshop Room B"
        },
        { 
          time: "12:00 PM - 1:00 PM", 
          title: "Lunch", 
          description: "Catered meal for all participants",
          icon: Utensils,
          location: "Cafeteria"
        },
        { 
          time: "2:00 PM - 3:00 PM", 
          title: "Workshop: Pitching Your Idea", 
          description: "Learn to present your project effectively",
          icon: Lightbulb,
          location: "Workshop Room A"
        },
        { 
          time: "4:00 PM - 6:00 PM", 
          title: "Mentor Office Hours", 
          description: "Get personalized guidance from industry experts",
          icon: Users,
          location: "Mentor Area"
        },
        { 
          time: "6:00 PM - 7:00 PM", 
          title: "Dinner", 
          description: "Evening meal and networking",
          icon: Utensils,
          location: "Cafeteria"
        },
        { 
          time: "8:00 PM - 9:00 PM", 
          title: "Mini Games & Entertainment", 
          description: "Take a break and have some fun",
          icon: Zap,
          location: "Main Hall"
        },
      ]
    },
    {
      day: "Sunday - Day 3",
      date: "November 17, 2025",
      color: "#06b6d4",
      events: [
        { 
          time: "8:00 AM - 9:00 AM", 
          title: "Breakfast", 
          description: "Last day fuel",
          icon: Utensils,
          location: "Cafeteria"
        },
        { 
          time: "9:00 AM - 12:00 PM", 
          title: "Final Push", 
          description: "Polish your project and prepare presentation",
          icon: Zap,
          location: "All Spaces"
        },
        { 
          time: "12:00 PM", 
          title: "Hacking Ends - Submission Deadline", 
          description: "All projects must be submitted",
          icon: Clock,
          location: "Online Submission"
        },
        { 
          time: "12:00 PM - 1:00 PM", 
          title: "Lunch Break", 
          description: "Relax before presentations",
          icon: Utensils,
          location: "Cafeteria"
        },
        { 
          time: "1:00 PM - 3:30 PM", 
          title: "Project Presentations", 
          description: "Each team presents their project (3 min each)",
          icon: Rocket,
          location: "Auditorium"
        },
        { 
          time: "3:30 PM - 4:30 PM", 
          title: "Judging & Deliberation", 
          description: "Judges evaluate and discuss projects",
          icon: Award,
          location: "Private Room"
        },
        { 
          time: "4:30 PM - 5:30 PM", 
          title: "Closing Ceremony & Awards", 
          description: "Winners announced, prizes distributed",
          icon: Trophy,
          location: "Auditorium"
        },
        { 
          time: "5:30 PM - 6:00 PM", 
          title: "Wrap-up & Networking", 
          description: "Say goodbye and exchange contacts",
          icon: Users,
          location: "Main Hall"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
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
            Back
          </Button>
          <Button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
          >
            Register Now
          </Button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Event Schedule</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              72-Hour Timeline
            </h1>
            <p className="text-xl text-purple-300/80 max-w-2xl mx-auto">
              Here's the complete schedule for STARTER Hackathon. Mark your calendar and don't miss any events!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 px-4" ref={ref}>
        <div className="max-w-7xl mx-auto space-y-16">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
            >
              {/* Day Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-black text-purple-100 mb-2">{day.day}</h2>
                <div className="flex items-center gap-2 text-purple-400">
                  <Calendar className="w-4 h-4" />
                  <span>{day.date}</span>
                </div>
              </div>

              {/* Events Timeline */}
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <ElectricBorder color={day.color}>
                      <div className="bg-gradient-to-br from-purple-950/80 to-purple-900/40 backdrop-blur-xl p-6 rounded-2xl">
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                            style={{ 
                              backgroundColor: `${day.color}20`,
                              borderColor: `${day.color}40`
                            }}
                          >
                            <event.icon className="w-7 h-7 text-purple-300" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <Clock className="w-4 h-4 text-purple-400" />
                                  <span className="text-purple-400 font-semibold">{event.time}</span>
                                </div>
                                <h3 className="text-xl font-bold text-purple-100">
                                  {event.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-purple-300/70 mb-3">{event.description}</p>
                            <div className="flex items-center gap-2 text-sm text-purple-400/60">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ElectricBorder>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ElectricBorder color="#8b5cf6">
              <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 backdrop-blur-xl p-12 rounded-2xl">
                <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-4xl font-black mb-4 text-purple-100">
                  Ready to Join?
                </h2>
                <p className="text-lg text-purple-300/80 mb-8">
                  Register now and reserve your spot at STARTER Hackathon 2025
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
    </div>
  );
}
