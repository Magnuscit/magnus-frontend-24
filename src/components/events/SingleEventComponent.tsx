"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { EVENT } from "@/libs/types";
import { useAuth, useRazorpayStore } from "@/store";
import RenderRazorpay from "../RenderRazorpay";

interface User {
	name: string;
	clg_name: string;
	phone_no: string;
	event_id: string[];
}

interface Order {
	id: string;
	entity: string;
	amount: number;
	amount_paid: number;
	amount_due: number;
	currency: string;
	receipt: string;
	offer_id: string | null;
	status: string;
	attempts: number;
	notes: string[];
	created_at: number;
}

const SingleEventComponent = ({ eventData }: { eventData: EVENT }) => {
	const router = useRouter();
	const { auth } = useAuth();
	const { isRazorpayOpen, openRazorpay } = useRazorpayStore((e) => e);

	const [order, setOrder] = useState<Order | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [paymentDisabled, setPaymentDisabled] = useState(false);

	const handlePayment = async () => {
		try {
			const registrationResponse = await axios.get(
				`${API_URL}/user/userFullyRegistered`,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${auth?.jwt}`,
						"Content-Type": "application/json",
					},
				}
			);

			if (registrationResponse.data.status === "notok") {
				router.push("/edit-name");
				return;
			}

			const orderResponse = await fetch(`${API_URL}/payment/createOrder`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${auth?.jwt}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: eventData.details.price * 100,
					receipt: "receipt#2",
					notes: { eventId: eventData.id },
				}),
			});

			const orderData = await orderResponse.json();

			if (orderData.status === "👍") {
				openRazorpay();
				setOrder(orderData.order);
			} else {
				alert("Failed to create order: " + orderData.message);
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred. Please try again.");
		}
	};

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get(`${API_URL}/user/get`, {
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${auth?.jwt}`,
						"Content-Type": "application/json",
					},
				});

				const userData: User = response.data.data;
				setUser(userData);

				const hasRegisteredForEvent = userData.event_id.includes(eventData.title);
				setPaymentDisabled(hasRegisteredForEvent);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, [auth?.jwt, eventData.title]);

	return (
		<main className="bg-cream font-gro uppercase w-full min-h-screen p-10 px-5 lg:px-24 pt-24">
			<section className="event-header">
				<h1 className="lg:text-8xl text-5xl font-bold text-accent flex flex-row">
					<div className="w-full text-center">{eventData.title}</div>
					<h2 className="bg-accent w-full text-white text-[50px] flex flex-col items-center justify-center font-bold text-center">{eventData.details.type}</h2>
				</h1>
				<p className="lg:text-xl text-center font-medium text-gray-800 pb-5 mt-6">
					{eventData.description}
				</p>
			</section>

			<hr />

			<section className="event-pricing">
				{isRazorpayOpen && order && user && (
					<RenderRazorpay
						amount={order.amount}
						currency={order.currency}
						orderid={order.id}
						keyid={process.env.REACT_APP_RAZORPAY_KEY_ID || ""}
						user={user}
					/>
				)}
			</section>

			<h2 className="text-5xl w-full font-black text-cream bg-accent text-center py-2">
				{eventData.details.price === 0 ? "FREE" : `₹${eventData.details.price}`}
			</h2>


			<section className="lg:flex lg:space-x-10">
				<div className="event-registration w-1/2">
					<h2 className="text-3xl mt-4 font-medium text-accent">REGISTRATION</h2>
					<ul>
						{eventData.registration.map((item, index) => (
							<li key={index} className="text-justify font-medium pt-2">
								{index + 1}. {item}
							</li>
						))}
					</ul>
				</div>

				<div className="event-rules w-1/2">
					<h2 className="text-3xl mt-4 font-medium text-accent">RULES</h2>
					<ul>
						{eventData.rules.map((rule, index) => (
							<li key={index} className="text-justify pt-2 font-medium">
								{index + 1}. {rule}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="event-contacts">
				<h2 className="text-3xl mt-4 font-medium text-accent">CONTACT US!!</h2>
				<ul className="pt-1 font-medium">
					{eventData.contacts.map((contact, index) => (
						<li key={index}>
							{contact.incharge}: {contact.phno}
						</li>
					))}
				</ul>
			</section>

			<div className="w-full flex flex-col items-center justify-center">
				{eventData.details.type == "ONLINE" ?
					<a
						// @ts-ignore
						href={eventData["gform"]}
						className="bg-accent text-cream text-2xl font-bold px-3 py-2 mt-4 hover:bg-accent-hover"
					>
						* GFORM *
					</a>
					:
					<button
						onClick={handlePayment}
						disabled={paymentDisabled}
						className="bg-accent text-cream text-2xl font-bold px-3 py-2 mt-4 hover:bg-accent-hover"
					>
						* PAY NOW *
					</button>

				}			</div>
		</main>
	);
};

export default SingleEventComponent;
