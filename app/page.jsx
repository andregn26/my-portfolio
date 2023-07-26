import Image from "next/image";
import profilePic from "@/public/images/profile/ai-profile-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata = {
	title: "AG | My Portfolio",
	description:
		"Welcome to my personal portfolio website! Explore my diverse collection of projects and achievements, showcasing my passion for creativity, innovation, and problem-solving. Discover my skills in web development, design, and more as I share my journey and expertise. Get to know me and my professional background, and find out how I can contribute to your next exciting project. Let's connect and collaborate to bring your ideas to life.",
};

export default function Home() {
	return (
		<>
			<TransitionEffect />
			{/* MAIN CONTAINER */}
			<div className=" flex min-h-[calc(100vh-64px)] items-center justify-center w-full  lg:flex-col ">
				{/* IMAGE CONTAINER */}
				<div className="w-1/2 md:w-full">
					<Image
						priority="true"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
						src={profilePic}
						alt="andre_gregorio_profile_pic"
						className="w-[80%] h-auto lg:hidden md:inline-block md:w-full"
					/>
					<div className="w-[80%] md:w-full lg:hidden">
						<h4 className="text-right text-sm font-normal italic">
							My portrait by the eyes of Henri Rousseau
						</h4>
						<p className="text-right text-xs font-extralight mt-1 italic">
							Created using Midjourney AI
						</p>
					</div>
				</div>
				{/* TEXT CONTAINER */}
				<div className="w-1/2 flex flex-col items-center  self-center lg:w-full">
					<AnimatedText
						text="Journey into the World of a Web Developer."
						className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl !leading-[1.1]"
					/>
					<p className="my-4 text-base font-medium md:text-sm sm:text-xs lg:text-center">
						As a front-end developer, I am committed to turn ideas into beautiful and
						user-friendly web applications. Get to know a little more about me and feel
						free to explore my latest projects, showcasing my expertise in React.js.
					</p>
					<div className="flex items-center self-start mt-2 lg:self-center">
						<Link
							href="/dummy.pdf"
							target="_blank"
							className="flex items-center
							bg-dark hover:bg-light dark:bg-light dark:hover:bg-dark
							text-light hover:text-dark dark:text-black dark:hover:text-light text-lg font-semibold
							p-2.5 px-6 rounded-lg
							border-2 border-solid border-transparent hover:border-dark dark:hover:border-light/50
							md:p-2 md:px-4 md:text-base"
							download={true}>
							Resume
							<div className="w-6 h-auto">
								<LinkArrow className={"ml-1"} />
							</div>
						</Link>
						<Link
							href="mailto:andregn26@gmail.com"
							target="_blank"
							className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base">
							Contact me
						</Link>
					</div>
				</div>
			</div>
			<HireMe />
		</>
	);
}
