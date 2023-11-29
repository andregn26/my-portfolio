"use client";

import AnimatedText from "@/components/AnimatedText";
import React, { useState, useCallback } from "react";
import { LinkArrow } from "@/components/Icons";
import { projects } from "@/data";
import { FaGithub } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const ButtonsGroup = ({ project }) => {
	const buttonStyle = `w-full flex items-center justify-center text-lg font-semibold
	p-2.5 px-6 rounded-lg
	md:p-2 md:px-4 md:text-base`;
	return (
		<>
			<div className="flex gap-2 lg:flex-col m-2 ">
				<a href={project.githubLink} target="_blank" className={`button_theme ${buttonStyle}`}>
					See the code
					<div className="w-6 h-auto">
						<LinkArrow className={"ml-1"} />
					</div>
				</a>
				{project.isLive ? (
					<a href={project.liveLink} target="_blank" className={`button_theme ${buttonStyle}`}>
						Go Live
					</a>
				) : null}
			</div>
		</>
	);
};

const ProjectsPage = () => {
	const [tags, setTags] = useState([]);

	const removeTag = useCallback(
		(tagName) => () => {
			console.log("remove tag!");
			const tagsFiltered = tags.filter((tag) => tag !== tagName);
			setTags(tagsFiltered);
		},
		[tags]
	);

	const addTag = useCallback(
		(tag) => () => {
			console.log("add tag!");
			if (!tags.includes(tag)) {
				return setTags((prevTags) => [...prevTags, tag]);
			}
		},
		[tags]
	);

	const matchTags = (current, target) => {
		return target.every((tag) => current.includes(tag));
	};

	return (
		<>
			<div className="main-container mb-16 flex flex-col items-center justify-center">
				<AnimatedText
					fontClass="lg:!text-6xl md:!text-5xl !text-4xl"
					dimensionsClass="!mt-16 mb-16 sm:mb-8"
					text="Bringing Ideas to Life!"
				/>

				<div className="flex gap-2 mb-8">
					{tags.length > 0 ? (
						tags.map((tag, index) => {
							return (
								<button
									onClick={removeTag(tag)}
									key={index}
									className="bg-orange-600 text-white py-0.5 px-2 rounded-md text-xs font-semibold flex items-center ">
									{tag}
									<span className="inline-block">
										<IoIosClose size={18} />
									</span>
								</button>
							);
						})
					) : (
						<div className="italic">There are no tags selected</div>
					)}
				</div>

				<div className="flex flex-col gap-4 md:grid md:grid-cols-2  w-full ">
					{projects
						.filter((proj) => matchTags(proj.tags, tags))
						.map((project) => {
							const { id, name, description, githubLink, isLive, liveLink, tags } = project;
							return (
								<div
									key={`project-${id}`}
									className="max-w-sm w-full lg:max-w-lg lg:flex shadow-xl bg-zinc-50 rounded-md">
									<div className="p-6 w-full flex flex-col justify-between leading-normal">
										<div className="flex justify-between ">
											<p className="text-gray-900 font-bold text-xl mb-2">
												{name}
											</p>
											<div className="flex gap-2">
												<a href={githubLink} target="_blank">
													<FaGithub size={24} />
												</a>
												{isLive && (
													<a href={liveLink} target="_blank">
														<HiOutlineStatusOnline
															size={24}
														/>
													</a>
												)}
											</div>
										</div>

										<p className="text-gray-700 text-base">{description}</p>

										<div className="flex flex-wrap gap-2 mt-4">
											{tags.map((tag, index) => {
												return (
													<button
														onClick={addTag(tag)}
														key={`tag-${index}`}
														className="bg-orange-400 hover:bg-orange-600 hover:text-light py-0.5 px-2 rounded-md text-xs font-semibold">
														{tag}
													</button>
												);
											})}
										</div>
									</div>
								</div>
							);
						})}
				</div>

				{/* <div className="grid grid-cols-12 gap-12 md:gap-0 md:gap-y-12 w-full">
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
				</div> */}
			</div>
		</>
	);
};

export default ProjectsPage;
