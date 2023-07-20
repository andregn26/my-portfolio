"use client";
import PhotoList from "./PhotoList";
import PhotoModal from "./PhotoModal";
import { useState } from "react";
import { Suspense } from "react";

const Photography = () => {
	const [selected, setSelected] = useState(null);
	const handleClickPhoto = () => {
		setSelected(!selected);
	};
	return (
		<>
			<PhotoList setSelected={setSelected} />
			<PhotoModal selected={selected} setSelected={setSelected} />
		</>
	);
};

export default Photography;
