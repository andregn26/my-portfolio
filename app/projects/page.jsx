import AnimatedText from "@/components/AnimatedText";
import React from "react";

export const metadata = {
	title: "AG | Projects",
	description: "E.",
};

const Projects = () => {
	return (
		<>
			<div className="w-full mb-16 flex flex-col items-center justify-center">
				<AnimatedText text="Imagination Trumps Knowledge!" />
				<div className="grid grid-cols-12 gap-24"></div>
			</div>
		</>
	);
};

export default Projects;
