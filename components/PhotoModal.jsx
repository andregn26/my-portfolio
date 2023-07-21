"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoLocation } from "react-icons/io5";

const PhotoModal = ({ selected, setSelected }) => {
	if (!selected) {
		return <></>;
	}
	return (
		<div
			onClick={() => setSelected(null)}
			className="fixed inset-0 bg-dark/90 z-20 cursor-pointer overflow-y-scroll no-scrollbar">
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-[700px] mx-auto mt-32 mb-8 px-8 cursor-default">
				<motion.div layoutId={`card-${selected.id}`}>
					<img className="rounded-t-md" src={selected.url} />
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{ duration: 0.5 }}
					className="bg-dark rounded-b-md p-4">
					<div className="flex mt-0 px-2 items-center py-3 text-light">
						<IoLocation className="text-2xl mr-1" />
						<h3 className="text-lg font-medium  ">{selected.location}</h3>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default PhotoModal;
