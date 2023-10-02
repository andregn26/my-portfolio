"use client";

import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import TransitionEffect from "@/components/TransitionEffect";
import Header from "./Header";
import { HeaderV2 } from "./Header-v2";

const About = () => {
	return (
		<>
			<TransitionEffect />
			<AnimatedText
				fontClass="lg:!text-6xl sm:!text-5xl xs:!text-4xl"
				dimensionsClass="!mt-16  mb-16 sm:mb-8"
				text="Passion driven by purpose"
			/>
			<Header />
			<Skills />
			<Experience />
			<Education />
			{/* <Hobbies /> */}
		</>
	);
};

export default About;
