import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { IoLibrary } from "react-icons/io5";
import { AiTwotoneTool } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { BiSolidServer } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { projects } from "@/data";

const ButtonsGroup = ({ project }) => {
	const buttonStyle = `w-full flex items-center justify-center text-lg font-semibold
	p-2.5 px-6 rounded-lg
	md:p-2 md:px-4 md:text-base`;
	return (
		<>
			<div className="flex gap-2 lg:flex-col m-2 ">
				<a
					href={project.githubLink}
					target="_blank"
					className={`button_theme ${buttonStyle}`}>
					See the code
					<div className="w-6 h-auto">
						<LinkArrow className={"ml-1"} />
					</div>
				</a>
				{project.isLive ? (
					<a
						href={project.liveLink}
						target="_blank"
						className={`button_theme ${buttonStyle}`}>
						Go Live
					</a>
				) : null}
			</div>
		</>
	);
};

const ProjectsPage = () => {
	return (
		<>
			<TransitionEffect />
			<div className="w-full mb-16 flex flex-col items-center justify-center">
				<AnimatedText
					className="!mt-16  mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					text="Bringing Ideas to Life!"
				/>
				<div className="grid grid-cols-12 gap-12 md:gap-0 md:gap-y-12 w-full">
					{projects.map((project, id) => {
						const projectStack = project.stack;
						return (
							<div
								key={id}
								className="flex flex-col justify-between col-span-4 lg:col-span-6 md:col-span-12 w-full rounded-md shadow-md overflow-hidden border border-solid border-transparent dark:border-light/50 ">
								<div>
									<img className="w-full h-auto" src={project.image} alt="" />
									<div className=" p-6 ">
										<h3 className="font-bold text-lg mb-4">{project.name}</h3>
										<p className="text-sm w-full text-dark/80 dark:text-light/80">
											{project.punchline}
										</p>
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
											{projectStack?.buildTool && (
												<p className=" flex items-center">
													<span className=" mr-2">
														<AiTwotoneTool />
													</span>
													{projectStack.buildTool}
												</p>
											)}
											{projectStack?.styling && (
												<p className=" flex items-center">
													<span className=" mr-2">
														<FaPaintBrush />
													</span>
													{projectStack.styling
														.slice(0, -1)
														.map((other) => (
															<span>{other},&nbsp;</span>
														))}
													{projectStack.styling.slice(-1).map((other) => (
														<span>{other}</span>
													))}
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
													<span className=" mr-2">
														<BiSolidServer />
													</span>
													{projectStack.backend}
												</p>
											)}
											{projectStack?.database && (
												<p className=" flex items-center">
													<span className=" mr-2">
														<FaDatabase />
													</span>{" "}
													{projectStack.database}
												</p>
											)}
											{projectStack?.others && (
												<p className=" flex items-center">
													<span className=" mr-2">
														<MdMoreHoriz aria-label="other technology" />
													</span>
													{projectStack.others
														.slice(0, -1)
														.map((other) => (
															<span>{other},&nbsp;</span>
														))}
													{projectStack.others.slice(-1).map((other) => (
														<span>{other}</span>
													))}
												</p>
											)}
										</div>
									</div>
								</div>
								<ButtonsGroup project={project} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
