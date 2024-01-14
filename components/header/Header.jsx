import NavbarDesktop from "./navbar/NavbarDesktop";

const Header = () => {
	return (
		<div className="absolute z-10 top-0 left-0 w-full">
			<div className="flex justify-center">
				<NavbarDesktop />
			</div>
		</div>
	);
};

export default Header;
