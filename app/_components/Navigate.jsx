"use client"; /* Make this server side in future for better seo */
import React from "react";
import { Inika } from "next/font/google";
import {
  ArrowRight,
  CircleUserRound,
  Heart,
  Shield,
  Users,
  LogOut,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import AuthModal from "./AuthModal";
import { useSession, signOut } from "next-auth/react";


const inikaFont = Inika({
  subsets: ["latin"],
  weight: "400",
});

const navbar1 = [
  { name: "Home", href: "/" },
  { name: "Safety Map", href: "/safety-map" },
  { name: "App", href: "/application" },
  { name: "Period Tracker", href: "/period-tracker" },
  { name: "Blogs", href: "/blogs" },
];

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
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="w-full h-screen">
      <div className="flex justify-between p-10 px-20">
        <Link href="/">
          <h2
            className={`text-3xl ${inikaFont.className} text-transparent bg-clip-text bg-gradient-to-r from-primary-one to-primary-two`}
          >
            Rakshini
          </h2>
        </Link>
        <div className={`text-lg flex items-end gap-15 ${inikaFont.className}`}>
          {navbar1.map((item, index) => (
            <Link key={index} href={item.href}>
              <h3 className="hover:text-primary-one cursor-pointer mx-4 hover:scale-115 transition-transform">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CircleUserRound className="w-8 h-8 cursor-pointer text-primary-one" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-black" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="w-4 h-4 mr-2 text-black" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <AuthModal>
              <CircleUserRound className="w-8 h-8 cursor-pointer text-primary-one" />
              {/* className="text-transparent bg-clip-text bg-gradient-to-r from-primary-one to-primary-two" */}
            </AuthModal>
          )}
        </div>
      </div>
      <div className="px-20 absolute bottom-0">
        <Image
          src="/woman.png"
          width={456}
          height={685}
          alt="Picture of woman"
          className="opacity-40"
          priority
          // style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className={`p-6 text-right ${inikaFont.className}`}>
        <h1 className="mr-102 text-echoes">ECHOES ARE</h1>
        <h1 className="mr-85 text-silent font-medium text-transparent bg-clip-text bg-linear-to-bl from-primary-one to-primary-two">
          NEVER SILENT
        </h1>
        <div className="p-5">
          <p className="mr-56 text-2xl text-gray-500">
            Empowering women with tools, community, and resources to thrive
          </p>
          <p className="mr-62 text-2xl text-gray-500">
            safely in today's world. Your voice matters, your safety matters,
          </p>
          <p className="mr-133 text-2xl text-gray-500">you matter.</p>
        </div>

        {/* call to action buttons */}
        <div className="p-6 flex gap-10 ml-200">
          <AuthModal>
            <Button className="text-lg w-56 h-12 bg-gradient-to-r from-primary-one to-primary-two cursor-pointer hover:scale-105 transition-transform">
              Start your Journey <ArrowRight />
            </Button>
          </AuthModal>
          <Link href="/blogs">
            <Button
              variant="outline"
              className="text-lg w-36 h-12 border-primary-one text-primary-one cursor-pointer hover:scale-105 transition-transform hover:text-transparent bg-clip-text bg-linear-to-r from-primary-one to-primary-two"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="ml-105 p-6 flex justify-center gap-10">
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            className="text-center flex items-center w-61 hover:scale-105 transition-transform"
          >
            <CardContent className="flex-col items-center">
              <div className="pb-4 flex items-center justify-center">
                <button className="flex items-center gap-2 text-white p-2.5 rounded-lg bg-linear-to-br from-primary-one to-primary-two">
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
