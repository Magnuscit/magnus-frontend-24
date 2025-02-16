"use client"

import { useState } from "react";

export function BusRoute() {
	const [toggle, setToggle] = useState<boolean>(true);
	if (!toggle) return null;
	return (
		<div onClick={() => setToggle(false)} className="fixed w-screen h-screen flex flex-col font-space items-center justify-center backdrop-brightness-[35%] z-[1000]">
			<div onClick={(e) => e.stopPropagation()} className="w-[90%] md:w-[50%] h-1/2 relative md:h-1/4 bg-white border-[1px] gap-6 p-10 border-black flex flex-col items-center justify-center">
				<button onClick={() => setToggle(false)} className="absolute font-black right-[2%] top-[2%] md:top-[5%]">X</button>
				<div className="font-black text-xl text-center">Bus routes will available in the following link</div>
				<a className="text-accent hover:underline" href="https://drive.google.com/file/d/1SaQ3AlCRO8MCTvTBZxh72HzZDTxkUJ-S/view?usp=sharing">&rarr; CIT Bus Routes &larr;</a>
			</div>
		</div>
	);
}
