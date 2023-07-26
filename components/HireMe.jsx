import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:hidden">
			<div className="w-48 h-auto flex items-center justify-center relative ">
				<CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
				<Link
					href="mailto:andregn26@gmail.com"
					className="flex text-center items-center justify-center absolute left-1/2 top-1/2
                     -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md 
                     border-solid border border-dark dark:border-light/50
                     rounded-full w-20 h-20 hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
					Email <br /> Me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
