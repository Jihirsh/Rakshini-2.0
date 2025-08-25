import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PeriodCalendar = ({ selectedDate, onSelectDate, currentPhase }) => {
  // Mock period days - in a real app, this would come from user data
  const periodDays = [
    new Date(2025, 0, 15), // January 15
    new Date(2025, 0, 16), // January 16
    new Date(2025, 0, 17), // January 17
    new Date(2025, 0, 18), // January 18
    new Date(2025, 0, 19), // January 19
  ];

  const ovulationDays = [
    new Date(2025, 0, 29), // January 29
  ];

  const isPeriodDay = (date) => {
    return periodDays.some(
      (periodDate) => periodDate.toDateString() === date.toDateString()
    );
  };

  const isOvulationDay = (date) => {
    return ovulationDays.some(
      (ovulationDate) => ovulationDate.toDateString() === date.toDateString()
    );
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl gap-2">
          <CalendarIcon className="w-5 h-5 text-primary-one" />
          Cycle Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          className={cn("w-full pointer-events-auto flex items-center justify-center")}
          modifiers={{
            period: periodDays,
            ovulation: ovulationDays,
          }}
          modifiersClassNames={{
            period: "bg-red-100 text-red-900 hover:bg-red-200",
            ovulation: "bg-green-100 text-green-900 hover:bg-green-200",
          }}
        />

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-100 border border-red-300"></div>
            <span className="text-muted-foreground">Period Days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-100 border border-green-300"></div>
            <span className="text-muted-foreground">Ovulation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/50"></div>
            <span className="text-muted-foreground">Today</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PeriodCalendar;
