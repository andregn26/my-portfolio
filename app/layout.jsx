"use client";

import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`font-mont bg-light dark:bg-dark text-dark dark:text-light relative`}>
				<Script id="theme-switcher" strategy="beforeInteractive">
					{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
				</Script>
				<Navbar
					className="w-full 
				px-32 lg:px-24 md:px-16 sm:px-8 py-8 mb-8 f
				ont-medium 
				flex items-center justify-between 
				absolute top-0 left-0"
				/>
				<main
					className={`  inline-block z-0 
					px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 mt-16 md:mt-24
					 w-full h-full relative`}>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
