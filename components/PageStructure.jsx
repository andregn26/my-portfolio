import React from "react";

const PageStructure = ({ children, className }) => {
	return <div className={`${className} flex flex-col justify-center`}>{children}</div>;
};

export default PageStructure;
