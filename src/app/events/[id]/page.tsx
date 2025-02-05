"use client";

import NavBar from "@/components/NavBar";
import { EVENT } from "@/libs/types";
import { useState } from "react";
import { useEffect } from "react";
import { INFO_URL } from "@/libs/utils";
import SingleEventComponent from "@/components/events/SingleEventComponent";

const Event = ({ params: { id } }: { params: { id: string } }) => {
	const [data, setData] = useState<EVENT | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(INFO_URL(id));
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
		<>
			<NavBar />
			<SingleEventComponent eventData={data} />
		</>
	);
};
export default Event;
