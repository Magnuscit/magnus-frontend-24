type DETAIL = {
  type: "WORKSHOP" | "PRO SHOW" | "NON-TECHNICAL" | "TECHNICAL" | "ONLINE";
  date: string;
  time: string;
  banner: string;
  thumb: string;
  price: number;
  limited: boolean;
  min_team_size: number;
  max_team_size: number;
};

type CONTACT = {
  incharge: string;
  phno: string;
};

export type EVENT = {
  id: string;
  title: string;
  description: string;
  registration: Array<string>;
  rules: Array<string>;
  details: DETAIL;
  prizes: Array<string>;
  contacts: Array<CONTACT>;
  category: "WK" | "GEN" | "PRO";
};

export const REPO_OWNER = "cittakshashila";
export const REPO_NAME = "EVENTS-DATA-24";

export type INFO_URL =
  `https://raw.githubusercontent.com/${string}/${string}/master/${string}/info.json`;
export type MEDIA_URL =
  `https://raw.githubusercontent.com/${string}/${string}/master/events/${string}/assets/${string}.png`;

export type FOLDER_TYPE = {
  name: string;
  path: string;
  contentType: string;
};
