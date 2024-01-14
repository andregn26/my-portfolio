"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`font-mont bg-light text-dark relative flex items-center flex-col`}>
				<div className={` w-full h-full relative flex flex-col items-center`}>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
