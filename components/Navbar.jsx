"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { LinkedInIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
	const pathName = usePathname();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] left-0 -bottom-0.5 inline-block absolute bg-dark group-hover:w-full transition-[width] ease duration-300 ${
					pathName === href ? "w-full" : "w-0"
				}`}>
				{" "}
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	return (
		<>
			<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
				<nav>
					<CustomLink href="/" title="Home" className="mr-4" />
					<CustomLink href="/about" title="About" className="mx-4" />
					<CustomLink href="/projects" title="Projects" className="ml-4" />
				</nav>

				<nav>
					<Link href="/" target="_blank">
						<LinkedInIcon />
					</Link>
					<Link href="/" target="_blank">
						T
					</Link>
					<Link href="/" target="_blank">
						T
					</Link>
					<Link href="/" target="_blank">
						T
					</Link>
				</nav>
				<div className="absolute left-[50%] top-2 translate-x-[-50%]">
					<Logo />
				</div>
			</header>
		</>
	);
};

export default Navbar;
