import PageStructure from "@/components/PageStructure";
import ScrollBtn from "@/components/buttons/ScrollBtn";
import { getAllProjects } from "@/utils/sanity/sanity.service";
import GridOfThree from "@/components/grids/GridOfThree";
import AnimatedHero from "@/components/AnimatedHero";

export const metadata = {
	title: "AG | My Portfolio",
	description: "Welcome to my personal portfolio website! Explore my diverse collection of projects and achievements.",
};

export const revalidate = 60; // revalidate this page every 60 seconds

const Home = async () => {
	const allProjects = await getAllProjects();
	// console.log("🚀 ~ Home ~ allProjects:", allProjects);
	return (
		<>
			<PageStructure className={"w-full"}>
				<section className="flex flex-col items-center justify-end h-screen bg-secondary/30 px-4 md:px-8 lg:px-16">
					<AnimatedHero />
					<ScrollBtn />
				</section>
				<section
					id="projects"
					className="flex flex-col items-center justify-start min-h-screen w-full px-4 md:px-12 lg:px-16">
					<div className="mt-24 max-w-screen-lg w-full px-4 mx-auto">
						<div className="w-full mx-auto lg:mx-0 max-w-md">
							<h2 className="font-bold text-3xl text-center lg:text-left w-full mx-auto lg:mx-0">
								Projects
							</h2>
							<p className="mt-1 text-lg text-gray-800 text-center lg:text-left w-full mx-auto">
								Discover my top projects
							</p>
						</div>
						<div className="flex fçex-col justify-center lg:justify-start">
							<GridOfThree data={allProjects} />
						</div>
					</div>
				</section>
			</PageStructure>
		</>
	);
};

export default Home;
