import { useState, lazy, Suspense } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { AnimatedBlob } from "./components/AnimatedBlob";
import { GridPattern } from "./components/GridPattern";

// Lazy load heavy components
const LearnMore = lazy(() => import("./components/LearnMore").then(module => ({ default: module.LearnMore })));
const EventCalendar = lazy(() => import("./components/EventCalendar").then(module => ({ default: module.EventCalendar })));
const RegistrationForm = lazy(() => import("./components/RegistrationForm").then(module => ({ default: module.RegistrationForm })));

type ViewType = "home" | "learn-more" | "calendar" | "register";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const handleRegisterClick = () => {
    setCurrentView("register");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLearnMoreClick = () => {
    setCurrentView("learn-more");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCalendarClick = () => {
    setCurrentView("calendar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated background blob */}
      <AnimatedBlob />
      
      {/* Grid pattern overlay */}
      <GridPattern />

      {/* Main content */}
      <div className="relative z-10">
        {currentView === "home" ? (
          <>
            <Hero 
              onRegisterClick={handleRegisterClick} 
              onLearnMoreClick={handleLearnMoreClick}
            />
            <Features />
            <About onCalendarClick={handleCalendarClick} />
            <Footer />
          </>
        ) : (
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          }>
            {currentView === "learn-more" ? (
              <LearnMore
                onBack={handleBackToHome}
                onRegisterClick={handleRegisterClick}
              />
            ) : currentView === "calendar" ? (
              <EventCalendar
                onBack={handleBackToHome}
                onRegisterClick={handleRegisterClick}
              />
            ) : (
              <RegistrationForm onBack={handleBackToHome} />
            )}
          </Suspense>
        )}
      </div>
    </div>
  );
}
