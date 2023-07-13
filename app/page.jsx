import Image from "next/image";
import Head from "next/head";
import profilePic from "@/public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export const metadata = {
	title: "AG | My Portfolio",
	description:
		"Welcome to my personal portfolio website! Explore my diverse collection of projects and achievements, showcasing my passion for creativity, innovation, and problem-solving. Discover my skills in web development, design, and more as I share my journey and expertise. Get to know me and my professional background, and find out how I can contribute to your next exciting project. Let's connect and collaborate to bring your ideas to life.",
};

export default function Home() {
	return (
		<>
			<div className="flex items-center w-full">
				<div className="w-1/2">
					<Image
						src={profilePic}
						alt="andre_gregorio_profile_pic"
						className="w-full h-auto"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center self-center">
					<AnimatedText
						text="Turning Vision Into Reality With Code And Design."
						className="!text-6xl !text-left"
					/>
					<p className="my-4 text-base font-medium">
						As a skilled full-stack developer, I am dedicated to turning ideas into
						innovative web applications. Explore my latest projects and articles,
						showcasing my expertise in React.js and web development.
					</p>
					<div className="flex items-center self-start mt-2">
						<Link
							href="/dummy.pdf"
							target="_blank"
							className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
							download={true}>
							Resume <LinkArrow className={"w-6 ml-1"} />
						</Link>
						<Link
							href="mailto:andregn26@gmail.com"
							target="_blank"
							className="ml-4 text-lg font-medium capitalize text-dark underline">
							Contact me
						</Link>
					</div>
				</div>
			</div>
			<HireMe />
		</>
	);
}
