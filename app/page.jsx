import Image from "next/image";
import profilePic from "@/public/images/profile/profile_real.webp";
import AnimatedText from "@/components/old/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/old/Icons";
import HireMe from "@/components/old/HireMe";
import TransitionEffect from "@/components/old/TransitionEffect";

import PageStructure from "@/components/PageStructure";
import { ChevronDown } from "@/components/icons/Arrows";
import ScrollBtn from "@/components/buttons/ScrollBtn";

// export const metadata = {
// 	title: "AG | My Portfolio",
// 	description:
// 		"Welcome to my personal portfolio website! Explore my diverse collection of projects and achievements, showcasing my passion for creativity, innovation, and problem-solving. Discover my skills in web development, design, and more as I share my journey and expertise. Get to know me and my professional background, and find out how I can contribute to your next exciting project. Let's connect and collaborate to bring your ideas to life.",
// };

export default function Home() {
	return (
		<>
			<PageStructure className={"mx-4 md:mx-8 lg:mx-10 w-full"}>
				<section className="flex flex-col items-center justify-end h-screen bg-secondary/30">
					<div className="h-full flex flex-col items-center justify-center">
						<figure className="relative w-36 h-36 rounded-full shadow-lg overflow-hidden border-4 border-solid border-primary">
							<Image src={profilePic} fill className="object-cover " />
						</figure>
						<h1 className="mt-4 lg:mt-6 font-bold text-center text-4xl">Hey, I'm André!</h1>
						<h2 className="mt-1 lg:mt-2 font-semilight text-center text-2xl">
							I design and build apps, and everything that comes with it.
						</h2>
						<div className="gap-4 flex mt-6">
							<button>Github</button>
							<button>LinkedIn</button>
						</div>
					</div>
					<ScrollBtn />
				</section>
				<section id="projects" className="flex flex-col items-center justify-start h-screen w-full">
					<div className="mt-24 max-w-screen-lg w-full">
						<h2 className="font-bold text-3xl">Projects</h2>
						<p className="mt-1 max-w-md">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nulla pariatur
							in odio accusamus sunt id velit ad natus, rerum facilis perspiciatis nostrum
							voluptas vero impedit mollitia minima laudantium?
						</p>
					</div>
				</section>
			</PageStructure>
		</>
	);
}
