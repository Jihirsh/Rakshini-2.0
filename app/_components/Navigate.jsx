import React from "react";
import { Inika } from "next/font/google";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

const inikaFont = Inika({
  subsets: ["latin"],
  weight: "400",
});

const navbar1 = ["Home", "Safety Map", "App", "Period Tracker", "Blogs"];

function Navigate() {
  return (
    <div className="w-full h-screen bg-linear-to-br from-white-top to-white-bottom to-60%">
      <div className=" flex justify-between p-10 px-20">
        <h2 className={`text-2xl ${inikaFont.className}`}>Rakshini</h2>
        <div className={`flex gap-15 ${inikaFont.className}`}>
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
          className="opacity-60"
        />
      </div>
      <div className={`max-w-150 text-7xl ${inikaFont.className}`}>
        <h1 className="flex-wrap text-center">ECHOES ARE NEVER SILENT</h1>
      </div>
    </div>
  );
}

export default Navigate;
