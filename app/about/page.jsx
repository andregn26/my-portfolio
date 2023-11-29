"use client";

import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Header from "./Header";

const About = () => {
	return (
		<>
			{/* <TransitionEffect /> */}
			<AnimatedText
				fontClass="!text-4xl sm:!text-5xl lg:!text-6xl"
				dimensionsClass="!mt-16 mb-8 sm:mb-16"
				text="Passion driven by purpose"
			/>
			<Header />
			{/* <Skills /> */}
			<Experience />
			<Education />
		</>
	);
};

export default About;
