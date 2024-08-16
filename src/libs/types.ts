type DETAIL = {
    type:
    | "WORKSHOP"
    | "PRO SHOW"
    | "NON-TECHNICAL"
    | "TECHNICAL"
    | "ONLINE EVENT";
    date: string;
    time: [number, number];
};

type CONTACT = {
    incharge: string;
    email: string;
    phno: string;
};



export type EVENT = {
    id: string;
    title: string;
    tagline: string;
    description: string;
    rules: Array<string>;
    details: DETAIL;
    prizes: Array<string>;
    contacts: Array<CONTACT>;
    links: Array<string>;
    glink?: string;
    fee: number;
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

