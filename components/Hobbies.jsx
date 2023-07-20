import React from "react";
import { PiCastleTurretFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { PiStrategyFill } from "react-icons/pi";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";

const Card = ({ interest, icon }) => {
	const hobbiesStyles =
		"flex flex-col p-4 items-center mx-auto w-[200px] justify-center shadow-lg border border-solid border-transparent dark:border-light dark:bg-dark rounded-md";
	return (
		<div className={`${hobbiesStyles} `}>
			<div className="w-24 h-24 rounded-full shadow-md flex items-center justify-center border border-solid border-transparent dark:border-light">
				{icon}
			</div>
			<h5>{interest}</h5>
		</div>
	);
};

const Hobbies = () => {
	const iconStyles =
		"w-full h-auto p-4 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark";
	return (
		<div className="mb-64 w-full">
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl ">
				Interests
			</h2>
			<div className="grid grid-cols-6 2xl:grid-cols-3 content-center items-center md:grid-cols-2 xs:grid-cols-1 gap-20">
				<Card
					interest="History"
					icon={<PiCastleTurretFill className={`${iconStyles}`} />}
				/>
				<Card interest="Photography" icon={<MdPhotoCamera className={`${iconStyles}`} />} />
				<Card interest="Design" icon={<MdDesignServices className={`${iconStyles}`} />} />
				<Card interest="Marketing" icon={<PiStrategyFill className={`${iconStyles}`} />} />
				<Card
					interest="Advertising"
					icon={<PiTelevisionFill className={`${iconStyles}`} />}
				/>
				<Card interest="Philosophy" icon={<FaBookReader className={`${iconStyles}`} />} />
			</div>
		</div>
	);
};

export default Hobbies;
