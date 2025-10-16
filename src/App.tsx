import { useState } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { AnimatedBlob } from "./components/AnimatedBlob";
import { GridPattern } from "./components/GridPattern";
import { LearnMore } from "./components/LearnMore";
import { EventCalendar } from "./components/EventCalendar";
import { RegistrationForm } from "./components/RegistrationForm";

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
        ) : currentView === "learn-more" ? (
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
      </div>
    </div>
  );
}
