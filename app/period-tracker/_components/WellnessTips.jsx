import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Heart, Brain, Utensils, Moon } from "lucide-react";

const WellnessTips = ({ currentPhase }) => {
  const phaseTips = {
    follicular: {
      icon: Brain,
      color: "text-pink-600",
      tips: [
        {
          category: "Energy",
          tip: "Try new workouts - your body can handle more intensity now",
          icon: Heart,
        },
        {
          category: "Nutrition",
          tip: "Focus on protein and healthy fats to support hormone production",
          icon: Utensils,
        },
        {
          category: "Mindset",
          tip: "Perfect time for brainstorming and starting new projects",
          icon: Brain,
        },
        {
          category: "Self-Care",
          tip: "Schedule social activities - you'll feel more outgoing",
          icon: Heart,
        },
      ],
    },
    ovulation: {
      icon: Heart,
      color: "text-green-600",
      tips: [
        {
          category: "Energy",
          tip: "Peak performance time - schedule important meetings",
          icon: Heart,
        },
        {
          category: "Nutrition",
          tip: "Stay hydrated and eat antioxidant-rich foods",
          icon: Utensils,
        },
        {
          category: "Mindset",
          tip: "Great for creative collaboration and communication",
          icon: Brain,
        },
        {
          category: "Self-Care",
          tip: "You may feel more confident - embrace it!",
          icon: Heart,
        },
      ],
    },
    luteal: {
      icon: Moon,
      color: "text-purple-600",
      tips: [
        {
          category: "Energy",
          tip: "Focus on steady, consistent activities rather than high intensity",
          icon: Heart,
        },
        {
          category: "Nutrition",
          tip: "Include magnesium-rich foods to support mood and reduce cravings",
          icon: Utensils,
        },
        {
          category: "Mindset",
          tip: "Excellent time for detailed work and organizing",
          icon: Brain,
        },
        {
          category: "Self-Care",
          tip: "Practice stress management - meditation or gentle yoga",
          icon: Moon,
        },
      ],
    },
    menstrual: {
      icon: Moon,
      color: "text-red-600",
      tips: [
        {
          category: "Energy",
          tip: "Honor your need for rest - gentle movement like walking",
          icon: Heart,
        },
        {
          category: "Nutrition",
          tip: "Iron-rich foods and warm, comforting meals",
          icon: Utensils,
        },
        {
          category: "Mindset",
          tip: "Time for reflection and setting intentions for next cycle",
          icon: Brain,
        },
        {
          category: "Self-Care",
          tip: "Use heat therapy, take warm baths, prioritize sleep",
          icon: Moon,
        },
      ],
    },
  };

  const currentTips = phaseTips[currentPhase];
  const PhaseIcon = currentTips.icon;

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Lightbulb className="w-5 h-5 text-primary-one" />
          Wellness Tips
        </CardTitle>
        <div className="flex items-center gap-2 text-sm">
          <PhaseIcon className={`w-4 h-4 ${currentTips.color}`} />
          <span className="text-muted-foreground capitalize">
            {currentPhase} Phase
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentTips.tips.map((tip, index) => {
            const TipIcon = tip.icon;
            return (
              <div
                key={index}
                className="flex gap-3 p-3 bg-muted/30 rounded-lg"
              >
                <TipIcon className="w-5 h-5 text-primary-one mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-primary-one mb-1">
                    {tip.category}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-gradient-soft rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            💡 <strong>Remember:</strong> These are general suggestions. Every
            body is different, and your experience may vary. Listen to what
            feels right for you.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessTips;
