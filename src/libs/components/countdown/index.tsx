"use client";

import { Anton } from "next/font/google";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "@/libs/utils";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const formatTime = (unit: any) => String(unit).padStart(2, "0");

  return (
    <main
      className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10`}
    >
      <section className="flex flex-col items-center relative justify-center">
        <section className="h-2 w-full bg-black my-3" />
        <h1
          className={`text-black text-8xl md:text-[200px] leading-none font-black  ${anton.className}`}
        >
          MAGNUS
        </h1>
        <section className="flex w-full justify-between px-1">
          <h1 className="text-black text-xl md:text-3xl font-black self-end">
            T - {timeLeft.days} / {timeLeft.hours} / {timeLeft.minutes} /{" "}
            {formatTime(timeLeft.seconds)}
          </h1>
          <h1 className="text-black text-xl md:text-3xl font-black self-end">2024</h1>
        </section>
        <section className="flex items-center space-x-4 justify-between w-full my-3">
          <section className="h-2 flex-grow bg-black" />
          <h1 className="text-black font-bold">By CSE (AIML)</h1>
          <section className="h-2 flex-grow bg-black" />
        </section>
        <p className="w-96 text-black fontmono text-center text-xs">
          Artificial Intelligence &#10209; Machine Learning &#10209; College
          symposium &#10209; Cultural &#10209; Learn &#10209; Grow &#10209;
          Hack &#10209; Build &#10209; Chennai &#10209; Tamil Nadu
        </p>
      </section>
    </main>
  );
};

export default Countdown;
