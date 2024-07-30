"use client"

import Marquee from "react-fast-marquee";
import { Anton } from "next/font/google";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';

const anton = Anton({ weight: "400", subsets: ["latin"] });

const targetDate: string = '13/09/2024';

const calculateTimeLeft = () => {
	const [day, month, year] = targetDate.split('/').map(Number);
	const target = new Date(year, month - 1, day).getTime();
	const now = new Date().getTime();
	const difference = target - now;

	if (difference <= 0) {
		return { hours: 0, minutes: 0, seconds: 0 };
	}

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
};

const Countdown = () => {

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const formatTime = (unit: any) => String(unit).padStart(2, '0');

	return (
		<div className="bg-pink-100 w-full h-full flex flex-col items-center justify-center">
			<div className={anton.className}>
				<div className="text-black text-[150px]"> MAGNUS'<CountUp start={0} end={24} delay={2} /> </div>
				<div className="text-black text-[50px] text-center p-5 w-[650px]">
					{`${formatTime(timeLeft.days)} : ${formatTime(timeLeft.hours)} : ${formatTime(timeLeft.minutes)} : ${formatTime(timeLeft.seconds)}`}
				</div>
			</div>
			<div className="w-full text-center p-2 py-4 absolute bottom-[10%] bg-black font-semibold overflow-clip whitespace-pre">
				<Marquee className="text-white">✨ some randome ass info about the sympo ✨</Marquee>
			</div>
		</div>
	)
}

export default Countdown;
