import React from "react";
import { items } from "../../data";
import { motion } from "framer-motion";
import { IoLocation } from "react-icons/io5";

const Card = ({ setSelected, item }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
			whileTap={{ scale: 0.95 }}
			onClick={() => {
				setSelected(item);
			}}
			className="shadow-xl w-full mb-4">
			<div className="inline-block w-full">
				<motion.img
					layoutId={`card-${item.id}`}
					src={item.url}
					className="w-full shadow-xl image-full cursor-pointer bg-light rounded-t-md border border-solid border-transparent  border-b-0"
				/>
				<div className="flex flex-wrap mt-0 px-2 py-3 border border-solid border-transparent rounded-b-md border-t-0">
					<IoLocation className=" mr-1" />
					<h5 className="text-xs font-medium"> {item.location}</h5>
				</div>
			</div>
		</motion.div>
	);
};

const PhotoList = ({ setSelected }) => {
	return (
		<div>
			<div className="columns-2 lg:columns-3 xl:columns-4 gap-4">
				{items.map((item) => (
					<Card key={item.id} setSelected={setSelected} item={item} />
				))}
			</div>
		</div>
	);
};

export default PhotoList;
