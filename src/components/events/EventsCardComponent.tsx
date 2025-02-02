"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { varients } from "@/libs/animation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { IMGPlaceHolder2 } from "@/assets";
import { IconInfoCircle } from "@tabler/icons-react";

interface prop {
  eventsId: string;
  title: string;
  description: string;
  date: string;
  image: string;
  type: string;
  i: number;
}

const EventsCardComponent = ({
  eventsId,
  title,
  description,
  image,
  type,
  date,
  i,
}: prop) => {
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
      className="relative flex items-end border border-black h-96 max-w-72 w-full md:max-w-96 bg-cream"
    >
      <Link
        href={`events/${eventsId}`}
        className="w-full flex items-center justify-center h-full"
      >
        <Image
          src={`${image}/?raw=true`}
          alt="placeholder"
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
        <section className="min-h-10 w-full bg-white flex flex-col items-start justify-center p-3 border-t border-black z-10 absolute bottom-0">
          <h1 className="font-carlgine font-bold text-3xl text-accent">
            {title}
          </h1>
          <div className="flex w-full justify-between items-baseline">
            <p className="text-xs font-light">{type}</p>
            <p className="text-md">{date}</p>
          </div>
        </section>

        <span className="absolute top-2 right-2 cl">
          <IconInfoCircle size={30} className="text-accent " />
        </span>
        {/* <div className="absolute bg-cream">ǐDolore incididunt reprehenderit id magna cillum voluptate deserunt elit.</div> */}
      </Link>
    </motion.section>
  );
};

export default EventsCardComponent;
