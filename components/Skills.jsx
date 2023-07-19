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

const IconContainer = ({ children }) => (
	<div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">{children}</div>
);

const H1Icon = ({ text }) => (
	<h1 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">{text}</h1>
);

const iconStyles =
	"w-24 xs:w-20 h-24 xs:h-20 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full";

const Skills = () => {
	return (
		<div className="mt-64">
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl ">
				Skills
			</h2>
			<div className="flex lg:grid  lg:grid-cols-1 justify-center content-center flex-wrap gap-8">
				{/* basics */}
				<div className="flex flex-col items-center">
					<H1Icon text="Basics" />
					<IconContainer>
						<HtmlIcon className={iconStyles} />
						<CssIcon className={iconStyles} />
						<JavascriptIcon className={iconStyles} />
					</IconContainer>
				</div>
				{/* styling */}
				<div className="flex flex-col items-center">
					<H1Icon text="Styling" />
					<IconContainer>
						<SassIcon className={iconStyles} />
						<TailwindIcon className={iconStyles} />
					</IconContainer>
				</div>
				{/* library */}
				<div className="flex flex-col items-center">
					<H1Icon text="Library" />
					<IconContainer>
						<ReactIcon className={iconStyles} />
					</IconContainer>
				</div>
				{/* frameworks */}
				<div className="flex flex-col items-center">
					<H1Icon text="Frameworks" />
					<IconContainer>
						<GatsbyIcon className={iconStyles} />
						<NextJsIcon className={iconStyles} />
					</IconContainer>
				</div>

				{/* backend */}
				<div className="flex flex-col items-center">
					<H1Icon text="Backend" />
					<IconContainer>
						<NodeJsIcon className={iconStyles} />
					</IconContainer>
				</div>
				{/* database */}
				<div className="flex flex-col items-center">
					<H1Icon text="Database" />
					<IconContainer>
						<MongoDbIcon className={iconStyles} />
						<MySqlIcon className={iconStyles} />
					</IconContainer>
				</div>
				{/* cms */}
				<div className="flex flex-col items-center">
					<H1Icon text="CMS" />
					<IconContainer>
						<WordpressIcon className={iconStyles} />
						<SanityIcon className={iconStyles} />
					</IconContainer>
				</div>
			</div>
		</div>
	);
};

export default Skills;
