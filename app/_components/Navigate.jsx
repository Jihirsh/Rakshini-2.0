import React from "react";
import { Inika } from "next/font/google";
import {
  ArrowRight,
  CircleUserRound,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const inikaFont = Inika({
  subsets: ["latin"],
  weight: "400",
});

const navbar1 = ["Home", "Safety Map", "App", "Period Tracker", "Blogs"];
const cardDetails = [
  {
    title: "Safety First",
    description:
      "Real-time safety alerts, emergency contacts, and location sharing for peace of mind.",
    icon: Shield,
  },
  {
    title: "Health & Wellness",
    description:
      "Period tracking, health reminders, and wellness resources tailored for women.",
    icon: Heart,
  },
  {
    title: "Community Support",
    description:
      "Connect with a supportive community of women who understand and uplift each other.",
    icon: Users,
  },
];

function Navigate() {
  return (
    <div className="w-full h-screen bg-linear-to-br from-white-top to-white-bottom to-60%">
      <div className=" flex justify-between p-10 px-20">
        <h2 className={`text-3xl ${inikaFont.className}`}>Rakshini</h2>
        <div className={`text-lg flex items-end gap-15 ${inikaFont.className}`}>
          {navbar1.map((item, index) => (
            <h3 key={index}>{item}</h3>
          ))}
        </div>
        <CircleUserRound size={32} />
      </div>
      <div className="px-20 absolute bottom-0">
        <Image
          src="/woman.png"
          width={456}
          height={685}
          alt="Picture of woman"
          className="opacity-40"
        />
      </div>
      <div className={`p-6 text-right ${inikaFont.className}`}>
        <h1 className="mr-102 text-echoes">ECHOES ARE</h1>
        <h1 className="mr-83 text-silent font-medium">NEVER SILENT</h1>
        <div className="p-5">
          <p className="mr-56 text-2xl">
            Empowering women with tools, community, and resources to thrive
          </p>
          <p className="mr-62 text-2xl">
            safely in today's world. Your voice matters, your safety matters,
          </p>
          <p className="mr-133 text-2xl">you matter.</p>
        </div>

        {/* call to action buttons */}
        <div className="p-6 flex gap-10 ml-200">
          <Button className="text-lg w-56 h-12">
            Start your Journey <ArrowRight />
          </Button>
          <Button variant="outline" className="text-lg w-36 h-12">
            Learn More
          </Button>
        </div>
      </div>

      {/* cards */}
      <div className="ml-105 p-6 flex justify-center gap-10">
        {cardDetails.map((card, index) => (
          <Card key={index} className="text-center flex items-center w-61">
            <CardContent className="flex-col items-center">
              <div className="pb-4 flex items-center justify-center">
                <button className="flex items-center gap-2 bg-black text-white p-2.5 rounded-lg">
                  <card.icon className="h-6 w-6" />
                </button>
              </div>
              <p className={`p-1 text-xl ${inikaFont.className}`}>
                {card.title}
              </p>
              <p className={`opacity-75 text-sm ${inikaFont.className}`}>
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Navigate;
