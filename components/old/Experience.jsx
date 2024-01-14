"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work, emoji }) => {
	const ref = useRef(null);
	return (
		<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
			<LiIcon reference={ref} />
			<motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
					<span className="inline">{emoji} &nbsp;</span>
					{position}&nbsp;
					<a href={companyLink} target="_blank" className="text-primary capitalize">
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 text-sm md:text-base">
					{time} | {address}
				</span>
				<p className="w-full text-sm md:text-base">{work}</p>
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
		<div className="my-32">
			{/* TITLE */}
			<h2 className="w-full text-center font-bold text-4xl md:text-6xl md:mb-32 mb-16">Experience</h2>
			{/* CONTENT */}
			<div ref={ref} className="lg:w-[75%] mx-auto relative w-[90%]">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 h-full md:w-[4px] w-[2px] bg-dark origin-top  md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between md:ml-4 ml-2 ">
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
						company="Manpower Group Portugal"
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
						work={
							"I managed work schedules around college classes and exams, showcasing exceptional adaptability. I consistently met tight delivery deadlines, even during peak hours, proving my ability to thrive under pressure. Regardless of the weather conditions, I ensured prompt and safe deliveries, adapting seamlessly to all circumstances. When faced with challenging customers, I maintained a positive attitude and handled issues calmly and professionally. I operated delivery vehicles safely, boasting a clean driving record as my top priority."
						}
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
