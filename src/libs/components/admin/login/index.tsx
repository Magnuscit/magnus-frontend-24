"use client"

import { API_URL } from "@/libs/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminLogin = () => {

	const router = useRouter()
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async () => {
		if (!id || !password) {
			alert("Please fill all the fields");
			return
		}
		try {
			await axios.post(`${API_URL}/admin/login`, {
				id,
				password
			}, {
				withCredentials: true
			})
			router.push("/admin")
		} catch (e: any) {
			setError(e.response.data.message);
		}
	}

	return (
		<main className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10`} >
			<div className="flex flex-col items-center gap-12 w-full">
				{!!error &&
					<div className="bg-red-100 w-[350px] flex flex-col items-center justify-center gap-2 p-4 text-red-800 border-red-800 border-[2px]">
						<span>{error}</span>
					</div>
				}
				<div className="flex flex-col items-center gap-12 w-full">
					<div>
						<h1 className="text-black text-3xl text-center font-bold">Admin Auth</h1>
						<div className="text-center">*Magnus'24*</div>
					</div>
					<div className="flex flex-col gap-2">
						<input onChange={e => setId(e.target.value)} placeholder="id" className="w-[350px] p-2 border-black border-[2px]" />
						<input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" className="w-[350px] p-2 border-black border-[2px]" />
						<button onClick={handleLogin} className="bg-black p-4 text-white hover:bg-[#303030]"> login </button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default AdminLogin;
