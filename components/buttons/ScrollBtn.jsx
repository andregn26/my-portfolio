"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "../icons/Arrows";
import Link from "next/link";

const ScrollBtn = () => {
	return (
		<div className="relative hover:cursor-pointer bg-primary rounded-full h-24 mb-4 shadow-md">
			<Link href="/#projects">
				<motion.div
					animate={{ y: [0, 40, 0] }}
					transition={{
						duration: 2,
						ease: "easeInOut",
						repeat: Infinity,
						repeatDelay: 0,
					}}
					className="">
					<ChevronDown className={"!h-12 !w-12 text-secondary"} />
				</motion.div>
			</Link>
		</div>
	);
};

export default ScrollBtn;
