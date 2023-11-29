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
			{/* <TransitionEffect /> */}
			{/* MAIN CONTAINER */}
			<div className="main-container flex gap-12 xl:gap-24 min-h-[calc(100vh-64px)] items-center justify-center ">
				{/* IMAGE CONTAINER */}
				<div className="hidden lg:flex w-1/2 max-w-[500px] flex-col items-center">
					<Image
						priority="true"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
						src={profilePic}
						alt="andre_gregorio_profile_pic"
						className="h-auto md:inline-block md:w-full"
					/>
					<div className="w-[80%] md:w-full md:inline-block">
						<h4 className="text-right text-sm font-normal italic">
							My portrait by the eyes of Henri Rousseau
						</h4>
						<p className="text-right text-xs font-extralight mt-1 italic">
							Created using Midjourney AI
						</p>
					</div>
				</div>
				{/* TEXT CONTAINER */}
				<div className=" flex flex-col items-center w-full md:w-1/2  self-center">
					<AnimatedText
						fontClass=" lg:!text-left !text-4xl md:!text-5xl xl:!text-6xl !leading-[1.1]"
						dimensionsClass=""
						text="Journey into the World of a Web Developer."
					/>
					<p className="my-4 font-medium text-xs md:text-base text-center lg:text-left">
						As a front-end developer, I am committed to turn ideas into beautiful and user-friendly web
						applications. Get to know a little more about me and feel free to explore my latest
						projects, showcasing my expertise in React.js.
					</p>
					<div className="flex  items-center  mt-2 self-center lg:self-start">
						<Link
							href="cv\CV-andre-gregorio.pdf"
							target="_blank"
							className="flex items-center
							bg-dark hover:bg-light text-light hover:text-dark md:text-lg font-semibold
							md:p-2.5 md:px-6 rounded-lg	border-2 border-solid border-transparent hover:border-dark	p-2 px-4 text-base"
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
