import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import SolutionSection from "./components/SolutionSection";
import AdvantageSection from "./components/AdvantageSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ProgramsSection from "./components/ProgramsSection";
import ServicesSection from "./components/ServicesSection";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app-shell relative min-h-screen overflow-hidden">
          <div className="app-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />

          {/* Custom cursor - only visible on desktop */}
          <CustomCursor />

          <Navbar />
          <main className="pt-20 sm:pt-24">
            <Hero />
            <ServicesSection />
            <AdvantageSection />
            <StatsSection />
            <SolutionSection />
            <PricingSection />
            <CTASection />
            <ProgramsSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
