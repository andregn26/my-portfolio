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
						"#320301",
						"#4e0501",
						"#8f140d",
						"#ad1007",
						"#d20e03",
						"#F91306",
						"#F91306",
						"#d20e03",
						"#ad1007",
						"#8f140d",
						"#4e0501",
						"#320301",
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
