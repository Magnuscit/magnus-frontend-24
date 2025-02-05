"use client";

import NavBar from "@/components/NavBar";
import { useProfileButton } from "@/hooks/useUserProfile";
import { API_URL } from "@/libs/constants";
import { useAuth } from "@/store";
import axios from "axios";
import { useEffect, useState } from "react";

interface DATA {
	id: string;
	name: string;
	fee: number;
}

export default function Profile() {
	const [data, setData] = useState<DATA[]>([]);
	const { logOut } = useProfileButton();
	const auth = useAuth((e) => e.auth);

	useEffect(() => {
		const fetchData = async () => {
			if (!auth) return;
			try {
				const response = await axios.get(`${API_URL}/user/get`, {
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${auth?.jwt}`,
						"Content-Type": "application/json",
					},
				});

				if (response.status === 401) {
					logOut();
					return;
				}

				const result = response.data.data.event_id;
				console.log(result)
				setData(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [auth]);

	return (
		<>
			<NavBar />
			<main className="bg-accent font-space w-full h-full min-h-screen text-cream p-3 sm:p-10 md:p-24">
				{data.length === 0 ? (
					<div className="w-full h-full flex flex-col items-center justify-center">
						<h1 className="text-3xl">* YOU HAVEN&apos;T REGISTERED FOR ANY EVENTS *</h1>
					</div>
				) :
					<>
						<h1 className="text-6xl font-bold">
							YOUR REGISTERED EVENTS
						</h1>
						<ul className="pt-10">
							{data.map((val, i) => (
								<li key={i} className="text-xl lg:text-2xl font-light">
									{i + 1} {val.name}
								</li>
							))}
						</ul>
					</>
				}
			</main>
		</>
	);
}
