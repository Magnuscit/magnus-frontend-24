"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) setActiveNav(true);
    else setActiveNav(false);
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`flex justify-end items-center transition-all duration-200 ease-in w-full p-10 fixed top-0 z-[999] bg-nocl font-filgen`}
    >
      <section
        className={`absolute top-0 text-right w-full h-screen flex flex-col items-end p-12 lg:p-24 text-7xl font-black justify-center bg-white ${!isOpen ? "-right-[5000px]" : "right-0"} transition-all duration-500 ease-in-out drop-shadow-lg`}
      >
        <Link href="/about">
          <h1 className="hover:text-accent">Home</h1>
        </Link>
        <Link href="/about">
          <h1 className="hover:text-accent">About</h1>
        </Link>
        <Link href="/events">
          <h1 className="hover:text-accent">Events</h1>
        </Link>
        <Link href="/team">
          <h1 className="hover:text-accent">Team</h1>
        </Link>
      </section>

      <div className="flex items-center gap-x-2">
        <h1
          onClick={() => setOpen(!isOpen)}
          className={`cursor-pointer text-3xl z-[1000] rounded-full ${activeNav && "bg-white"} p-3`}
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </h1>
      </div>
    </nav>
  );
}
