"use client";

import { cn } from "@/libs/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "@/store";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useRouter } from "next/navigation";

export default function EditName() {
	const formSchema = z.object({
		name: z
			.string({ required_error: "Name feild is required" })
			.min(4, "Name should be atleast 4 characters")
			.max(15, "Name should be atmost 15 characters"),
		college: z
			.string({ required_error: "College feild is required" })
			.min(4, "College Name should be atleast 3 characters")
			.max(50, "Colege Name should be atmost 50 characters"),
		mobile: z
			.string({ required_error: "Mobile Number is required" })
			.length(10, "Invalid mobile number"),
		email: z
			.string({
				required_error: "Email is required",
			})
			.email("Not a valid email"),
	});

	type UserType = z.infer<typeof formSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<UserType>({
		resolver: zodResolver(formSchema.omit({ email: true })),
	});

	const auth = useAuth((e) => e.auth);

	useEffect(() => {
		if (errors.name) {
			toast.error(errors.name.message);
		} else if (errors.college) {
			toast.error(errors.college.message);
		} else if (errors.mobile) {
			toast.error(errors.mobile.message);
		} else if (errors.email) {
			toast.error(errors.email.message);
		}
	}, [errors]);

	const router = useRouter();
	const onSubmit = async (user: UserType) => {
		try {
			const response = await axios.post(
				`${API_URL}/user/updateUser`,
				{ name: user.name, phone_no: user.mobile, clg_name: user.college },
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${auth?.jwt}`,
						"Content-Type": "application/json",
					},
				},
			);

			console.log(response.data)
			if (response.status === 200) {
				router.push("/events");
			};

		} catch (err: any) {
			console.log(err);
		}
	};

	return (
		<>
			<NavBar />
			<main className="bg-accent font-space uppercase text-cream w-full min-h-screen p-4 pt-10">
				<h1 className="text-8xl font-bold pt-10">Update Profile</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="min-h-80 md:min-h-96 p-5 flex flex-col space-y-4 md:space-y-6 md:pt-24"
				>
					<input
						type="text"
						placeholder="NAME"
						{...register("name")}
						className={cn(
							"min-h-9 max-w-72 md:max-w-96 bg-transparent text-2xl md:text-4xl font-mono border-white border-b-2 focus:outline-0",
							errors.name && "border-red-500",
						)}
					/>

					<input
						type="text"
						placeholder="COLLEGE"
						{...register("college")}
						className={cn(
							"min-h-9 max-w-72 md:max-w-96 bg-transparent text-2xl md:text-4xl font-mono border-white border-b-2 focus:outline-0",
							errors.college && "border-red-500",
						)}
					/>

					<input
						type="text"
						placeholder="MOBILE"
						className={cn(
							"min-h-9 max-w-72 md:max-w-96 bg-transparent text-2xl font-mono md:text-4xl border-white border-b-2 focus:outline-0",
							errors.mobile && "border-red-500",
						)}
						{...register("mobile")}
					/>
					<h1 className="font-mono text-xl font-bold textcenter md:text-4xl pt-4">
						{auth?.email}
					</h1>

					<br />
					<button
						type="submit"
						className="text-accent justify-self-end bg-cream font-bold text-xl w-full lg:max-w-72 lg:py-3 py-2 font-mono hover:bg-white  md:py-4 md:text-xl"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<span className="font-oranienbaum">LOADING</span>
						) : (
							<span className="font-oranienbaum">UPDATE PROFILE</span>
						)}
					</button>
				</form>
				<ToastContainer />
			</main>
		</>
	);
}
