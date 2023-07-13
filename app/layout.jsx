import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children, className = "" }) {
	return (
		<html lang="en">
			<body className={`font-mont bg-light text-dark`}>
				<Navbar />
				<main className={`p-32 inline-block z-0 w-full min-h-screen ${className}`}>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
