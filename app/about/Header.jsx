import profilePic from "@/public/images/profile/profile-pic-1.jpg";
import Image from "next/image";

export const Header = () => {
	const ProfilePic = () => {
		return (
			<div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
				<div className="relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
					<Image alt="Avatar" src={profilePic} fill className="object-cover" priority />
				</div>
			</div>
		);
	};

	const ProfIntro = () => {
		return (
			<>
				<h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
					<span>Dony Herrera</span>
					{/* <VerifyIcon className="ml-2" iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" /> */}
				</h2>
				<span className="block text-sm text-neutral-500 dark:text-neutral-400">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure
					quibusdam asperiores numquam quae animi assumenda necessitatibus consectetur.
				</span>
			</>
		);
	};

	return (
		<div className="border_green-2  relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
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

export default Header;

{
	/* IMAGE */
}
<div className="col-span-4 overflow-hidden w-full-4 md:col-span-8 relative h-max   md:order-1 ">
	<Image
		src={profilePic}
		priority="true"
		sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
		className="w-full h-auto rounded-2xl"
		alt="my-profile-pic"
	/>
</div>;
