import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Photography from "@/components/Photography";

const page = () => {
	return (
		<>
			<TransitionEffect />
			<div className="flex flex-col items-center justify-center w-full mb-64 ">
				<AnimatedText
					className="!mt-16  mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					text="the world from a different perspective"
				/>
				<Photography />
			</div>
		</>
	);
};

export default page;
