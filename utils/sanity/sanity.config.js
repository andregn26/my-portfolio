// sanity.config.jsx
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas";

export default defineConfig({
	basePath: "/admin",
	title: "My Portfolio Backoffice",
	projectId: "6guauk8q",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: schemas,
	},
});
