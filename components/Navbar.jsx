"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";

const ThemeButton = ({ mode, setMode }) => {
	return (
		<button
			className="flex items-center justify-center rounded-full p-1"
			onClick={() => setMode(mode === "light" ? "dark" : "light")}>
			{mode === "dark" ? (
				<SunIcon className={"fill-dark"} />
			) : (
				<MoonIcon className={"fill-dark"} />
			)}
		</button>
	);
};

const MenuIcon = ({ handleClickMenu, isOpen }) => {
	return (
		<button
			className=" flex-col justify-center items-center hidden lg:flex"
			onClick={handleClickMenu}>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
					isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
				} `}></span>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
					isOpen ? "opacity-0" : "opacity-100"
				}`}></span>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
					isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
				}`}></span>
		</button>
	);
};

const SocialMediaIcon = ({ children, href, className = "" }) => {
	return (
		<motion.a
			href={href}
			target="_blank"
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.9 }}
			className={`w-6 h-auto ${className}`}>
			{children}
		</motion.a>
	);
};

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

const CustomMobileLink = ({ href, title, className = "", toggleMenu }) => {
	const router = useRouter();
	const pathName = usePathname();

	const handleClickMobileMenu = () => {
		toggleMenu();
		router.push(href);
	};

	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2`}
			onClick={handleClickMobileMenu}>
			{title}
			<span
				className={`h-[1px] left-0 -bottom-0.5 inline-block absolute bg-dark dark:bg-light group-hover:w-full transition-[width] ease duration-300 ${
					pathName === href ? "w-full" : "w-0 dark:bg-light"
				}`}>
				&nbsp;
			</span>
		</button>
	);
};

const NavlinksDesktop = ({ className = "" }) => {
	return (
		<nav className={`${className}`}>
			<CustomLink href="/" title="Home" className="mr-4" />
			<CustomLink href="/about" title="About" className="mx-4" />
			<CustomLink href="/projects" title="Projects" className="ml-4" />
		</nav>
	);
};

const NavlinksMobile = ({ handleClickMenu, className = "" }) => {
	return (
		<nav className={`${className} flex items-center flex-col justify-center`}>
			<CustomMobileLink toggleMenu={handleClickMenu} href="/" title="Home" />
			<CustomMobileLink toggleMenu={handleClickMenu} href="/about" title="About" />
			<CustomMobileLink toggleMenu={handleClickMenu} href="/projects" title="Projects" />
		</nav>
	);
};

export const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);
	const handleClickMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<header className="w-full px-32 lg:px-24 md:px-16 sm:px-8 py-8 font-medium flex items-center justify-between absolute top-0 left-0">
				<div className="flex justify-between w-full items-center">
					{/* LEFT SIDE */}
					<div className="flex lg:justify-between lg:w-full gap-2">
						<Logo className="flex items-center justify-center" />
						<MenuIcon handleClickMenu={handleClickMenu} isOpen={isOpen} />
					</div>

					{/* CENTER */}
					<NavlinksDesktop className="flex justify-center lg:hidden" />
					{/* RIGHT SIDE */}
					<div className="flex justify-end items-center lg:hidden content-end">
						{/* SOCIAL MEDIA NAVIGATION & THEME SWITCHER */}
						<nav className="flex items-center justify-center flex-wrap gap-2">
							<SocialMediaIcon href="https://www.linkedin.com/in/andrengregorio">
								<LinkedInIcon />
							</SocialMediaIcon>
							<SocialMediaIcon href="https://github.com/andregn26">
								<GithubIcon />
							</SocialMediaIcon>
							<SocialMediaIcon href="https://github.com/andregn26">
								<InstagramIcon />
							</SocialMediaIcon>
							<ThemeButton mode={mode} setMode={setMode} />
						</nav>
					</div>
					{/* PAGES NAVIGATION  MOBILE*/}
					{isOpen ? (
						<motion.div
							initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
							transition={{ ease: "easeOut", duration: 0.4 }}
							animate={{ scale: 1, opacity: 1 }}
							className="bg-dark/90 dark:bg-light/75
				min-w-[70vw] rounded-lg backdrop-blur-md py-32
				flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
							<NavlinksMobile handleClickMenu={handleClickMenu} />
							{/* SOCIAL MEDIA NAVIGATION & THEME SWITCHER */}
							<nav className="flex items-center justify-center flex-wrap gap-2 sm:gap-1 mt-2">
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
								<ThemeButton mode={mode} setMode={setMode} />
							</nav>
						</motion.div>
					) : null}
				</div>
			</header>
		</>
	);
};
