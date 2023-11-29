"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import Header from "@/components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`font-mont bg-light text-dark relative flex items-center flex-col`}>
				<Header />
				<main className={` z-0 mt-16 w-full h-full relative flex flex-col items-center`}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
