import React from "react";
import Logo from "../../Logo";
import { MenuIcon } from "../../icons/MenuIcon";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavbarMobile = ({ handleClickMenu, isOpen }) => {
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
				className={`${className} text-light font-semibold relative group my-2`}
				onClick={handleClickMobileMenu}>
				{title}
				<span
					className={`h-[2px] left-0 -bottom-1.5 inline-block absolute bg-light group-hover:w-full transition-[width] ease duration-300 ${
						pathName === href ? "w-full" : "w-0 bg-light"
					}`}>
					&nbsp;
				</span>
			</button>
		);
	};
	return (
		<>
			<div className="flex justify-between fixed z-10  gap-2 bg-white/60 shadow-inner rounded-lg backdrop-blur-md w-[90%] px-8 py-4">
				<Logo />
				<MenuIcon handleClickMenu={handleClickMenu} isOpen={isOpen} />
			</div>

			{isOpen ? (
				<motion.div
					initial={{
						scale: 0,
						opacity: 0,
						x: "-50%",
						y: "-50%",
					}}
					transition={{
						ease: "easeOut",
						duration: 0.4,
					}}
					animate={{ scale: 1, opacity: 1 }}
					className="bg-slate-900/80 backdrop-blur-md border-2 min-w-[70vw] rounded-lg py-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
					<nav className={`flex items-center flex-col justify-center`}>
						<CustomMobileLink toggleMenu={handleClickMenu} href="/" title="Home" />
						<CustomMobileLink toggleMenu={handleClickMenu} href="/about" title="About" />
						<CustomMobileLink toggleMenu={handleClickMenu} href="/photography" title="Photography" />
						<CustomMobileLink toggleMenu={handleClickMenu} href="/projects" title="Web" />
					</nav>
				</motion.div>
			) : null}
		</>
	);
};

export default NavbarMobile;
