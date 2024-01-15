import React from "react";
import ProjectShortCard from "../cards/ProjectShortCard";

const GridOfThree = ({ data }) => {
	return (
		<div className="grid grid-cols-6 gap-8 mt-8">
			{data.map((item) => (
				<div key={item._id} className="col-span-6 md:col-span-3 lg:col-span-2 ">
					<ProjectShortCard project={item} />
				</div>
			))}
		</div>
	);
};

export default GridOfThree;
