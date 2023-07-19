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
			<div className="grid grid-cols-12 gap-8 auto-rows-auto md:grid-cols-2">
				<div className="col-span-2 flex gap-4">
					{/* basics */}
					<div className=" flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Basics
						</h1>
						<HtmlIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<CssIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<JavascriptIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
					{/* styling */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Styling
						</h1>
						<SassIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<TailwindIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
				</div>
				<div className="col-span-2 flex gap-4">
					{/* library */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Library
						</h1>
						<ReactIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
					{/* frameworks */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Frameworks
						</h1>
						<GatsbyIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<NextJsIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
				</div>
				<div className="col-span-2 flex gap-4">
					{/* backend */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Backend
						</h1>
						<NodeJsIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
					{/* database */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Database
						</h1>
						<MongoDbIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<MySqlIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
				</div>
				<div className="col-span-2 flex gap-4">
					{/* cms */}
					<div className="flex flex-col gap-4 items-center">
						<h1 className="mb-8 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							CMS
						</h1>
						<WordpressIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
						<SanityIcon className="w-24 h-24 shadow-lg p-3 flex items-center border border-solid border-1 border-transparent dark:border-light  rounded-full " />
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
