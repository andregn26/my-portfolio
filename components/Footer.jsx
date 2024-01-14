import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full border-t border-solid border-dark/30 font-medium text-sm px-10 mt-8 ">
			<div className="flex flex-col md:flex-row items-center justify-between  py-3 gap-2">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center">
					Build with <span className="text-primary text-2xl px-1 ">&#9825; </span>
					<Link href="/">by André Gregório</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
