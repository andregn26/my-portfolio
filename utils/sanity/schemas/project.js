const project = {
	name: "project",
	title: "Projetos",
	type: "document",
	fields: [
		//NOTE MAIN MODALITY NAME
		{
			name: "name",
			title: "Nome do projeto",
			type: "string",
		},
		//NOTE SLUG
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		},
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
		{
			name: "shortDescription",
			title: "Descrição curta",
			type: "text",
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
	],
};

export default project;
