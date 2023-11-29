import Logo from "@/components/Logo";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarDesktop = () => {
	const CustomLink = ({ href, title, className = "" }) => {
		const pathName = usePathname();

		return (
			<Link href={href} className={`${className} relative group font-semibold`}>
				{title}
				<span
					className={`h-[2px] left-0 -bottom-1.5 inline-block absolute bg-dark  group-hover:w-full transition-[width] ease duration-300 ${
						pathName === href ? "w-full" : "w-0"
					}`}>
					&nbsp;
				</span>
			</Link>
		);
	};

	return (
		<div className="flex justify-between fixed z-10  gap-2 bg-white/60 shadow-inner rounded-lg backdrop-blur-md w-[90%] px-8 py-4">
			<Logo />
			<nav className="relative">
				<CustomLink href="/" title="Home" className="mr-4" />
				<CustomLink href="/about" title="About" className="mx-4" />
				<CustomLink href="/photography" title="Photography" className="mx-4" />
				<CustomLink href="/projects" title="Web" className="ml-4" />
			</nav>
		</div>
	);
};

export default NavbarDesktop;
