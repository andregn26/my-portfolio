"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "@/public/images/profile/developer-pic-2.jpg";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata = {
	title: "AG | About Me",
	description:
		"Explore my professional journey, skills, and hobbies. Discover my stack of technologies and get to know me better as a developer. Dive into my experience, projects, and passions. Let's connect and collaborate for future opportunities.",
};

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
			console.log(latest);
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const About = () => {
	return (
		<>
			<TransitionEffect />
			<div className="flex flex-col items-center justify-center w-full">
				<AnimatedText
					className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
					text="Passion Fuels Purpose!"
				/>
				{/* 1ST SECTION -  GRID */}
				<div className="grid w-full grid-cols-8 gap-16">
					{/* TEXT */}
					<div className="col-span-3 xl:col-span-4 md:col-span-8 flex flex-col items-start justify-start md:order-2">
						<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
							Biography
						</h2>
						<p className="font-medium">
							Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for
							creating beautiful, functional, and user-centered digital experiences.
							With 4 years of experience in the field. I am always looking for new and
							innovative ways to bring my clients' visions to life.
						</p>
						<p className="font-medium">
							I believe that design is about more than just making things look pretty
							– it's about solving problems and creating intuitive, enjoyable
							experiences for users.
						</p>
						<p className="font-medium">
							Whether I'm working on a website, mobile app, or other digital product,
							I bring my commitment to design excellence and user-centered thinking to
							every project I work on. I look forward to the opportunity to bring my
							skills and passion to your next project.
						</p>
					</div>
					{/* IMAGE */}
					<div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 md:order-1 ">
						<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
						<Image
							src={profilePic}
							priority="true"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="w-full h-auto rounded-2xl"
							alt="my-profile-pic"
						/>
					</div>
					{/* STACK */}
					<div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center  flex flex-col items-end justify-between md:order-3">
						<div className="flex flex-col items-end justify-center xl:items-center">
							<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
								<AnimatedNumbers value={50} /> +
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
								satisfied Clients
							</h2>
						</div>
						<div className="flex flex-col items-end justify-center xl:items-center">
							<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
								<AnimatedNumbers value={50} /> +
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
								satisfied Clients
							</h2>
						</div>
						<div className="flex flex-col items-end justify-center xl:items-center">
							<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
								<AnimatedNumbers value={50} /> +
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
								satisfied Clients
							</h2>
						</div>
					</div>
				</div>
				<Skills />
				<Experience />
				{/* <Education /> */}
			</div>
		</>
	);
};

export default About;
