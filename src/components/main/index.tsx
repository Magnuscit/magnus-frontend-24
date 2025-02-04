"use client"

import { useState, useEffect } from "react";
import { Gradient } from '../../libs/gradient.js'
import Polaroid from "../Polaroid";
import NavBar from "../NavBar";

function Countdown({ targetDate }) {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	function calculateTimeLeft() {
		const diff = +targetDate - +new Date();
		if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		return {
			days: Math.floor(diff / (1000 * 60 * 60 * 24)),
			hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((diff / 1000 / 60) % 60),
			seconds: Math.floor((diff / 1000) % 60)
		};
	}

	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="grid grid-cols-6 cursor-default gap-6 text-[20px] sm:text-[100px] font-bold text-center font-gro text-cream">
			&rarr;
			{Object.entries(timeLeft).map(([unit, value], idx) => (
				<div key={unit} className="group relative">
					<div className="absolute rounded-xl" />
					<div className="relative transition-all duration-300 group-hover:border-[#6E2B62]/50">
						<div className="bg-clip-text">
							{(value.toString() + (idx != 3 ? ":" : "")).padStart(2, '0')}
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
		const gradient = new Gradient()
		gradient.initGradient('#gradient-canvas')
	}, [])

	return (
		<>
			<NavBar />
			<div className="w-screen h-screen overflow-x-hidden">
				{/* Main section */}
				<canvas style={{ position: "absolute", zIndex: -10 }} id="gradient-canvas" data-transition-in />
				<div className="w-full h-full flex flex-col items-center justify-center px-4">
					<div>
						<div className="text-cream font-gro text-4xl sm:text-6xl md:text-8xl lg:text-[200px] font-bold cursor-default">
							MAGNUS 2K25
						</div>
					</div>
					<Countdown targetDate={new Date(2025, 1, 17)} />
				</div>

				{/* About section */}
				<div className="w-full h-full flex flex-col items-start justify-start pt-4 bg-cream2 relative font-gro mix-blend-screen">
					<div className="text-center text-black overflow-hidden h-full">
						<marquee BEHAVIOR="alternate" className="text-xl sm:text-2xl md:text-3xl font-bold w-full bg-black text-cream py-5 shadow-lg">
							{("DEPARTMENT OF CSE (AIML) * ").repeat(1000)}
						</marquee>
						<div className="flex flex-col items-center justify-center h-full">
							<div className="relative flex flex-col items-center justify-center h-full">
								<Polaroid _class="z-[100] -mt-[100px] scale-75 sm:scale-100" description="absolute lorem ipsum ass shit" />
								<Polaroid _class="absolute -rotate-[10deg] -z-1 hidden sm:block sm:mr-[200px] md:mr-[350px]" description="lorem ipsum ass shit" />
								<Polaroid _class="absolute rotate-[10deg] -z-2 hidden sm:block sm:-mr-[200px] md:-mr-[350px]" description="lorem ipsum ass shit" />
							</div>
							<p className="w-full px-4 md:w-[700px] h-4/6 text-center uppercase font-bold text-base sm:text-lg md:text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
						</div>
					</div>
				</div>

				{/* Gallery section */}
				<div className="w-full h-full flex flex-col items-start justify-start pt-4 bg-cream2 relative font-gro mix-blend-screen">
					<div className="text-center text-black overflow-hidden h-full">
						<marquee BEHAVIOR="alternate" className="text-xl sm:text-2xl md:text-3xl font-bold w-full bg-black text-cream py-5 shadow-lg">
							{("MAGNUS SYMPOSIUM GALLERY * ").repeat(1000)}
						</marquee>
						<div className="flex flex-col items-center justify-center h-full">
							<div className="relative flex flex-col items-center justify-center h-full">
								<Polaroid _class="z-[100] -mt-[100px] scale-75 sm:scale-100" description="absolute lorem ipsum ass shit" />
								<Polaroid _class="absolute -rotate-[10deg] -z-1 hidden sm:block sm:mr-[200px] md:mr-[350px]" description="lorem ipsum ass shit" />
								<Polaroid _class="absolute rotate-[10deg] -z-2 hidden sm:block sm:-mr-[200px] md:-mr-[350px]" description="lorem ipsum ass shit" />
							</div>
							<p className="w-full px-4 md:w-[700px] h-4/6 text-center uppercase font-bold text-base sm:text-lg md:text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
