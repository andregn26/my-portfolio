import React from "react";
import { items } from "./data";
import { motion } from "framer-motion";

const Card = ({ setSelected, item }) => {
	return (
		<div className="inline-block w-full mb-4">
			<motion.img
				layoutId={`card-${item.id}`}
				src={item.url}
				className="w-full shadow-xl image-full cursor-pointer bg-light rounded-md"
				whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
				whileTap={{ scale: 0.95 }}
				onClick={() => {
					setSelected(item);
				}}
			/>
			<div className="flex flex-wrap mt-2">ola mundo</div>
		</div>
	);
};

const PhotoList = ({ setSelected }) => {
	return (
		<div>
			<div className="columns-4 lg:columns-3 sm:columns-2  gap-4">
				{items.map((item) => (
					<Card key={item.id} setSelected={setSelected} item={item} />
				))}
			</div>
		</div>
	);
};

export default PhotoList;
