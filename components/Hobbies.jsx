"use client";
import PhotoList from "./PhotoList";
import PhotoModal from "./PhotoModal";
import { useState } from "react";

const Hobbies = () => {
	const [selected, setSelected] = useState(null);
	const handleClickPhoto = () => {
		setSelected(!selected);
	};
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 md:mb-16 w-full text-center md:text-6xl xs:text-4xl">
				Hobbies
			</h2>
			<PhotoList setSelected={setSelected} />
			<PhotoModal selected={selected} setSelected={setSelected} />
		</div>
	);
};

export default Hobbies;
