const project = {
	name: "project",
	title: "Projetos",
	type: "document",
	fields: [
		//NOTE Name
		{
			name: "name",
			title: "Nome do projeto",
			type: "string",
		},
		//NOTE Slug
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		},
		//NOTE Main Image
		{
			name: "image",
			title: "Imagem Principal",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Descritivo",
					type: "string",
				},
			],
		},
		//NOTE Links
		{
			name: "links",
			title: "Links",
			type: "object",
			fields: [
				{
					title: "Github",
					name: "github",
					type: "string",
				},
				{
					title: "Live Preview",
					name: "live",
					type: "string",
				},
			],
		},
		//NOTE Short Description
		{
			name: "shortDescription",
			title: "Descrição Curta",
			type: "text",
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
		//NOTE LinkedIn Description
		{
			name: "linkedinDescription",
			title: "Descrição LinkedIn",
			type: "text",
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
		//NOTE Github Description
		{
			name: "longDescription",
			title: "Descrição Longa",
			type: "array",
			of: [{ type: "block" }],
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
		//NOTE Motivation
		{
			name: "motivation",
			title: "Motivação",
			type: "array",
			of: [{ type: "block" }],
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
		//NOTE Stack
		{
			name: "stack",
			title: "Stack",
			type: "object",
			fields: [
				{
					name: "client",
					title: "Client Stack",
					type: "array",
					of: [{ type: "string" }],
				},
				{
					name: "server",
					title: "Server Stack",
					type: "array",
					of: [{ type: "string" }],
				},
			],
		},
		//NOTE Features
		{
			name: "features",
			title: "Features",
			type: "array",
			of: [{ type: "block" }],
		},
		//NOTE Next Features
		{
			name: "nextFeatures",
			title: "Next Features",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default project;
