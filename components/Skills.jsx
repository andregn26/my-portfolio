import React from "react";

import {
	CssIcon,
	GatsbyIcon,
	HtmlIcon,
	JavascriptIcon,
	MongoDbIcon,
	MySqlIcon,
	NextJsIcon,
	NodeJsIcon,
	ReactIcon,
	SanityIcon,
	SassIcon,
	TailwindIcon,
	WordpressIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useRef } from "react";

// Icon Container and Animation
const IconContainer = ({ children }) => {
	const iconContainerAnimation = {
		initial: {
			opacity: 1,
		},
		whileInView: {
			opacity: 1,
			transition: {
				staggerChildren: 0.4,
			},
		},
	};
	return (
		<motion.div
			variants={iconContainerAnimation}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true }}
			className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">
			{children}
		</motion.div>
	);
};

// Text and Animation
const H1Icon = ({ text }) => {
	const textIconAnimation = {
		initial: {
			opacity: 0,
			y: -50,
		},
		whileInView: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 1.2,
			},
		},
	};
	return (
		<motion.h1
			variants={textIconAnimation}
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true }}
			className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
			{text}
		</motion.h1>
	);
};

const Skills = () => {
	const ref = useRef(null);
	const iconStyles =
		"w-24 xs:w-20 h-24 xs:h-20 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full";
	const singleIconAnimation = {
		initial: {
			opacity: 0,
			y: 50,
		},
		whileInView: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.2,
			},
		},
	};
	return (
		<div className="mt-64">
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl ">
				Skills
			</h2>
			<div className="flex lg:grid  lg:grid-cols-1 justify-center content-center flex-wrap gap-8">
				{/* basics */}
				<div ref={ref} className="flex flex-col items-center">
					<H1Icon text="Basics" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<HtmlIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<CssIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<JavascriptIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
				{/* styling */}
				<div className="flex flex-col items-center">
					<H1Icon text="Styling" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<SassIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<TailwindIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
				{/* library */}
				<div className="flex flex-col items-center">
					<H1Icon text="Library" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<ReactIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
				{/* frameworks */}
				<div className="flex flex-col items-center">
					<H1Icon text="Frameworks" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<GatsbyIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<NextJsIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>

				{/* backend */}
				<div className="flex flex-col items-center">
					<H1Icon text="Backend" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<NodeJsIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
				{/* database */}
				<div className="flex flex-col items-center">
					<H1Icon text="Database" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<MongoDbIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<MySqlIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
				{/* cms */}
				<div className="flex flex-col items-center">
					<H1Icon text="CMS" />
					<IconContainer>
						<motion.div variants={singleIconAnimation}>
							<WordpressIcon className={iconStyles} />
						</motion.div>
						<motion.div variants={singleIconAnimation}>
							<SanityIcon className={iconStyles} />
						</motion.div>
					</IconContainer>
				</div>
			</div>
		</div>
	);
};

export default Skills;
