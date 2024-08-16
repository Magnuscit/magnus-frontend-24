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
  type infoType = { name: string; type: Type; date: string };

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

  return (
    <div>
      <div className="relative bg-beige w-full p-10 xl:p-20 flex flex-col items-center justify-center overflow-clip">
        <NavBar />
      </div>
      <div className="items-center justify-center flex lg:px-10 lg:pt-0 relative">
        <section className="max-w-7xl grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Object.entries(data || {}).map(([key, value], index: number) => (
            <EventsCardComponent
              key={key}
              eventsId={key}
              title={value.name}
              description={value.type}
              i={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
