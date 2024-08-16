import type { INFO_URL as INFO_URL_TYPE, MEDIA_URL as MEDIA_URL_TYPE } from "./types";

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


export const REPO_OWNER = "cittakshashila";
export const REPO_NAME = "EVENTS-DATA-24";

export const MEDIA_URL = (ID: string, MID: number): MEDIA_URL_TYPE => {
    return `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/master/events/${ID}/assets/${MID}.png`;
}

export const INFO_URL = (ID: string): INFO_URL_TYPE => {
    return `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/master/events/${ID}/info.json`;
}


export const FOLDER_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/master/info.json`;
