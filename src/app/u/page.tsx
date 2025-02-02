"use client";

import NavBar from "@/components/NavBar";
import { useProfileButton } from "@/hooks/useUserProfile";
import { API_URL } from "@/libs/constants";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/user/userFullyRegistered`,
          {
            headers: { Accept: "application/json" },
          },
        );

        if (response.status === 401) {
          logOut();
          return;
        }

        const result: { data: DATA[] } = await response.data();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <main className="bg-accent w-full min-h-screen text-cream p-3 sm:p-10 md:p-24">
        <h1 className="text-6xl font-bold lg:text-9xl">
          Your Registered Events
        </h1>
        {data.length === 0 && <h1 className="text-3xl">YOU HAVEN'T REGISTERED FOR ANY EVENTS</h1>}
        <ul className="pt-10">
          {data.map((val, i) => (
            <li key={i} className="text-xl lg:text-2xl font-light">
              {i + 1} {val.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
