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
				className={`bg-cream font-space absolute top-12 right-0 text-accent border-black border text-center text-sm min-w-52 transition-all ${!isOpen && "hidden"}`}
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
					<div className="p-0 flex flex-col items-center justify-between uppercase">
						<Link
							href="/u"
							className="text-xl cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey w-full whitespace-nowrap text-black py-3 block"
						>
							{auth.name}
						</Link>
						<Link
							href="/edit-name"
							className="cursor-pointer bg-accent text-cream p-3 font-bold hover:bg-accent-hover w-full h-1/2 hover:text-white"
						>
							Edit Info
						</Link>

						<ul className="space-y-1 w-full">
							<button
								onClick={() => {
									router.push("/");
									logOut();
								}}
								className="cursor-pointer bg-red-500 text-cream p-3 font-bold hover:bg-red-600 w-full h-1/2 hover:text-white"
							>
								LOG OUT
							</button>
						</ul>
					</div>
				)}
			</section>
		</section>
	);
}
