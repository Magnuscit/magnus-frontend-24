"use client";

import Image from "next/image";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RedShoe from "./PlaceHolder.jpg";

interface prop {
  title: string;
  description: string;
  i: number;
}

const varients: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "tween", delay: 0.05 * i },
  }),
};

const EventsCardComponent = ({ title, description, i }: prop) => {
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
    </motion.section>
  );
};

export default EventsCardComponent;
