import { getProject } from "@/utils/sanity/sanity.service";
import React from "react";

const Project = async ({ params }) => {
	const slug = params.project;
	const project = await getProject(slug);
	console.log("🚀 ~ Project ~ project:", project);
	return <div>page</div>;
};

export default Project;
