"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "@/public/images/profile/profile_real.webp";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring, motion, easeOut } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
	return (
		<>
			<TransitionEffect />
			<div className="flex flex-col items-center justify-center w-full ">
				<AnimatedText
					className="!mt-16  mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					text="Passion driven by purpose"
				/>
				{/* 1ST SECTION -  GRID */}
				<div className="grid w-full grid-cols-8 gap-y-0 md:gap-y-8 md:gap-x-0 gap-x-8">
					{/* TEXT */}
					<div className="col-span-4 w-full md:col-span-8 flex flex-col items-start justify-start md:order-2">
						<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Biography
						</h2>
						<p className="font-medium">
							Hi, I'm André, a web developer and curious self-taught UI/UX designer
							motivated by creating beautiful, functional and user-centric digital
							experiences. Being passionate about art, I am very influenced by the
							rules of composition, color and contrast that I try to bring to my
							projects.
						</p>
						<p className="font-medium mt-2">
							The two years I worked in Marketing helped me combine the visual
							component with strategic thinking capable of understanding the
							communication needs of brands.
						</p>
						<p className="font-medium mt-2">
							I look at web development as a toolbox that allows me to bring all my
							passions and interests together and create something meaningful for
							clients and the community.
						</p>
						<div>
							<p className="font-medium mt-2  relative">
								Scroll down and get to know a little more about me!
							</p>
						</div>
					</div>
					{/* IMAGE */}
					<div className="col-span-4 overflow-hidden w-full md:col-span-8 relative h-max   md:order-1 ">
						<Image
							src={profilePic}
							priority="true"
							className="w-full h-auto rounded-2xl"
							alt="my-profile-pic"
						/>
					</div>
				</div>
			</div>{" "}
			<Skills />
			<Experience />
			<Education />
			<Hobbies />
		</>
	);
};

export default About;
