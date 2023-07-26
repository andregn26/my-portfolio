import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = ({ className = "" }) => {
	return (
		<div className={`${className}`}>
			<MotionLink
				href="/"
				className="w-16 h-8 bg-dark text-light dark:border-light/50 border-black border border-solid  flex items-center justify-center rounded-lg text-2xl font-bold"
				whileHover={{
					backgroundColor: [
						"#121212",
						"rgba(131,58,180,1)",
						"rgba(253,29,29,1)",
						"rgba(252,176,69,1)",
						"rgba(131,58,180,1)",
						"#121212",
					],
					transition: { duration: 1, repeat: Infinity },
				}}>
				AG
			</MotionLink>
		</div>
	);
};

export default Logo;
