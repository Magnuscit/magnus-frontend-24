import { Main, Countdown } from "@/libs/components";
import { COUNTDOWN } from "@/libs/constants";

export default function Home() {
	return (
		COUNTDOWN ? <Countdown /> : <Main />
	);
}
