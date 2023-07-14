"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
	const pathName = usePathname();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] left-0 -bottom-0.5 inline-block absolute bg-dark dark:bg-light group-hover:w-full transition-[width] ease duration-300 ${
					pathName === href ? "w-full" : "w-0"
				}`}>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	return (
		<>
			<header className="w-full px-32 py-8 font-medium flex items-center justify-between absolute top-0 left-0">
				{/* PAGES NAVIGATION */}
				<nav>
					<CustomLink href="/" title="Home" className="mr-4" />
					<CustomLink href="/about" title="About" className="mx-4" />
					<CustomLink href="/projects" title="Projects" className="ml-4" />
				</nav>
				{/* SOCIAL MEDIA NAVIGATION & THEME SWITCHER */}
				<nav className="flex items-center justify-center flex-wrap gap-2">
					<motion.a
						href="https://www.linkedin.com/in/andrengregorio"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6">
						<LinkedInIcon />
					</motion.a>
					<motion.a
						href="https://github.com/andregn26"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 h-auto">
						<GithubIcon />
					</motion.a>
					<motion.a
						href="/"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 h-auto">
						<InstagramIcon />
					</motion.a>
					<button
						className="flex items-center justify-center rounded-full p-1"
						onClick={() => setMode(mode === "light" ? "dark" : "light")}>
						{mode === "dark" ? (
							<SunIcon className={"fill-dark"} />
						) : (
							<MoonIcon className={"fill-dark"} />
						)}
					</button>
				</nav>
				<div className="absolute left-[50%] top-2 translate-x-[-50%]">
					<Logo />
				</div>
			</header>
		</>
	);
};

export default Navbar;
