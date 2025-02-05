"use client";

import { useProfileButton } from "@/hooks/useUserProfile";
import { useAuth } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileButton() {
	const { menuRef, imgRef, logOut, login, isOpen, setOpen } =
		useProfileButton();
	const { auth } = useAuth((state) => state);
	const router = useRouter();

	return (
		<section className="relative">
			<section
				onClick={() => {
					setOpen(!isOpen);
				}}
				className=" cursor-pointer"
			>
				<Image
					src={
						auth?.picture ||
						"https://i.pinimg.com/564x/ef/18/a0/ef18a00898e588648883cb370056dc0d.jpg"
					}
					className="rounded-full"
					width={36}
					height={36}
					alt="default-profile"
					ref={imgRef}
				/>
			</section>

			<section
				className={`bg-cream font-gro absolute top-12 right-0 text-accent border-black border text-center text-sm min-w-52 transition-all ${!isOpen && "hidden"}`}
				ref={menuRef}
			>
				{auth === null ? (
					<div className="p-0 flex flex-col items-center justify-between">
						<button
							onClick={() => login()}
							className="cursor-pointer bg-accent text-cream p-3 font-bold hover:bg-accent-hover w-full h-1/2 hover:text-white"
						>
							LOGIN
						</button>
					</div>
				) : (
					<>
						<Link
							href="/u"
							className="text-xl cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey w-full block"
						>
							{auth.name}
						</Link>
						<Link
							href="/u"
							className="text-xs cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey block"
						>
							{auth.email}
						</Link>

						<hr className="my-2" />
						<Link
							href="/edit-name"
							className="text-xs cursor-pointer my-1 px-3 font-mono hover:bg-slate-200 hover:text-grey block"
						>
							Edit Info
						</Link>

						<ul className="space-y-1">
							<button
								onClick={() => {
									router.push("/");
									logOut();
								}}
								className=" cursor-pointer bg-red-500 mx-3 py-1 text-cream font-mono hover:bg-red-400 text-center w-1/2 inline-block rounded-sm"
							>
								Log Out
							</button>
						</ul>
					</>
				)}
			</section>
		</section>
	);
}
