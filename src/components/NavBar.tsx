"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import ProfileButton from "./UserProfileButton";

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
			className={`flex font-space justify-end items-center transition-all duration-200 ease-in w-full p-10 fixed top-0 z-[999] bg-nocl font-filgen space-x-4`}
		>
			<section
				className={`absolute top-0 text-right w-full h-screen flex flex-col items-end p-12 lg:p-24 text-7xl font-black justify-center bg-cream ${!isOpen ? "-right-[5000px]" : "right-0"} transition-all duration-500 ease-in-out drop-shadow-lg`}
			>
				<Link href="/">
					<h1 onClick={() => setOpen(!isOpen)} className="hover:text-accent">HOME</h1>
				</Link>
				<Link href="/events">
					<h1 onClick={() => setOpen(!isOpen)} className="hover:text-accent">EVENTS</h1>
				</Link>
				{/*
        <Link href="/team">
          <h1 className="hover:text-accent">Team</h1>
        </Link>
        */}
			</section>

			<div className="flex items-center gap-x-2 bg-cream rounded-full">
				<h1
					onClick={() => setOpen(!isOpen)}
					className={`cursor-pointer text-3xl z-[1000] rounded-full ${activeNav && "bg-cream"} p-3`}
				>
					{isOpen ? <IconX /> : <IconMenu2 />}
				</h1>
			</div>
		</nav>
	);
}
