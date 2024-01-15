"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/public/images/profile/profile_real.webp";
import { GithubIcon, LinkedInIcon } from "@/components/old/Icons";

const AnimatedHero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
			className="h-full flex flex-col items-center justify-center">
			<figure className="relative w-36 h-36 rounded-full shadow-lg overflow-hidden border-4 border-solid border-primary">
				<Image src={profilePic} fill className="object-cover " />
			</figure>
			<h1 className="mt-4 lg:mt-6 font-bold text-center text-4xl">Hey, I'm André!</h1>
			<h2 className="mt-1 lg:mt-2 font-semilight text-center text-2xl">
				I create and develop applications, handling every aspect of the process.
			</h2>
			<div className="gap-4 flex mt-6">
				<a className="btn btn-sm text-xs" href="https://github.com/andregn26" target="_blank">
					<GithubIcon className={"!w-4 !h-4"} />
					Github
				</a>
				<a className="btn btn-sm text-xs" href="https://www.linkedin.com/in/andrengregorio/" target="_blank">
					<LinkedInIcon className={"!w-4 !h-4 "} />
					LinkedIn
				</a>
			</div>
		</motion.div>
	);
};

export default AnimatedHero;
