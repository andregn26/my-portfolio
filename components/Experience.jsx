"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work, emoji }) => {
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
					<span className="inline">{emoji} &nbsp;</span>
					{position}&nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="text-primary dark:text-primaryDark capitalize">
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/90 xs:text-sm">
					{time} | {address}
				</span>
				<p className="font-medium w-full md:text-sm">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
		layoutEffect: false,
	});
	return (
		<div className="my-64">
			{/* TITLE */}
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl ">
				Experience
			</h2>
			{/* CONTENT */}
			<div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 h-full w-[4px] bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
					<Details
						emoji="&#128187;"
						position="Web Developer"
						company="Inovflow"
						time="mar 2023-Present"
						address="Oeiras, Portugal"
						work="As a WordPress developer, I create and maintain websites for diverse clients. My role involves building custom themes, implementing plugins, and ensuring responsive design for optimal user experience. I troubleshoot issues, perform updates, and prioritize security. Collaborating with designers and clients, I deliver functional and visually appealing sites, catering to individual needs and objectives. "
						companyLink="https://www.inovflow.pt/"
					/>
					<Details
						emoji="&#127919;"
						position="Marketing Assistant"
						company="ManpowerGroup Portugal"
						time="jan 2021 - set 2022"
						address="Lisbon, Portugal"
						work="As a Marketing Assistant, I support various marketing initiatives, such as creating content, coordinating events, managing social media, and assisting with market research. My goal is to contribute to the company's brand awareness and help drive business growth through effective marketing strategies."
						companyLink="https://www.manpowergroup.pt"
					/>
					<Details
						emoji="&#127829;"
						position="Pizza Delivery Driver"
						company="Pizza Hut"
						time="set 2018 - mar 2021"
						address="Sintra, Portugal"
						work="While studying, I worked in food distribution companies to pay my course expenses. These years served to develop critical soft skills such as communication, a sense of responsibility and commitment to carrying out tasks"
						companyLink="https://www.pizzahut.pt/"
					/>
					<Details
						emoji="&#127829;"
						position="Pizza Delivery Driver"
						company="Dominos Pizza"
						time="set 2016 - set 2018"
						address="Sintra, Portugal"
						work="While studying, I worked in food distribution companies to pay my course expenses. These years served to develop critical soft skills such as communication, a sense of responsibility and commitment to carrying out tasks"
						companyLink="https://www.dominospizza.pt/"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
