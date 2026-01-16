import React from "react";
import Navbar from "./components/Navbar";
import IncubatorSection from "./components/IncubatorSection";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import SolutionSection from "./components/SolutionSection";
import AdvantageSection from "./components/AdvantageSection";
import PricingSection from "./components/PricingSection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app-shell relative min-h-screen overflow-hidden">
          <div className="app-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <Navbar />
          <main className="pt-20 sm:pt-24">
            <Hero />
            <AdvantageSection />
            <StatsSection />
            <SolutionSection />
            <PricingSection />
            <TeamSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
