import { Main, Countdown } from "@/components";
import { COUNTDOWN } from "@/libs/constants";

export default function Home() {
	return (
		COUNTDOWN ? <Countdown /> : <Main />
	);
}
