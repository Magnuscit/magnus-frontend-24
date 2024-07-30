import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Magnus'24",
	description: "A National level technical symposium organized by the Department of Artificial Intelligence and Machine Learning, Chennai Institute of Technology.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="h-screen w-screen">
					{children}
				</div>
			</body>
		</html>
	);
}
