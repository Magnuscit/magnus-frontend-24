"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { varients } from "@/libs/animation";
import { useEffect, useRef } from "react";
import RedShoe from "./PlaceHolder.jpg";
import Link from "next/link";

interface prop {
  eventsId: string;
  title: string;
  description: string;
  i: number;
}

const EventsCardComponent = ({ eventsId, title, description, i }: prop) => {
  const animate = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animate.start("visible");
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={varients}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.4 }}
      custom={i}
      className="relative flex items-end border border-black h-96 max-w-72 w-full md:max-w-96"
    >
      <Link href={`events/${eventsId}`} className="w-full">
        <Image
          src={RedShoe}
          fill
          alt="place-holder-postor"
          className="object-cover -z-10"
        />
        <section className="min-h-32 w-full bg-white flex flex-col items-start justify-center p-3 border-t border-black">
          <h1 className="font-carlgine font-bold text-3xl">{title}</h1>
          <p className="text-xs font-light">{description}</p>
        </section>
      </Link>
    </motion.section>
  );
};

export default EventsCardComponent;
