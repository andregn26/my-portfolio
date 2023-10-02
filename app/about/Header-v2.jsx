import profilePic from "@/public/images/profile/profile-pic-1.jpg";
import Image from "next/image";

const ProfilePic = () => {
	return (
		<div className="border-red-2 w-[100%] flex justify-center flex-shrink-0 mt-12 sm:mt-0">
			<div className="relative w-full h-full lg:w-36 lg:h-36 flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-md text-xl lg:text-2xl ring-4 ring-white dark:ring-0 shadow-2xl z-0">
				<Image alt="Avatar" src={profilePic} fill className="object-cover" priority />
			</div>
		</div>
	);
};

export const HeaderV2 = () => {
	const ProfIntro = () => {
		return (
			<>
				<h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
					<span>Dony Herrera</span>
					{/* <VerifyIcon className="ml-2" iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" /> */}
				</h2>
				<div className="col-span-4 w-full md:col-span-8 flex flex-col items-start justify-start md:order-2">
					<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
						Biography
					</h2>
					<p className="font-medium">
						Hi, I'm André, a web developer and curious self-taught UI/UX designer
						motivated by creating beautiful, functional and user-centric digital
						experiences. Being passionate about art, I am very influenced by the rules
						of composition, color and contrast that I try to bring to my projects.
					</p>
					<p className="font-medium mt-2">
						The two years I worked in Marketing helped me combine the visual component
						with strategic thinking capable of understanding the communication needs of
						brands.
					</p>
					<p className="font-medium mt-2">
						I look at web development as a toolbox that allows me to bring all my
						passions and interests together and create something meaningful for clients
						and the community.
					</p>
					<div>
						<p className="font-medium mt-2  relative">
							Scroll down and get to know a little more about me!
						</p>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="flex flex-col">
			<ProfilePic />
			<div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
				<div className="max-w-screen-sm space-y-3.5">
					<ProfIntro />
					<a
						href="#"
						className="flex items-center text-xs font-medium space-x-2.5 rtl:space-x-reverse cursor-pointer text-neutral-500 dark:text-neutral-400 truncate">
						{/* <GlobeAltIcon className="flex-shrink-0 w-4 h-4" /> */}
						<span className="text-neutral-700 dark:text-neutral-300 truncate">
							https://example.com/me
						</span>
					</a>
					<nav
						className={`nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300`}></nav>
				</div>
			</div>
		</div>
	);
};
