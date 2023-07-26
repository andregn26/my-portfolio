"use client";
import { motion } from "framer-motion";

const TransitionEffect = () => {
	return (
		<>
			<motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary dark:bg-secondaryDark "
				initial={{ x: "100%", height: "100%" }}
				animate={{ z: "0%", height: "0%" }}
				transition={{ duration: 0.8, ease: "easeInOut" }}
			/>
			<motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-primary dark:bg-primaryDark"
				initial={{ x: "100%", height: "100%" }}
				animate={{ z: "0%", height: "0%" }}
				transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
			/>
			{/* <motion.div
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
				initial={{ x: "100%", height: "100%" }}
				animate={{ z: "0%", height: "0%" }}
				transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
			/> */}
		</>
	);
};

export default TransitionEffect;
