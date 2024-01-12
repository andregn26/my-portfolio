import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = ({ className = "" }) => {
	return (
		<div className={`${className}`}>
			<MotionLink
				href="/"
				className="w-16 h-8 bg-dark text-light  flex items-center justify-center rounded-lg text-2xl font-bold"
				whileHover={{
					backgroundColor: [
						"#121212",
						"rgb(67, 20, 7)",
						"rgb(124, 45, 18)",
						"rgb(154, 52, 18)",
						"rgb(194, 65, 12)",
						"rgb(234, 88, 12)",
						"rgb(249, 115, 22)",
						"rgb(249, 115, 22)",
						"rgb(234, 88, 12)",
						"rgb(194, 65, 12)",
						"rgb(154, 52, 18)",
						"rgb(124, 45, 18)",
						"rgb(67, 20, 7)",
						"#121212",
					],
					transition: { duration: 1.5, repeat: Infinity },
				}}>
				AG
			</MotionLink>
		</div>
	);
};

export default Logo;
