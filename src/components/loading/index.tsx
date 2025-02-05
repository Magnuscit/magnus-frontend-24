import { useState } from "react";

const Loading = () => {
	const [dots, setDots] = useState(0);

	setTimeout(() => {
		setDots((dots + 1) % 4);
	}, 500);

	return (
		<main
			className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10 font-space`}
		>
			<div className="flex flex-col items-center gap-12 w-full">
				<div>
					<h1 className="text-black text-[50px] text-center font-bold">Loading{'.'.repeat(dots)}</h1>
					<div className="text-center">*Magnus&apos;24*</div>
				</div>
			</div>
		</main>
	)
}

export default Loading;
