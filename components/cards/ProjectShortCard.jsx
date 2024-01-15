import { useImageUrlBuilder } from "@/hooks/useImageUrlBuilder";
import Image from "next/image";
import React from "react";
import { GithubIcon } from "../old/Icons";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Link from "next/link";

const ProjectShortCard = ({ project }) => {
	const {
		_id,
		name,
		slug,
		links: { github, live },
		shortDescription,
		image,
	} = project;
	return (
		<div className="bg-secondary/40 rounded-lg border border-solid border-white max-w-[300px] h-[300px] flex flex-col ">
			<Link href={slug}>
				<figure className="relative w-full pt-4 px-4  ">
					<Image
						src={useImageUrlBuilder(image).url()}
						height={200}
						width={300}
						className="object-contain rounded-md"
					/>
				</figure>
			</Link>
			<div className="px-4 pt-6 pb-4">
				<div className="flex items-center justify-between">
					<Link href={slug}>
						<h2 className="text-lg font-bold text-gray-800">{name}</h2>
					</Link>

					<div className="flex gap-3 items-center">
						<a href={github} target="_blank">
							<GithubIcon className={"!w-4 !h-4"} />
						</a>
						<a href={live} target="_blank">
							<HiOutlineStatusOnline />
						</a>
					</div>
				</div>

				<p className="mt-2 text-xs text-gray-700">{shortDescription}</p>
			</div>
		</div>
	);
};

export default ProjectShortCard;
