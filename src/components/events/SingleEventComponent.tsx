"use client";

import { EVENT } from "@/libs/types";
import { motion, useAnimation, useInView } from "framer-motion";
import { varients } from "@/libs/animation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { MEDIA_URL } from "@/libs/utils";


const SingleEventComponent = ({ eventData }: { eventData: EVENT }) => {

  const animate = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const img_src1 = MEDIA_URL(eventData.id, 1);
  const img_src2 = MEDIA_URL(eventData.id, 2);
  console.log(img_src1);
  console.log(img_src2);

  //import these two image sources for image

  useEffect(() => {
    if (isInView) animate.start("visible");
  }, [isInView]);

  return (
    <>
      <motion.section
        ref={ref}
        variants={varients}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.4 }}
        custom={12}
      >
        <div className="fade-overlay ml-10 font-medium max-w-7xl bg-beige z-20  ">
          <div className="text-black items-center justify-items-center items-center relative">
            <div className="text-black mt-40 sm:text-xl text-lg">
              <Link href="/" className="font-oranienbaum">
                Home
              </Link>{" "}
              &gt;
              <Link href="/events" className="font-oranienbaum">
                {" "}
                Event
              </Link>{" "}
              &gt;
              <Link href="" className="font-oranienbaum">
                {" "}
                {eventData.id}
              </Link>
            </div>
            <div className="font-oranienbaum sm:text-5xl text-3xl my-10">
              {" "}
              {eventData.title}{" "}
            </div>
            <div className="sm:text-xl text-lg">
              <div className="font-oranienbaum"> {eventData.details.date} </div>
              <div className="font-oranienbaum my-2">
                {" "}
                Chennai Institute of Technology{" "}
              </div>
              <div className="font-oranienbaum"> {eventData.details.type}</div>
            </div>

            <div className="my-10">
              <div
                className={`font-oranienbaum sm:text-3xl text-xl transition-all`}
              >
                Rules
              </div>
              <div className="mt-8">
                <div className="font-oranienbaum sm:text-xl text-lg">
                  <ul className="list-disc">
                    {
                      eventData.rules.map((item, index) => (
                        <li key={index} >{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div className="my-10">
              <div
                className={`font-oranienbaum sm:text-3xl text-xl transition-all`}
              >
                Registration
              </div>
              <div className="mt-8">
                <div className="font-oranienbaum sm:text-xl text-lg">
                  <ul className="list-disc">
                    {
                      eventData.registration.map((item, index) => (
                        <li key={index} >{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div className="my-10">
              <div
                className={`font-oranienbaum sm:text-3xl text-xl transition-all`}
              >
                Contacts
              </div>
              <div className="mt-8">
                <div className="font-oranienbaum sm:text-xl text-lg">
                  <ul className="list-disc">
                    {
                      eventData.contacts.map((item, index) => (
                        <li key={index} >{item.incharge} - {item.phno}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SingleEventComponent;
