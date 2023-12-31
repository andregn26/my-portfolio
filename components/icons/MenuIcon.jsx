export const MenuIcon = ({ handleClickMenu, isOpen }) => {
	return (
		<button className=" flex-col justify-center items-center flex" onClick={handleClickMenu}>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
					isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
				} `}></span>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
					isOpen ? "opacity-0" : "opacity-100"
				}`}></span>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
					isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
				}`}></span>
		</button>
	);
};
