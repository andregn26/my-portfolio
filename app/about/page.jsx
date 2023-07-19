"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "@/public/images/profile/profile-pic-1.jpg";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
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
					className="!mt-16  mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
					text="Passion Fuels Purpose!"
				/>
				{/* 1ST SECTION -  GRID */}
				<div className="grid w-full grid-cols-8 gap-y-0 md:gap-y-8 md:gap-x-0 gap-x-8">
					{/* TEXT */}
					<div className="col-span-4 w-full md:col-span-8 flex flex-col items-start justify-start md:order-2">
						<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Biography
						</h2>
						<p className="font-medium">
							Hi, I'm CodeBucks, a web developer and UI/UX
							designer with a passion for creating
							beautiful, functional, and user-centered
							digital experiences. With 4 years of
							experience in the field. I am always looking
							for new and innovative ways to bring my
							clients' visions to life.
						</p>
						<p className="font-medium">
							I believe that design is about more than
							just making things look pretty – it's about
							solving problems and creating intuitive,
							enjoyable experiences for users.
						</p>
						<p className="font-medium">
							Whether I'm working on a website, mobile
							app, or other digital product, I bring my
							commitment to design excellence and
							user-centered thinking to every project I
							work on. I look forward to the opportunity
							to bring my skills and passion to your next
							project.
						</p>
					</div>
					{/* IMAGE */}
					<div className="col-span-4 overflow-hidden w-full-4 md:col-span-8 relative h-max   md:order-1 ">
						<Image
							src={profilePic}
							priority="true"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
