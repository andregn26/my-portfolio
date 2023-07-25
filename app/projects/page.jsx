import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { IoLibrary } from "react-icons/io5";
import { AiTwotoneTool } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { LinkArrow } from "@/components/Icons";

const projects = [
	{
		name: "SoulDance Studio",
		description:
			"The construction of the SoulDance website involved a comprehensive and efficient development process, employing modern web technologies to deliver a captivating user experience. Initially, thorough planning and wireframing were carried out to conceptualize the site's layout and features. NextJs was chosen as the framework due to its server-side rendering capabilities and seamless integration with React, which allowed for fast-loading, SEO-friendly pages. React, being the primary library, facilitated the creation of interactive and dynamic components that enhanced user engagement. Tailwind CSS was selected for styling, enabling a responsive and visually appealing design, with the utility-first approach streamlining the development process. For the backend and database, Sanity was employed, empowering the team to manage content effortlessly and efficiently. Overall, this combination of React, NextJs, Tailwind CSS, and Sanity provided the foundation for a modern, responsive, and user-friendly website for SoulDance, catering to their unique needs and delighting visitors with a seamless dance experience.",
		image: "/images/projects/agency-website-cover-image.jpg",
		stack: {
			library: "React.js",
			framework: "Next.js",
			styling: "Tailwind",
			cms: "Sanity",
			database: null,
			backend: null,
			others: ["Photoshop", "Illustrator"],
		},
		githubLink: "",
	},
	{
		name: "nome",
		description:
			"Lorem ipsum dolor sit amet. Et molestias voluptas sed nemo mollitia non galisum sunt a eius earum qui similique eligendi eum optio iure et optio molestias. Est obcaecati numquam sed dolorum suscipit et autem facilis et quibusdam voluptas ea cumque pariatur. Ea aliquam dolorum non exercitationem aspernatur est voluptatibus dolor.",
		image: "/images/projects/agency-website-cover-image.jpg",
		stack: {
			library: "React.js",
			framework: "Next.js",
			styling: "Tailwind",
			cms: "Sanity",
			database: null,
			backend: null,
			others: ["Lightroom", "Photoshop", "Illustrator"],
		},
		githubLink: "",
	},
	{
		name: "nome",
		description:
			"Lorem ipsum dolor sit amet. Et molestias voluptas sed nemo mollitia non galisum sunt a eius earum qui similique eligendi eum optio iure et optio molestias. Est obcaecati numquam sed dolorum suscipit et autem facilis et quibusdam voluptas ea cumque pariatur. Ea aliquam dolorum non exercitationem aspernatur est voluptatibus dolor.",
		image: "/images/projects/agency-website-cover-image.jpg",
		stack: {
			library: "React.js",
			framework: "Next.js",
			styling: "Tailwind",
			cms: "Sanity",
			database: null,
			backend: null,
			others: ["Lightroom", "Photoshop", "Illustrator"],
		},
		githubLink: "",
	},
	{
		name: "nome",
		description:
			"Lorem ipsum dolor sit amet. Et molestias voluptas sed nemo mollitia non galisum sunt a eius earum qui similique eligendi eum optio iure et optio molestias. Est obcaecati numquam sed dolorum suscipit et autem facilis et quibusdam voluptas ea cumque pariatur. Ea aliquam dolorum non exercitationem aspernatur est voluptatibus dolor.",
		image: "/images/projects/agency-website-cover-image.jpg",
		stack: {
			library: "React.js",
			framework: "Next.js",
			styling: "Tailwind",
			cms: "Sanity",
			database: null,
			backend: null,
			others: ["Lightroom", "Photoshop", "Illustrator"],
		},
		githubLink: "",
	},
];

const ProjectsPage = () => {
	return (
		<>
			<div className="w-full mb-16 flex flex-col items-center justify-center">
				<AnimatedText
					className="!mt-16  mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					text="Bringing Ideas to Life!"
				/>
				<div className="grid grid-cols-12 gap-12 md:gap-0 w-full">
					{projects.map((project, id) => {
						const projectStack = project.stack;
						return (
							<div
								key={id}
								className="col-span-4 md:col-span-12 w-full rounded-md shadow-md overflow-hidden border border-solid border-transparent dark:border-light ">
								<img className="w-full" src={project.image} alt="" />
								<div className="p-6">
									<h3 className="font-bold text-lg mb-4">{project.name}</h3>
									<p className="text-sm w-full">{project.description}</p>
									<div className=" text-sm mt-6 flex flex-col gap-2">
										{projectStack?.library && (
											<p className=" flex items-center">
												<span className=" mr-2">
													<IoLibrary />
												</span>
												{projectStack.library}
											</p>
										)}
										{projectStack?.framework && (
											<p className=" flex items-center">
												<span className=" mr-2">
													<AiTwotoneTool />
												</span>
												{projectStack.framework}
											</p>
										)}
										{projectStack?.styling && (
											<p className=" flex items-center">
												<span className=" mr-2">
													<FaPaintBrush />
												</span>
												{projectStack.styling}
											</p>
										)}
										{projectStack?.cms && (
											<p className=" flex items-center">
												<span className=" mr-2">
													<MdContentPasteSearch />
												</span>{" "}
												{projectStack.cms}
											</p>
										)}
										{projectStack?.backend && (
											<p className=" flex items-center">
												<span className=" mr-2">icon</span>{" "}
												{projectStack.backend}
											</p>
										)}
										{projectStack?.others && (
											<p className=" flex items-center">
												<span className=" mr-2">
													<MdMoreHoriz aria-label="other technology" />
												</span>
												{projectStack.others.slice(0, -1).map((other) => (
													<span>{other},&nbsp;</span>
												))}
												{projectStack.others.slice(-1).map((other) => (
													<span>{other}</span>
												))}
											</p>
										)}
									</div>
									<a
										href={project.githubLink}
										target="_blank"
										className="flex items-center justify-center mt-6
							bg-dark hover:bg-light dark:bg-light dark:hover:bg-dark
							text-light hover:text-dark dark:text-black dark:hover:text-light text-lg font-semibold
							p-2.5 px-6 rounded-lg
							border-2 border-solid border-transparent hover:border-dark dark:hover:border-light
							md:p-2 md:px-4 md:text-base">
										See the code{" "}
										<div className="w-6 h-auto">
											<LinkArrow className={"ml-1"} />
										</div>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
