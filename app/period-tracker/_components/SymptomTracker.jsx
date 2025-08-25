import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Zap,
  Smile,
  Frown,
  Meh,
  Heart,
  Droplet,
  Zap as Energy,
  Moon,
  Plus,
} from "lucide-react";

const SymptomTracker = ({ selectedDate }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");

  const symptoms = [
    {
      id: "cramps",
      label: "Cramps",
      icon: Zap,
      color: "bg-red-100 text-red-700",
    },
    {
      id: "bloating",
      label: "Bloating",
      icon: Heart,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "headache",
      label: "Headache",
      icon: Moon,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "fatigue",
      label: "Fatigue",
      icon: Energy,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "tender-breasts",
      label: "Tender Breasts",
      icon: Heart,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "heavy-flow",
      label: "Heavy Flow",
      icon: Droplet,
      color: "bg-red-100 text-red-700",
    },
  ];

  const moods = [
    {
      id: "happy",
      label: "Happy",
      icon: Smile,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "neutral",
      label: "Neutral",
      icon: Meh,
      color: "bg-gray-100 text-gray-700",
    },
    {
      id: "sad",
      label: "Sad",
      icon: Frown,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "irritated",
      label: "Irritated",
      icon: Zap,
      color: "bg-red-100 text-red-700",
    },
  ];

  const toggleSymptom = (symptomId) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const formatDate = (date) => {
    if (!date) return "Select a date";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Plus className="w-5 h-5 text-primary-one" />
          Track Symptoms
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {formatDate(selectedDate)}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Symptoms */}
        <div>
          <h3 className="font-medium mb-3">Physical Symptoms</h3>
          <div className="grid grid-cols-2 gap-2">
            {symptoms.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom.id);
              const IconComponent = symptom.icon;

              return (
                <Button
                  key={symptom.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`justify-start h-auto p-3 ${
                    isSelected ? symptom.color : "hover:bg-muted"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {symptom.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mood */}
        <div>
          <h3 className="font-medium mb-3">Mood</h3>
          <div className="grid grid-cols-2 gap-2">
            {moods.map((moodOption) => {
              const isSelected = mood === moodOption.id;
              const IconComponent = moodOption.icon;

              return (
                <Button
                  key={moodOption.id}
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setMood(mood === moodOption.id ? "" : moodOption.id)
                  }
                  className={`justify-start h-auto p-3 ${
                    isSelected ? moodOption.color : "hover:bg-muted"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {moodOption.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div>
          <h3 className="font-medium mb-3">Notes</h3>
          <Textarea
            placeholder="How are you feeling today? Any additional notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
          />
        </div>

        <Button className="w-full gradient-primary text-white">
          Save Entry
        </Button>
      </CardContent>
    </Card>
  );
};

export default SymptomTracker;
