import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "@/libs/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magnus'25",
  description:
    "A National level technical symposium organized by the Department of Artificial Intelligence and Machine Learning, Chennai Institute of Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-screen w-screen">{children}</div>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
