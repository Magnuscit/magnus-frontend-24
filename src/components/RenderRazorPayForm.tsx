"use client";

import { useAuth } from "@/store";

interface TUser {
  name: string;
  clg_name: string;
  phone_no: string;
}

interface props {
  orderid: string;
  keyid: string;
  currency: string;
  amount: number;
  user: TUser;
}
export default function RenderRazorPayForm({
  orderid,
  keyid,
  currency,
  amount,
  user,
}: props) {
  const auth = useAuth((e) => e.auth);
  console.log(orderid)
  return (
    <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
      <input type="hidden" name="key_id" value={keyid} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency" value={currency} />
      <input type="hidden" name="order_id" value={orderid} />
      <input type="hidden" name="name" value="Magnus" />
      <input type="hidden" name="description" value="CIT Chennai Sympo" />
      <input
        type="hidden"
        name="image"
        value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg"
      />
      <input type="hidden" name="prefill[name]" value={user.name} />
      <input type="hidden" name="prefill[contact]" value={user.phone_no} />
      <input type="hidden" name="prefill[email]" value={auth?.name} />
      <input
        type="hidden"
        name="callback_url"
        value="http://localhost:3000/events"
      />
      <input
        type="hidden"
        name="cancel_url"
        value="http://localhost:3000/events"
      />
      <button>Submit</button>
    </form>
  );
}
