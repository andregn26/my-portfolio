import TransitionEffect from "@/components/old/TransitionEffect";
import React from "react";
import AnimatedText from "@/components/old/AnimatedText";
import Photography from "@/components/old/Photography";

const page = () => {
	return (
		<>
			{/* <TransitionEffect /> */}
			<div className="main-container flex flex-col items-center justify-center mb-64 ">
				<AnimatedText
					fontClass="!text-4xl sm:!text-5xl lg:!text-6xl"
					dimensionsClass="!mt-16 mb-8 md:mb-16"
					text="the world from a different perspective"
				/>

				<Photography />
			</div>
		</>
	);
};

export default page;
