"use client";

import { API_URL } from "@/libs/constants";
import { EVENT } from "@/libs/types";
import { useAuth, useRazorpayStore } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RenderRazorpay from "../RenderRazorpay";
import RenderRazorPayForm from "../RenderRazorPayForm";

interface TUser {
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
  const { auth } = useAuth();
  const { isRazorpayOpen, openRazorpay } = useRazorpayStore((e) => e);
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>();
  const [paymentDiabled, setPaymentDisabled] = useState<boolean>(false);
  const [user, setUser] = useState<TUser | null>(null);

  const payNowButton = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/userFullyRegistered`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.jwt}`,
          "Content-Type": "application/json",
        },
      });
      if (response.data.status === "notok") {
        router.push("/edit-name");
      } else {
        const paymentReRoute = async () => {
          try {
            const response = await fetch(`${API_URL}/payment/createOrder`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${auth?.jwt}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                amount: eventData.details.price * 100,
                receipt: "receipt#2",
                notes: {
                  eventId: eventData.id,
                },
              }),
            });

            const data = await response.json();
            if (data.status === "👍") {
              const order: Order = data.order;
              openRazorpay();
              setOrder(order);
            } else {
              alert("Failed to create order: " + data.message);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
          }
        };
        paymentReRoute();
      }
    } catch (e) {}
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`${API_URL}/user/get`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.jwt}`,
          "Content-Type": "application/json",
        },
      });
      const userResponse: TUser = response.data.data;
      setUser(userResponse);

      userResponse.event_id.forEach((val) => {
        if (val === eventData.title) setPaymentDisabled(true);
      });
    };
    fetchUserData();
  }, []);
  console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)

  return (
    <main className="bg-cream w-full min-h-screen p-10 px-5 lg:px-24 pt-24 ">
      <h1 className="lg:text-8xl text-5xl font-bold text-accent">
        {eventData.title}
      </h1>
      <h1 className="text-xl font-light pb-5">technical</h1>

      <p className="lg:text-xl text-justify text-gray-600 pb-5">
        {eventData.description}
      </p>
      <h1 className="text-5xl font-black text-cream bg-accent text-right px-5 py-2">
        <span className="text-base">
          {eventData.details.price !== 0 && "fee:"}
        </span>
        {eventData.details.price === 0 ? "FREE" : `₹${eventData.details.price}`}
      </h1>

      <button
        onClick={payNowButton}
        disabled={paymentDiabled}
        className="bg-accent text-cream text-2xl font-bold px-3 py-2 mt-4 hover:bg-accent-hover"
      >
        PAY NOW
      </button>
      {isRazorpayOpen && order && user && (
        <RenderRazorpay
          amount={order.amount}
          currency={order.currency}
          orderid={order.id}
          keyid={process.env.REACT_APP_RAZORPAY_KEY_ID || ""}
          user={user}
        />
      )}

      <section className="lg:flex lg:space-x-10">
        <h1></h1>
        <div>
          <h1 className="text-3xl mt-4 text-accent">REGISTRATION</h1>
          <ul>
            {eventData.registration.map((val, i) => (
              <li key={i} className="text-justify pt-2">
                {i + 1}. {val}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-3xl mt-4 text-accent">RULES</h1>
          <ul>
            {eventData.rules.map((val, i) => (
              <li key={i} className="text-justify pt-2">
                {i + 1}. {val}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <h1 className="text-3xl mt-4 text-accent">CONTACT US</h1>
      <ul className="pt-1">
        {eventData.contacts.map((val, i) => (
          <li key={i} className="">
            {val.incharge}: {val.phno}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SingleEventComponent;
