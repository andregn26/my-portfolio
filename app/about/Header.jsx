import profilePic from "@/public/images/profile/profile_real.webp";
import Image from "next/image";
import { PiCastleTurretFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { PiStrategyFill } from "react-icons/pi";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";

const HeaderText = ({ containerClass }) => {
	return (
		<>
			<div className={`${containerClass}`}>
				<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">Biography</h2>
				<p className="font-medium">
					Hi, I'm André, a web developer and curious self-taught UI/UX designer motivated by creating
					beautiful, functional and user-centric digital experiences. Being passionate about art, I am very
					influenced by the rules of composition, color and contrast that I try to bring to my projects.
				</p>
				<p className="font-medium mt-2">
					The two years I worked in Marketing helped me combine the visual component with strategic thinking
					capable of understanding the communication needs of brands.
				</p>
				<p className="font-medium mt-2">
					I look at web development as a toolbox that allows me to bring all my passions and interests
					together and create something meaningful for clients and the community.
				</p>
				<div>
					<p className="font-medium mt-2 relative">Scroll down and get to know a little more about me!</p>
				</div>
			</div>
		</>
	);
};

const HeaderImage = ({ containerClass }) => {
	return (
		<div className={`${containerClass}`}>
			<Image src={profilePic} priority="true" className="object-cover" alt="my-profile-pic" fill />
		</div>
	);
};

const HeaderInterests = ({ containerClass }) => {
	const iconStyles = "w-full h-auto p-4 text-dark hover:text-primary";

	const Card = ({ interest, icon }) => {
		return (
			<>
				<div
					className={`flex justify-start items-center gap-3 mx-auto w-full shadow-md shadow-neutral-800/10 border border-solid border-transparent dark:border-light/50 bg-white dark:bg-dark rounded-md`}>
					<div className="w-14 h-14  flex items-center justify-center">{icon}</div>
					<h4>{interest}</h4>
				</div>
			</>
		);
	};
	return (
		<div className={`${containerClass}`}>
			<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Interests</h2>
			<Card interest="History" icon={<PiCastleTurretFill className={`${iconStyles}`} />} />
			<Card interest="Photography" icon={<MdPhotoCamera className={`${iconStyles}`} />} />
			<Card interest="Design" icon={<MdDesignServices className={`${iconStyles}`} />} />
			<Card interest="Marketing" icon={<PiStrategyFill className={`${iconStyles}`} />} />
			<Card interest="Advertising" icon={<PiTelevisionFill className={`${iconStyles}`} />} />
			<Card interest="Philosophy" icon={<FaBookReader className={`${iconStyles}`} />} />
		</div>
	);
};

export const Header = () => {
	return (
		<div className="grid grid-cols-8 md:gap-y-0 gap-y-8 gap-x-0 md:gap-x-8 main-container">
			<HeaderText containerClass=" md:col-span-3 w-full col-span-8 flex flex-col items-start justify-start order-2" />
			<HeaderImage containerClass="  md:col-span-3 overflow-hidden w-full rounded-2xl col-span-8 xs:h-[500px] h-[400px] xl-[600px] lg:h-[500px] relative order-1" />
			<HeaderInterests containerClass=" md:col-span-2 col-span-8 flex flex-col gap-3 order-3 " />
		</div>
	);
};

export default Header;
