"use client";

import { useState, useEffect } from "react";
import { Gradient } from "../../libs/gradient.js";
import Polaroid from "../Polaroid";
import NavBar from "../NavBar";
import Marquee from "react-fast-marquee";

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const diff = +targetDate - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="grid grid-cols-6 cursor-default gap6 text-[20px] sm:text-[100px] font-bold text-center font-space text-cream">
      &rarr;
      {Object.entries(timeLeft).map(([unit, value], idx) => (
        <div key={unit} className="group relative">
          <div className="absolute rounded-xl" />
          <div className="relative transition-all duration-300 group-hover:border-[#6E2B62]/50">
            <div className="bg-clip-text">
              {(value.toString() + (idx != 3 ? ":" : "")).padStart(2, "0")}
            </div>
          </div>
        </div>
      ))}
      &larr;
    </div>
  );
}

function LandingPage() {
  useEffect(() => {
    const canvasElement = document.getElementById("gradient-canvas");
    const gradient: any = new Gradient();
    if (canvasElement) {
      gradient.initGradient("#gradient-canvas");
    } else {
      gradient.pause();
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen overflow-x-hidden">
        {/* Main section */}
        <canvas
          style={{ position: "absolute", zIndex: -10 }}
          id="gradient-canvas"
          data-transition-in
        />
        <div className="w-full h-full flex flex-col items-center justify-center px-4">
          <div>
            <div className="text-cream font-space text-5xl sm:text-6xl md:text-8xl lg:text-[200px] font-bold cursor-default">
              MAGNUS 2K25
            </div>
          </div>
          <Countdown targetDate={new Date(2025, 1, 17)} />
        </div>

        {/* About section */}
        <div className="w-full flex flex-col items-center justifycenter bg-cream2 font-space mix-blend-screen lg:min-h-screen space-y-10 py-10">
          <Marquee className="text-xl sm:text-2xl md:text-3xl font-bold w-full bg-black text-cream py-5 shadow-lg ">
            {"DEPARTMENT OF CSE (AIML) * ".repeat(1000)}
          </Marquee>

          <div className="hidden sm:block sm:h-24 sm:w-full" />

          <div className="w-full flex-grow items-center flex justify-center flex-col px-5 relative md:min-h-[200px]">
            <Polaroid _class=" hidden md:flex md:absolute  translate-x-24  rotate-[10deg] " description="YOKOSO"/>
            <Polaroid _class=" hidden md:flex md:absolute -translate-x-24 -rotate-[10deg] " description="YOKOSO"/>
            <Polaroid _class=" md:absolute  " description="YOKOSO"/>
          </div>

          <div className="hidden sm:block sm:h-24 sm:w-full" />

          <p className="w-full px-4 text-center uppercase font-bold text-base sm:text-lg md:text-xl lg:max-w-3xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

        {/* Glaray section */}
        <div className="w-full flex flex-col items-center justifycenter bg-cream2 font-space mix-blend-screen lg:min-h-screen space-y-10 py-10">
          <Marquee className="text-xl sm:text-2xl md:text-3xl font-bold w-full bg-black text-cream py-5 shadow-lg ">
            {"DEPARTMENT OF CSE (AIML) * ".repeat(1000)}
          </Marquee>

          <div className="hidden sm:block sm:h-24 sm:w-full" />

          <div className="w-full flex-grow items-center flex justify-center flex-col px-5 relative md:min-h-[200px]">
            <Polaroid _class=" hidden md:flex md:absolute  translate-x-24  rotate-[10deg] " description="YOKOSO"/>
            <Polaroid _class=" hidden md:flex md:absolute -translate-x-24 -rotate-[10deg] " description="YOKOSO"/>
            <Polaroid _class=" md:absolute  " description="YOKOSO"/>
          </div>

          <div className="hidden sm:block sm:h-24 sm:w-full" />

          <p className="w-full px-4 text-center uppercase font-bold text-base sm:text-lg md:text-xl lg:max-w-3xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

      </div>
    </>
  );
}

export default LandingPage;
