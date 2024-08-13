"use client"

import { useState } from "react";
import { parse } from "papaparse";
import axios from "axios";
import { API_URL } from "@/libs/constants";

const SponsorMail = () => {

	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");
	const [meta, setMeta] = useState<any>(null);

	const [confirm, setConfirm] = useState(false);

	const Submit = async () => {
		if (!!!subject || !!!body || !meta) {
			alert("Please fill all the fields");
			return
		}
		if (confirm) {
			setConfirm(false);
			parse(meta, {
				skipEmptyLines: true,
				complete: async function(results) {
					const parseData = (results.data as Array<Array<string>>).map(i => i.filter(j => !!j));
					try {
						const { data } = await axios.post(`${API_URL}/mail/sponsor`, {
							subject,
							body,
							meta: parseData
						}, {
							withCredentials: true
						})
						alert(data.message);
					} catch (e: any) {
						alert(`[error] - ${e.response.data.message}`);
					}
				},
			})
		} else {
			setConfirm(true);
		}
	}

	return (
		<main
			className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10`}
		>
			<div className="flex flex-col items-center gap-12 w-full">
				{confirm && (
					<div className="bg-yellow-100 w-[350px] flex flex-col items-center justify-center gap-2 p-4 text-red-800 border-yellow-800 border-[2px]">
						<span>Are you sure you want to send the mail?</span>
						<div className="gap-4 flex flex-row w-full">
							<button onClick={Submit} className="bg-yellow-800 p-2 w-1/2 text-white hover:bg-yellow-900">
								yes
							</button>
							<button onClick={() => setConfirm(false)} className="bg-yellow-800 p-2 w-1/2 text-white hover:bg-yellow-900">
								no
							</button>
						</div>
					</div>

				)}
				<div>
					<h1 className="text-black text-3xl text-center font-bold">Sponsor Mail</h1>
					<div className="text-center">*use it with utmost care*</div>
				</div>
				<div className="flex flex-col gap-2">
					<input onChange={(e) => setSubject(e.target.value)} placeholder="subject" className="w-[350px] p-2 border-black border-[2px]" />
					<textarea onChange={(e) => setBody(e.target.value)} placeholder="body" className="w-[350px] p-2 border-black border-[2px]" />
					<input onChange={(e) => setMeta(e.target.files ? e.target.files[0] : null)} accept=".csv" id="metadata" type="file" className="w-[350px] bg-white p-2 border-black border-[2px]" />
					<button onClick={Submit} className="bg-black p-4 text-white hover:bg-[#303030]"> send </button>
				</div>
			</div>
		</main >
	)
}

export default SponsorMail;
