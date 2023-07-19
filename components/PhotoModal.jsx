"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PhotoModal = ({ selected, setSelected }) => {
	if (!selected) {
		return <></>;
	}
	return (
		<div
			onClick={() => setSelected(null)}
			className="fixed inset-0 bg-dark/95 z-20 cursor-pointer overflow-y-scroll no-scrollbar">
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-[700px] mx-auto mt-32 mb-8 px-8 cursor-default">
				<motion.div layoutId={`card-${selected.id}`}>
					<img src={selected.url} />
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
					className="bg-light dark:bg-black/95 p-4">
					<h3 className="font-medium">{selected.title}</h3>
				</motion.div>
			</div>
		</div>
	);
};

export default PhotoModal;
