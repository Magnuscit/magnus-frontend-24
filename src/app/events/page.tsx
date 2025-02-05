"use client";

import EventsCardComponent from "@/components/events/EventsCardComponent";
import NavBar from "@/components/NavBar";
import React, { useEffect } from "react";
import { FOLDER_URL } from "@/libs/utils";
import { useState } from "react";

export default function Events() {
	type Type =
		| "ALL"
		| "TECHNICAL"
		| "NON-TECHNICAL"
		| "WORKSHOP"
		| "PRO SHOW"
		| "ONLINE EVENT";

	type Id = string;
	type infoType = {
		name: string;
		type: Type;
		date: string;
		description: string;
		thumb: string;
	};

	const [data, setData] = useState<Record<Id, infoType> | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(FOLDER_URL);
				const html = await response.text();
				const jsonContent = JSON.parse(html);
				setData(jsonContent);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	if (!data)
		return (
			<main className="w-full overflow-hidden font-space min-h-screen flex flex-col gap-6 items-start px-20">
				{[...Array(20)].map((_, i) => (
					<h1 key={i} className="text-7xl font-black text-accent font-space">LOADING...</h1>
				))}
			</main>
		);

	return (
		<div className="bg-cream font-space uppercase">
			<div className="relative w-full flex flex-col items-center justify-center overflow-clip pb-10">
				<NavBar />
			</div>
			<div className="items-center justify-center flex lg:px-10 lg:pt-0 relative pb-10 flex-col">
				<h1 className="text-6xl lg:text-8xl lg:px-4 pb-6 lg:pb-0 font-black text-accent text-center mb-8">(EVENTS!)</h1>
				<section className="max-w-7xl grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
					{Object.entries(data || {}).map(([key, value], index: number) => (
						<EventsCardComponent
							key={key}
							eventsId={key}
							title={value.name}
							description={value.description}
							type={value.type}
							date={value.date}
							image={value.thumb}
							i={index}
						/>
					))}
				</section>
			</div>
		</div>
	);
}
