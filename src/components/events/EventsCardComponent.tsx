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
			className="relative border-[0.1px] border-black transition-all ease-in-out hover:-mt-4 flex items-end shadow-lg h-96 max-w-72 w-full md:max-w-96 bg-white"
		>
			<Link
				href={`events/${eventsId}`}
				className="w-full flex items-center justify-center h-full"
			>
				<Image
					src={`${image}/?raw=true`}
					alt="placeholder"
					className="p-4 w-full h-full object-cover"
					width={200}
					height={200}
				/>
				<section className="min-h-10 w-full shadow-lg bg-cream flex flex-col items-start justify-center p-3 z-10 absolute bottom-0">
					<h1 className="font-carlgine font-bold text-3xl text-black">
						{title}
					</h1>
					<div className="flex w-full justify-between items-baseline text-accent">
						<p className="text-md font-medium">{type}</p>
						<p className="text-md font-medium">{date}</p>
					</div>
				</section>
				{/* <div className="absolute bg-cream">ǐDolore incididunt reprehenderit id magna cillum voluptate deserunt elit.</div> */}
			</Link>
		</motion.section>
	);
};

export default EventsCardComponent;
