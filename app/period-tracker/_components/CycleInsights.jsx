import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Heart } from "lucide-react";

const CycleInsights = ({ currentPhase }) => {
  const cycleData = {
    currentDay: 12,
    totalDays: 28,
    nextPeriod: 16,
    averageCycle: 28,
  };

  const phaseInsights = {
    follicular: {
      energy: "Rising Energy",
      mood: "Optimistic & Creative",
      focus: "New Beginnings",
      description:
        "Your energy is building. This is a great time for new projects and creative endeavors.",
    },
    ovulation: {
      energy: "Peak Energy",
      mood: "Confident & Social",
      focus: "Connection & Communication",
      description:
        "You're at your most fertile and energetic. Perfect time for important conversations and social activities.",
    },
    luteal: {
      energy: "Steady Energy",
      mood: "Focused & Analytical",
      focus: "Completion & Organization",
      description:
        "Your focus sharpens. Great time to finish projects and organize your life.",
    },
    menstrual: {
      energy: "Rest & Restore",
      mood: "Introspective & Intuitive",
      focus: "Self-Care & Reflection",
      description:
        "Time for rest and introspection. Honor your body's need for gentleness and care.",
    },
  };

  const currentInsight = phaseInsights[currentPhase];
  const progressPercentage = (cycleData.currentDay / cycleData.totalDays) * 100;

  return (
    <div className="space-y-6">
      {/* Cycle Progress */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="w-5 h-5 text-primary-one" />
            Cycle Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Day {cycleData.currentDay} of {cycleData.totalDays}
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-semibold text-primary-one">
                {cycleData.nextPeriod}
              </div>
              <div className="text-muted-foreground">Days to period</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-semibold text-primary-one">
                {cycleData.averageCycle}
              </div>
              <div className="text-muted-foreground">Avg cycle</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase Insights */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Heart className="w-5 h-5 text-primary-one" />
            Phase Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {currentInsight.description}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Energy Level</span>
              <span className="text-sm text-primary-one">
                {currentInsight.energy}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Mood Pattern</span>
              <span className="text-sm text-primary-one">
                {currentInsight.mood}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Best Focus</span>
              <span className="text-sm text-primary-one">
                {currentInsight.focus}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CycleInsights;
