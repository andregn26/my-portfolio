"use client";
import { motion } from "framer-motion";

export const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.2,
		},
	},
};

export const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimatedText = ({ text, fontClass = "", dimensionsClass = "" }) => {
	return (
		<div className="w-full mx-auto md:py-2 py-0  flex items-center justify-center text-center overflow-hidden">
			<motion.h1
				className={`${fontClass} ${dimensionsClass} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl leading-[1.2]`}
				variants={quote}
				initial="initial"
				animate="animate">
				{text.split(" ").map((word, index) => (
					<motion.span className="inline-block" key={`word-${index}`} variants={singleWord}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
