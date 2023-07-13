import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "@/public/images/profile/developer-pic-2.jpg";

export const metadata = {
	title: "AG | About Me",
	description:
		"Explore my professional journey, skills, and hobbies. Discover my stack of technologies and get to know me better as a developer. Dive into my experience, projects, and passions. Let's connect and collaborate for future opportunities.",
};

const About = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full">
				<AnimatedText className="mb-16" text="Passion Fuels Purpose!" />
				<div className="grid w-full grid-cols-8 gap-16">
					<div className="col-span-3 flex flex-col items-start justify-start">
						<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">
							Biography
						</h2>
						<p className="font-medium">
							Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for
							creating beautiful, functional, and user-centered digital experiences.
							With 4 years of experience in the field. I am always looking for new and
							innovative ways to bring my clients' visions to life.
						</p>
						<p className="font-medium">
							I believe that design is about more than just making things look pretty
							– it's about solving problems and creating intuitive, enjoyable
							experiences for users.
						</p>
						<p className="font-medium">
							Whether I'm working on a website, mobile app, or other digital product,
							I bring my commitment to design excellence and user-centered thinking to
							every project I work on. I look forward to the opportunity to bring my
							skills and passion to your next project.
						</p>
					</div>
					<div>
						<Image src={profilePic} className="w-full h-auto rounded-2xl" />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
