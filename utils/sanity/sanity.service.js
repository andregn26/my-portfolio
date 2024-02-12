import { groq } from "next-sanity";
import { client } from "./client";

export async function getAllProjects() {
	return client.fetch(groq`*[_type == "project"] {
		_id,
		name,
		"slug": slug.current,
		links,
		shortDescription,
		"image": image.asset->url,
	  }`);
}

export async function getProject(slug) {
	return client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
			_id,
			name,
			"slug": slug.current,
			links,
			image,
			longDescription,
			stack,
			features,
			motivation
	  }`,
		{ slug }
	);
}
