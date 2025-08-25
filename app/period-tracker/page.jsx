"use client";
import React, { useState } from "react";
import { Heart, Droplet, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TrustYourBodyNote from "./_components/TrustYourBodyNote";
import PeriodCalendar from "./_components/PeriodCalendar";
import CycleInsights from "./_components/CycleInsights";
import SymptomTracker from "./_components/SymptomTracker";
import WellnessTips from "./_components/WellnessTips";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPhase, setCurrentPhase] = useState("follicular"); // follicular, ovulation, luteal, menstrual

  const cyclePhases = {
    menstrual: {
      color: "bg-red-100 text-red-700",
      icon: Droplet,
      name: "Menstrual Phase",
      days: "Days 1-5",
    },
    follicular: {
      color: "bg-pink-100 text-pink-700",
      icon: Sun,
      name: "Follicular Phase",
      days: "Days 1-13",
    },
    ovulation: {
      color: "bg-green-100 text-green-700",
      icon: Heart,
      name: "Ovulation",
      days: "Days 14-16",
    },
    luteal: {
      color: "bg-purple-100 text-purple-700",
      icon: Moon,
      name: "Luteal Phase",
      days: "Days 17-28",
    },
  };

  const getCurrentPhase = () => cyclePhases[currentPhase];
  const CurrentPhaseIcon = getCurrentPhase().icon;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Navbar />

        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-gradient">Cycle Companion</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Track your menstrual cycle with mindfulness and understanding.
            Remember, this is a tool to support your awareness—always trust your
            body's wisdom above any app.
          </p>

          {/* Current Phase Badge */}
          <div className="flex justify-center mb-8">
            <Badge className={`px-6 py-2 text-base ${getCurrentPhase().color}`}>
              <CurrentPhaseIcon className="w-4 h-4 mr-2" />
              {getCurrentPhase().name} • {getCurrentPhase().days}
            </Badge>
          </div>
        </div>

        <TrustYourBodyNote />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <PeriodCalendar
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              currentPhase={currentPhase}
            />
          </div>

          {/* Cycle Insights */}
          <div>
            <CycleInsights currentPhase={currentPhase} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SymptomTracker selectedDate={selectedDate} />
          <WellnessTips currentPhase={currentPhase} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PeriodTracker;
