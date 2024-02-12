import PageStructure from "@/components/PageStructure";
import { getProject } from "@/utils/sanity/sanity.service";
import { GithubIcon } from "@/components/old/Icons";
import { HiOutlineStatusOnline } from "react-icons/hi";
import React from "react";
import Image from "next/image";
import { useImageUrlBuilder } from "@/hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // revalidate this page every 60 seconds

export const metadata = {
	title: "AG | Projects",
	description: "Welcome to my personal portfolio website! Explore my diverse collection of projects and achievements.",
};
const FeaturesPortableTextComponents = {
	list: {
		bullet: ({ children }) => <ul className="text-base">{children}</ul>,
	},
	block: {
		h3: ({ children }) => <h3 className="tracking-wide text-xl font-bold">{children}</h3>,
		h4: ({ children }) => <h4 className="tracking-wide font-semibold ">{children}</h4>,
	},
	marks: {
		strong: ({ children }) => <strong className="text-accent-content">{children}</strong>,
	},
};

const FeaturesPortableText = ({ value }) => {
	return <PortableText value={value} components={FeaturesPortableTextComponents} />;
};

const MotivationPortableTextComponents = {
	block: {
		h3: ({ children }) => <h3 className="tracking-wide text-xl font-bold">{children}</h3>,
		normal: ({ children }) => <p className="font-semibold ">{children}</p>,
	},
};

const MotivationPortableText = ({ value }) => {
	return <PortableText value={value} components={MotivationPortableTextComponents} />;
};

const LongDescriptionPortableTextComponents = {
	block: {
		normal: ({ children }) => <p className="italic text-base">{children}</p>,
	},
};

const LongDescriptionPortableText = ({ value }) => {
	return <PortableText value={value} components={LongDescriptionPortableTextComponents} />;
};

const Project = async ({ params }) => {
	const slug = params.project;
	const project = await getProject(slug);
	const {
		_id,
		name,
		links: { github, live },
		image,
		longDescription,
		stack,
		features,
		motivation,
	} = project;

	console.log("🚀 ~ Project ~ project:", project);
	return (
		<PageStructure className={"min-h-screen w-full !justify-start"}>
			<div className="bg-secondary/30 w-full min-h-72 pt-24 flex flex-col justify-center items-center px-8">
				<h1 className="text-4xl font-bold">{name}</h1>
				<div className="flex flex-col gap-2 justify-center items-center my-6">
					<div className="flex gap-2 flex-wrap justify-center">
						{stack.server.map((tech, index) => (
							<span key={`server-stack-${index}`} className="badge text-gray-50 badge-accent text-xs font-semibold">
								{tech}
							</span>
						))}
					</div>

					<div className="flex gap-2 flex-wrap justify-center">
						{stack.client.map((tech, index) => (
							<span key={`client-stack-${index}`} className="badge text-gray-50 badge-accent text-xs font-semibold">
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="gap-4 flex mb-6">
					<a className="btn btn-sm text-xs" href={github} target="_blank">
						<GithubIcon className={"!w-4 !h-4"} />
						Github
					</a>
					{live ? (
						<a className="btn btn-sm text-xs" href={live} target="_blank">
							<HiOutlineStatusOnline className={"!w-4 !h-4 "} />
							Preview
						</a>
					) : null}
				</div>
			</div>
			<div className="prose max-w-screen-sm mx-auto px-8 my-6">
				<LongDescriptionPortableText value={longDescription} />
				<MotivationPortableText value={motivation} />
				<FeaturesPortableText value={features} />
			</div>
		</PageStructure>
	);
};

export default Project;
