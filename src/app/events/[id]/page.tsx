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
      <main className="w-full min-h-screen flex items-center px-20">
        <h1 className="text-7xl font-bold text-accent">LOADING...</h1>
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
