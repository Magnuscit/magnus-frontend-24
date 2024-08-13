"use client"

import { useRouter } from "next/navigation"

const Admin = () => {
	const router = useRouter()
	return (
		<main
			className={`h-screen w-full bg-purple-100 flex relative flex-col items-center justify-center select-none md:p-0 p-10`}
		>
			<div className="flex flex-col gap-8">
				<div>
					<h1 className="text-black text-3xl text-center font-bold">Admin Panel</h1>
					<div className="text-center">*Magnus&apos;24*</div>
				</div>
				<div className="flex flex-col gap-2">
					<button onClick={() => router.push("/admin/sponsormail")} className="bg-black w-[350px] p-4 text-white hover:bg-[#303030]">
						sponsor mail
					</button>
					<button disabled className="cursor-not-allowed disabled:bg-[#505050] bg-black p-4 text-white hover:bg-[#303030]">
						ondesk registrations
					</button>
				</div>
			</div>
		</main>
	)
}

export default Admin;
