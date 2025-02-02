import { useRazorpayStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const loadScript = (src: string) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("razorpay loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.log("error in loading razorpay");
      resolve(false);
    };
    document.body.appendChild(script);
  });

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
const RenderRazorpay = ({ orderid, keyid, currency, amount, user }: props) => {
  const router = useRouter();
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);
  const { isRazorpayOpen, closeRazorpay } = useRazorpayStore((e) => e);

  const displayRazorpay = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js",
      );

      if (!res) {
        console.error("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // Create Razorpay instance
      const options = {
        key: keyid,
        amount: amount,
        currency: currency,
        name: "Magnus",
        description: "Test Payment",
        order_id: orderid,
        prefill: {
          name: user.name,
          email: user.clg_name,
          contact: user.phone_no,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          confirm_close: true,
          ondismiss: function () {
            console.log("Modal closed");
            closeRazorpay();
          },
          escape: true,
        },
        retry: {
          enabled: false,
        },
        handler: function (response: any) {
          console.log("Payment successful:", response);
          closeRazorpay();
          // router.push("/events");
          router.refresh();
          window.location.reload();
        },
      };

      // @ts-ignore
      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.submit", (response: any) => {
        paymentMethod.current = response.method;
      });

      rzp1.on("payment.failed", (response: any) => {
        paymentId.current = response.error.metadata.payment_id;
        console.error("Payment failed:", response.error);
        closeRazorpay();
      });

      // Open the modal
      rzp1.open();

      console.log(isRazorpayOpen);
      // Cleanup on component unmount
      return () => {
        if (rzp1) {
          rzp1.close();
        }
      };
    } catch (error) {
      console.error("Error in Razorpay initialization:", error);
      closeRazorpay();
    }
  };

  useEffect(() => {
    displayRazorpay();
    closeRazorpay();
  }, [isRazorpayOpen]);

  return null;
};

export default RenderRazorpay;
