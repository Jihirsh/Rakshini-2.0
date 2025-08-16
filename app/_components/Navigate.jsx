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
        
      </div>
    </div>
  );
}

export default Navigate;
