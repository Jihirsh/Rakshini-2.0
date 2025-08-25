import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Heart } from "lucide-react";

const TrustYourBodyNote = () => {
  return (
    <Card className="mb-10 py-2 bg-gradient-soft border-pink-200">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-one" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary-one" />
              Trust Your Body First
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This period tracker is designed to support your awareness and help
              you understand patterns, but it should{" "}
              <strong>never replace your body's wisdom</strong>. Every person's
              cycle is unique, and apps can sometimes be inaccurate. If
              something feels off or different, trust your instincts and consult
              with a healthcare provider. Your body knows best—this is just a
              helpful companion on your wellness journey.
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm text-primary">
              <Heart className="w-4 h-4 text-primary-one" />
              <span className="font-medium text-primary-one">
                Your intuition is your most powerful tool
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrustYourBodyNote;
