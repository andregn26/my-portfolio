"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, schoolLink, place, info }) => {
	const ref = useRef(null);
	return (
		<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
			<LiIcon reference={ref} />
			<motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
					<a href={schoolLink} target="_blank" className="text-primary capitalize">
						{type}&nbsp;
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 text-sm md:text-base">
					{time} | {place}
				</span>
				<p className="w-full text-sm md:text-base">{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
		layoutEffect: false,
	});
	return (
		<div className="mb-32">
			<h2 className="w-full text-center font-bold text-4xl md:text-6xl md:mb-32 mb-16">Education</h2>
			<div ref={ref} className="lg:w-[75%] mx-auto relative w-[90%]">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 h-full md:w-[4px] w-[2px] bg-dark origin-top  md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between md:ml-4 ml-2">
					<Details
						type="Full Stack Web Development"
						time="may 2022"
						place="IronHack Portugal"
						schoolLink="https://www.ironhack.pt"
						info="Relevant courses included introduction to web development, React library, Nodejs for backend, responsive design andintroduction to API's"
					/>
					<Details
						type="Bachelor’s degree in Marketing & Advertising"
						time="jun 2021"
						place="Escola Superior de Comunicação Social"
						schoolLink="www.ironhack.pt"
						info="Relevant courses included Graphic Design, Digital Marketing, Consumer Behaviour, Consumerism and Online Consumers"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
