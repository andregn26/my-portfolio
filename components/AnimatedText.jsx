"use client";
import { motion } from "framer-motion";

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.2,
		},
	},
};

const singleWord = {
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

const AnimatedText = ({ text, className = "" }) => {
	return (
		<div className="w-full mx-auto py-2 sm:py-0  flex items-center justify-center text-center overflow-hidden">
			<motion.h1
				className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl`}
				variants={quote}
				initial="initial"
				animate="animate">
				{text.split(" ").map((word, index) => (
					<motion.span
						className="inline-block"
						key={`word-${index}`}
						variants={singleWord}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
