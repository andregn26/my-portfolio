import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full border-t border-solid border-dark dark:border-light/50  font-medium text-md px-10 sm:text-base ">
			<div className="py-8 flex items-center justify-between lg:flex-col lg:py-6 gap-2">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center">
					Build with{" "}
					<span className="text-primary dark:text-primaryDark text-2xl px-1 ">
						&#9825;{" "}
					</span>
					<Link href="/">by André Gregório</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
