import React, { useState } from "react";
import NavbarMobile from "./navbar/NavbarMobile";
import NavbarDesktop from "./navbar/NavbarDesktop";

// bg-white/60 shadow-inner m-4 rounded-lg backdrop-blur-md w-[90%] px-8 py-4

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="absolute top-0 left-0 w-full">
			<div className="lg:hidden flex justify-center mt-4 ">
				<NavbarMobile handleClickMenu={handleClickMenu} isOpen={isOpen} />
			</div>
			<div className="hidden lg:flex justify-center mt-4">
				<NavbarDesktop />
			</div>
		</div>
	);
};

export default Header;
