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
import { RiJavascriptLine, RiReactjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-8xl text-center w-full mt-64">Skills</h2>
			<div className="flex gap-8">
				<div className="flex flex-col gap-4 items-center">
					<h1>Basics</h1>
					<motion.div
						initial={{ x: 0, y: 50, scale: 0.8 }}
						animate={{
							x: 0,
							y: 0,
							scale: 1,
						}}
						transition={{
							ease: "linear",
							duration: 2,
							y: { duration: 1 },
						}}>
						<HtmlIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<CssIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<JavascriptIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</motion.div>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>Styling</h1>
					<SassIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					<TailwindIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>Library</h1>
					<ReactIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>Frameworks</h1>
					<GatsbyIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					<NextJsIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>Backend</h1>
					<NodeJsIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>Database</h1>
					<MongoDbIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					<MySqlIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
				<div className="flex flex-col gap-4 items-center">
					<h1>CMS</h1>
					<WordpressIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					<SanityIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
				</div>
			</div>
		</>
	);
};

export default Skills;
