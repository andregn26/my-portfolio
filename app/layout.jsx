"use client";

import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children, className = "" }) {
	const path = usePathname();

	return (
		<html lang="en">
			<body className={`font-mont bg-light dark:bg-dark text-dark dark:text-light`}>
				<Script id="theme-switcher" strategy="beforeInteractive">
					{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
				</Script>
				<Navbar />
				<main
					className={` px-32 inline-block z-0 w-full h-full xl:px-24 lg:px-16 md:px-12 sm:px-8 ${className}`}>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
