
export const targetDate: string = '13/09/2024';

export const calculateTimeLeft = () => {
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

