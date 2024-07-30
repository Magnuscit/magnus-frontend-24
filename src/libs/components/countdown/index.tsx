"use client";

import Marquee from "react-fast-marquee";
import { Anton } from "next/font/google";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { calculateTimeLeft } from "@/libs/utils";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (unit: any) => String(unit).padStart(2, "0");

  return (
    <main
      className={`h-screen w-full bg-black flex relative flex-col items-center justify-center select-none ${anton.className}`}
    >
      <section className="flex flex-col items-center relative justify-center">
        <section className="h-2 w-full bg-white my-3" />
        <h1 className="text-white text-[200px] leading-none font-black">
          MAGNUS
        </h1>
        <section className="flex w-full justify-between px-1">
          <h1 className="text-white text-3xl font-black self-end">
            T - {timeLeft.days} / {timeLeft.hours} / {timeLeft.minutes} /{" "}
            {formatTime(timeLeft.seconds)}
          </h1>
          <h1 className="text-white text-3xl font-black self-end">2024</h1>
        </section>
        <section className="flex items-center space-x-4 justify-between w-full my-3">
          <section className="h-2 flex-grow bg-white" />
          <h1 className="text-white font-mono">Presented by CIT</h1>
          <section className="h-2 flex-grow bg-white" />
        </section>
        <p className="w-96 text-white font-mono text-center text-xs">
          Artificial Intelligence - Machine Learning - Collage Symphosyum -
          Cultural - Learn - Grow - Hack - Build - Chennai - Tamil Nadu
        </p>
      </section>
    </main>
  );
};

export default Countdown;
