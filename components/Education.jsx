"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, schoolLink, place, info }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					<a
						href={schoolLink}
						target="_blank"
						className="text-primary dark:text-primaryDark capitalize">
						{type}&nbsp;
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/90 xs:text-sm">
					{time} | {place}
				</span>
				<p className="font-medium w-full md:text-sm">{info}</p>
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
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl">
				Education
			</h2>
			<div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 h-full w-[4px] bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2016-2020"
						place="Massachusetts Institute Of Technology (MIT)"
						schoolLink="www.ironhack.pt"
						info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
					/>
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2016-2020"
						place="Massachusetts Institute Of Technology (MIT)"
						schoolLink="www.ironhack.pt"
						info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
