"use client";

import { useState, useEffect } from "react";
import { Gradient } from "../../libs/gradient.js";
import Polaroid from "../Polaroid";
import NavBar from "../NavBar";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";

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
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647143640797236/DSC3289.JPG?ex=67a49128&is=67a33fa8&hm=fad55b5a8fc83967dc350659d9bb903129b42e5b4a26c3554a37a62a03298d9d&=&format=webp&width=2980&height=1676"} _class=" hidden md:flex md:absolute  translate-x-40 rotate-[8deg] " description="CSE (AIML)" />
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647144995557387/DSC3288.JPG?ex=67a49129&is=67a33fa9&hm=7a9df53af427011c214d2bd689c50272f787069e6a1ba3ccccc69ae926ff9a16&=&format=webp&width=2980&height=1676"} _class=" hidden md:flex md:absolute -translate-x-40  -rotate-[8deg] " description="CSE (AIML)" />
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647860376309861/IMG_2434.jpg?ex=67a491d3&is=67a34053&hm=91c43311dde46e6a86367e77a3dd1784539d81625997eec9f86de13395103370&=&format=webp&width=1258&height=1678"} _class=" md:absolute -mt-20" description="CSE (AIML)" />
					</div>

					<div className="hidden sm:block sm:h-24 sm:w-full" />

					<p className="w-full px-4 text-center uppercase font-bold text-base sm:text-lg md:text-xl lg:max-w-3xl mt-10">
						Chennai Institute of Technology (CIT Chennai) is an
						industry-connected autonomous institute, and is a co-
						educational engineering college located in Kundrathur,
						Chennai, Tamil Nadu, India. Established in 2010 by the
						Parthasarathy Seeniammal Educational Trust, Chennai
						Institute of Technology is one of the top colleges in Tamil
						Nadu with an objective of providing quality technical
						education with adequate industrial exposure than any other
						college in Chennai. Its vision is to be an eminent centre for
						Academia, Industry and Research by imparting knowledge,
						relevant practices and inculcating human values to address
						global challenges through novelty and sustainability.
					</p>
				</div>

				{/* Glaray section */}
				<div className="w-full flex flex-col items-center justifycenter bg-cream2 font-space mix-blend-screen lg:min-h-screen space-y-10 py-10">
					<Marquee className="text-xl sm:text-2xl md:text-3xl font-bold w-full bg-black text-cream py-5 shadow-lg ">
						{"DEPARTMENT OF CSE (AIML) * ".repeat(1000)}
					</Marquee>

					<div className="hidden sm:block sm:h-24 sm:w-full" />

					<div className="w-full flex-grow items-center flex justify-center flex-col px-5 relative md:min-h-[200px]">
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647142340821013/DSC3268.JPG?ex=67a49128&is=67a33fa8&hm=b0ea64a4211ca59bb7c05318b7638fe8778e0a9436b352d9f62c76c2e76fd426&=&format=webp&width=2980&height=1676"} _class=" hidden md:flex md:absolute  translate-x-40 rotate-[8deg] " description="MAGNUS" />
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647141199974492/DSC3508.JPG?ex=67a49128&is=67a33fa8&hm=15e309b40fb1ca6fcb8520c0781548d44c7cbceafdea82e1274259402af70ff2&=&format=webp&width=2980&height=1676"} _class=" hidden md:flex md:absolute -translate-x-40  -rotate-[8deg] " description="MAGNUS" />
						<Polaroid image={"https://media.discordapp.net/attachments/1175463935269417051/1336647861328281622/IMG_7964.jpg?ex=67a491d3&is=67a34053&hm=157fbaf460d10b2e4c31ffbc537229ba280da24a9c4d9d2174001f20d3fb9c5f&=&format=webp&width=1258&height=1678"} _class=" md:absolute -mt-20" description="MAGNUS" />
					</div>

					<div className="hidden sm:block sm:h-24 sm:w-full" />

					<p className="w-full px-4 text-center uppercase font-bold text-base sm:text-lg md:text-xl lg:max-w-3xl mt-10">
						Magnus is the technical
						symposium of the department of
						CSE (Artificial Intelligence and
						Machine Learning) at Chennai
						Institute of Technology which
						was founded in 2023. With over
						a footfall of 500 in its first year,
						it is an event that celebrates the
						achievements in the field of AI
						along with Machine Learning.

						At Magnus, participants get to
						immerse themselves in various
						activities such as workshops on
						AI and Open-Source platforms,
						non-technical events like Weeb
						Trivia and Film Fusion along
						with technical events like paper
						and project presentations,
						motivating them to think outside
						the box and incorporate AI in
						real life.
					</p>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default LandingPage;
