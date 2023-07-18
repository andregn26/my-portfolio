export const LinkedInIcon = ({ className, ...rest }) => (
	<svg
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		className={`w-full h-auto${className}`}
		{...rest}>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			<path
				fill="#0A66C2"
				d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path>
		</g>
	</svg>
);

export const GithubIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 512 512"
		{...rest}
		className={`w-full h-auto ${className}`}>
		<path fill="none" d="M0 0h512v512H0z" />
		<path
			fill="currentColor"
			d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
		/>
	</svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
	<svg
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<rect
				x="2"
				y="2"
				width="28"
				height="28"
				rx="6"
				fill="url(#paint0_radial_87_7153)"></rect>{" "}
			<rect
				x="2"
				y="2"
				width="28"
				height="28"
				rx="6"
				fill="url(#paint1_radial_87_7153)"></rect>{" "}
			<rect
				x="2"
				y="2"
				width="28"
				height="28"
				rx="6"
				fill="url(#paint2_radial_87_7153)"></rect>{" "}
			<path
				d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
				fill="white"></path>{" "}
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
				fill="white"></path>{" "}
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
				fill="white"></path>{" "}
			<defs>
				{" "}
				<radialGradient
					id="paint0_radial_87_7153"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
					{" "}
					<stop stopColor="#B13589"></stop>{" "}
					<stop offset="0.79309" stopColor="#C62F94"></stop>{" "}
					<stop offset="1" stopColor="#8A3AC8"></stop>{" "}
				</radialGradient>{" "}
				<radialGradient
					id="paint1_radial_87_7153"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
					{" "}
					<stop stopColor="#E0E8B7"></stop>{" "}
					<stop offset="0.444662" stopColor="#FB8A2E"></stop>{" "}
					<stop offset="0.71474" stopColor="#E2425C"></stop>{" "}
					<stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop>{" "}
				</radialGradient>{" "}
				<radialGradient
					id="paint2_radial_87_7153"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
					{" "}
					<stop offset="0.156701" stopColor="#406ADC"></stop>{" "}
					<stop offset="0.467799" stopColor="#6A45BE"></stop>{" "}
					<stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop>{" "}
				</radialGradient>{" "}
			</defs>{" "}
		</g>
	</svg>
);

export const SunIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2">
			<g strokeDasharray="2">
				<path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="4;2"
					/>
				</path>
				<path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="4;2"
					/>
				</path>
			</g>
			<path
				fill="currentColor"
				d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
				opacity="0">
				<set attributeName="opacity" begin="0.5s" to="1" />
			</path>
		</g>
		<g fill="currentColor" fillOpacity="0">
			<path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
				<animate
					id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="22" cy="2" r="3" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="3;12"
				/>
			</circle>
			<circle cx="22" cy="2" r="1">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="1;10"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="6"
			fill="currentColor"
			mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
			<set attributeName="opacity" begin="0.5s" to="0" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.1s"
				dur="0.4s"
				values="6;10"
			/>
		</circle>
	</svg>
);

export const MoonIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}>
		<rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
		<g
			fill="none"
			stroke="currentColor"
			strokeDasharray="2"
			strokeDashoffset="2"
			strokeLinecap="round"
			strokeWidth="2">
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.2s"
					dur="0.2s"
					values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.2s"
					dur="0.2s"
					values="2;0"
				/>
			</path>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.5s"
					dur="0.2s"
					values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.5s"
					dur="1.2s"
					values="2;0"
				/>
			</path>
			<animateTransform
				attributeName="transform"
				dur="30s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
		<g fill="currentColor">
			<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<g
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2">
			<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
			<set attributeName="opacity" begin="0.6s" to="0" />
		</g>
		<mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="18" cy="6" r="12" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="12;3"
				/>
			</circle>
			<circle cx="18" cy="6" r="10">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="10;1"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="10"
			fill="currentColor"
			mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
			opacity="0">
			<set attributeName="opacity" begin="0.6s" to="1" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.6s"
				dur="0.4s"
				values="10;6"
			/>
		</circle>
	</svg>
);

export const LinkArrow = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
		/>
	</svg>
);

export const CircularText = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={1440}
		height={1440}
		viewBox="0 0 1080 1080"
		className={`w-full h-auto ${className}`}
		{...rest}>
		<path d="M551.1 198.1c0 1.3 1.9 18.4 4.2 37.9l4.2 35.5 5 1.2c2.8.7 6.8 1.4 9 1.5l3.9.3 12.6-21.7c6.9-11.9 12.6-21.5 12.8-21.3.2.2 1.6 11.3 3.1 24.9 1.5 13.5 2.9 24.8 3.2 25.1.3.3 4.3 1.3 8.9 2.2 7.1 1.4 8.4 1.4 9.1.2.4-.8 8.9-15.6 18.8-32.9l18-31.5-4.7-1.1c-2.6-.6-6.1-1.3-7.8-1.7l-3.1-.6-12.8 22.5c-7 12.3-13.1 22.6-13.5 22.9-.4.2-1.9-11.1-3.4-25.3-1.5-14.1-3-26-3.2-26.3-.7-1.3-14.4-3.3-15.4-2.3-.4.5-6.3 10.3-13 21.9-6.7 11.5-12.5 21.3-12.9 21.7-.4.4-1.9-10.8-3.5-25-1.5-14.1-3.1-26-3.4-26.3-.4-.4-3.6-1.2-7.1-1.8-3.4-.7-6.9-1.5-7.7-1.8-1-.3-1.4.2-1.3 1.8zM441.5 232.7c-4.2 2.1-7.4 5.3-9.3 8.8l-1.5 3-1.3-3.2-1.3-3.2-6.8 2.6c-3.8 1.4-7 2.7-7.2 2.9-.3.3 18.6 50.4 19.4 51.2.5.6 12.6-3.6 13.9-4.8.4-.4-1.5-6.9-4.3-14.4-5.5-14.7-6.1-19.4-3.2-24.2 1.7-2.8 7.3-6.4 10.1-6.4.8 0 .9-.7.5-1.8-.4-.9-1.6-4.1-2.7-7-1.1-2.8-2.2-5.2-2.6-5.2-.4.1-2 .8-3.7 1.7zM675 254.9c-13.2 4.3-21.2 14.8-21.2 27.8 0 11.6 7.3 21.8 20.1 28 4.5 2.2 7.1 2.7 12.8 2.8 3.9 0 7.4-.3 7.7-.6.3-.3.1-3.1-.5-6.2l-1.2-5.7h-4.5c-5.4 0-11.7-2.8-15.7-7-2.1-2.2-2.9-4.2-3.3-8-.2-2.7-.2-5 .2-5 .3 0 8.5 4.5 18.2 10 9.6 5.5 18 9.7 18.6 9.4.5-.4 2.1-3 3.4-5.8 5-10.6 2.2-24.1-6.4-31.7-7.4-6.5-21-10.4-28.2-8zm16.2 14.3c2.2 1.3 4.6 3.5 5.4 5 1.6 3.1 1.9 10.8.4 10.8-1.9 0-23-12.4-22.7-13.4.5-1.6 7-4.6 10-4.6 1.6 0 4.7 1 6.9 2.2zM494.8 259.9c-2.7 2.4-3.3 3.6-3.3 7.1 0 3.5.6 4.7 3.4 7.2 2.9 2.6 3.9 3 7.5 2.5 8.4-1.2 11.7-10.8 5.7-16.8-4-4-8.9-4-13.3 0zM385.9 259c-22.9 3.8-33.6 30.6-18.9 47.3 7.5 8.4 16 11.6 26.2 9.7 10.7-2.1 22.1-10.2 25.9-18.5 2.6-5.6 2.4-6-2.3-7.4-2.4-.7-5-1.4-5.9-1.7-1.1-.3-2.1.6-2.9 2.6-3.1 7.4-14.5 13.3-21.3 11.1-7.5-2.5-7-3.1 11.8-14.6 9.6-5.8 17.5-11 17.5-11.4 0-.4-1.4-2.8-3.1-5.4-3.5-5.3-10.6-10.4-15.8-11.3-2-.3-4.3-.7-5.1-.9-.8-.1-3.6.1-6.1.5zm9.8 14.5c1.3.9 2.3 1.9 2.3 2.4 0 .9-18.1 12.4-21.3 13.7-2.3.8-3.1-4.7-1.4-8.7 3.7-8.6 13.3-12 20.4-7.4zM725.5 292.1c-12.6 13.8-24.2 26.5-25.7 28.3l-2.7 3.3 5.5 4.7c5.1 4.5 5.6 4.7 7.3 3.2 2.5-2.3 3.1-2 3.1 1.2 0 3.9 5.1 11.5 10.1 15.2 5.6 4 13.9 6.4 19.2 5.6 10-1.6 19.2-8.7 23.6-18.1 7.2-15.3-2.6-35-18.6-37.4l-4.8-.7 6-6.4c3.3-3.6 7.3-8 9-9.8l2.9-3.2-5.4-5.5c-3-3-5.7-5.5-6-5.5-.3.1-10.8 11.3-23.5 25.1zm20.3 17.9c7.1 4.4 9 12.2 4.7 19.6-6.2 10.5-19.2 11.4-25.6 1.8-3.6-5.5-2.1-13.1 3.8-18.5 5.8-5.4 11.4-6.4 17.1-2.9zM330.6 298.5c-8.6 3.3-16 11.5-17.2 19.1l-.6 4.5-2.2-2-2.2-2.1-5.4 5.5-5.5 5.5 26.8 26.7 26.7 26.8 5.4-5.4 5.5-5.4-8.4-9.1-8.4-9.1 5-1.6c7.1-2.3 11.9-6.6 15.8-14 3-5.8 3.3-7 2.9-12.9-1.1-15.1-12.9-26.9-27.8-27.6-4.1-.3-7.9.2-10.4 1.1zm13.1 15.6c10.2 4.9 12.9 17.1 5.5 24.2-6 5.7-13.9 5.4-20.4-.9-6.7-6.7-7.2-14.8-1-20.7 5.2-5 9.5-5.7 15.9-2.6zM286.3 352.6c-9.8 3.6-19.6 16.7-20.9 28-1.9 15.7 12 31 28.1 30.8 8.4 0 15.3-3.3 21.4-10 12.1-13.2 12.1-32.7 0-42.8-8.1-6.8-19.8-9.3-28.6-6zm10.9 14.4c9.5 2.7 15.4 13 11.7 20.3-5 9.7-15.7 11.5-23.9 4.1-2.1-2-4.4-5-5-6.9-2.6-7.9 3.7-16.9 13-18.4.3-.1 2.2.4 4.2.9zM791.8 371.1c-17.5 8.7-31.8 16.4-31.8 17 0 .6 3.9 8.8 8.7 18.2 6.9 13.6 9.8 18.2 14.2 22.7 8.3 8.4 13.4 10.5 25.1 10.5 8.3 0 10.2-.4 15-2.7 16.5-8.1 24.1-24.1 19.7-41.5-1.3-4.9-18-40.5-19-40.2-.1 0-14.5 7.2-31.9 16zm32.2 15.1c4.1 8.3 5 11.1 5 15.5 0 9.5-6.1 17.4-15.9 20.8-6.3 2.1-9.9 1.9-15.8-1-6-3-8.6-6.1-14.1-17.2l-4.1-8.1 19.7-10.1c10.8-5.5 19.8-10 20-10.1.1 0 2.5 4.6 5.2 10.2zM227.6 405.2c-1.7 4-2.5 7.3-2 7.8 1.5 1.5 68.6 29 69.4 28.5.9-.5 6.3-13.6 5.8-14-.3-.3-63.5-26.6-68.3-28.5-1.8-.7-2.4 0-4.9 6.2zM252 440.1c-9.3 1.8-18.4 10.3-21 19.7-1.7 6.1-1.2 16.5.9 21.6 5.9 13.6 24.2 20.5 37.6 14.2 14.5-6.7 22-27 15.8-42.9-.9-2-1.8-3.7-2.2-3.7-.3 0-2.9 1.4-5.8 3l-5.2 3 1.6 3.7c3.3 7.9-1.3 19.7-8.8 22.7-2.3.9-4.4 1.5-4.6 1.2-.3-.3 1.5-9.4 4.1-20.3 2.5-10.9 4.6-20.1 4.6-20.5 0-.4-2.1-1-4.7-1.3-2.7-.4-5.5-.8-6.3-1-.8-.1-3.5.1-6 .6zm1.7 26.9c-1.9 7.9-3.5 13-4.3 13-.6 0-2.6-1.6-4.3-3.5-3.7-4.2-4.2-10-1.3-15.4 2-3.6 7.2-7.1 10.8-7.1 2.1 0 2.1.1-.9 13zM815.6 446.6c-13.4 4.3-20.1 14-19.9 28.9.1 9 3.3 17.4 8.6 23.2 2.2 2.4 4.5 4.3 5.1 4.3.6 0 2.5-2.2 4.3-4.8l3.2-4.7-2.4-2.5c-3.5-3.7-5.5-9.2-5.5-15.5 0-4.9.4-6 3.4-9.3 1.9-2 3.7-3.5 3.9-3.2.3.3 2.4 9.3 4.7 20 2.3 10.7 4.5 19.8 4.9 20.3 1.1 1.2 11.2-2.3 15.8-5.4 11.1-7.7 14-24.5 6.5-38.2-6.2-11.5-20.1-17.1-32.6-13.1zm19.2 16.9c6.4 5.3 7 15.6 1.3 20.7-1.7 1.5-3.5 2.8-3.9 2.8-.5 0-1.9-4.8-3.1-10.8-1.2-5.9-2.5-11.7-2.8-13-.4-1.9-.1-2.2 2.5-2.2 1.8 0 4.3 1 6 2.5zM223 505.6v7.9l18 7.9c9.9 4.3 18 8.2 18 8.6 0 .3-8.2 3.8-18.2 7.7l-18.3 7-.3 8.2c-.3 7.6-.1 8.2 1.5 7.7 1-.3 13.5-5.3 27.8-11l26-10.4.3-8.4c.3-8.4.2-8.5-2.5-9.7-3-1.4-48.9-21.9-51-22.8-1-.4-1.3 1.4-1.3 7.3zM829 516.4l-26.5 11.2v16.5l26.9 11.5c14.8 6.3 27.3 11.4 27.7 11.4.5 0 .9-3.3.9-7.4v-7.4l-14.4-6c-7.9-3.4-16.2-6.9-18.5-7.8-2.3-.9-3.9-2-3.4-2.5.4-.4 8.7-3.9 18.3-7.7l17.5-7 .3-8.1c.2-6.1 0-8.1-1-8-.7 0-13.2 5.1-27.8 11.3zM245.3 564.3c-6 2.2-11.7 7.2-14.8 12.8-2.6 4.8-3 6.3-3 13.4.1 9.7 2.6 15.9 8.8 22.3 13 13.3 36.3 9.5 44.9-7.3 2.9-5.5 3.6-17.3 1.4-24.7-1.7-6.1-6.9-14.3-10.2-16.5-2-1.3-2.4-1.1-5.9 3.7l-3.7 5 3.1 3.2c4.9 5 6.7 14.9 3.7 20.6-1.9 3.7-5.4 6.8-6.5 5.6-.4-.5-2.3-8.6-4.1-17.9-1.7-9.4-3.4-18-3.7-19.3-.4-1.7-1.2-2.2-3.7-2.1-1.7 0-4.5.6-6.3 1.2zm5.5 26c2.9 15.2 2.9 15.9-.5 15.1-4.2-1-6.1-2.2-7.8-4.8-4.4-6.7-3.7-14.6 1.6-19 1.7-1.4 3.4-2.6 3.8-2.6.4 0 1.7 5.1 2.9 11.3zM816 568.9c-13 4.2-21.9 17.8-22 33.2 0 5.3 2.7 13.8 4.6 14.6.7.2 3.4-.8 5.9-2.3 3.9-2.2 4.5-3 4-4.8-.4-1.2-.9-4.4-1.2-7.3-.9-8.8 5.4-18.3 12.3-18.3 2 0 2 .4-2.3 19.7-2.3 10.9-4.3 20.1-4.3 20.5 0 .3 2.5 1.2 5.5 1.8 10.3 2.1 21.8-2.2 27.4-10.3 11-16.1 6.2-37.7-10.1-44.7-5.6-2.4-15.6-3.5-19.8-2.1zm19.3 19.2c8.2 6.4 3.8 21.9-6.6 23.6l-3.5.5 2.4-11.3c3.6-17 3.3-16.4 7.7-12.8zM785.4 628.5c-.7 1.9-2.1 5.1-2.9 7.2-.8 2-1.4 3.7-1.3 3.8 1.1.7 69.7 27.5 70.5 27.5.9 0 6.8-13.9 6.1-14.5-.7-.5-69.5-27.5-70.2-27.5-.4 0-1.4 1.6-2.2 3.5zM262.7 627.1c-11 2.6-22 11.7-25.6 21.2-2.5 6.9-2.8 17.9-.6 25.3.8 2.7 5 12.2 9.4 21.1l8 16.3 10.3-4.9c5.7-2.6 20.3-9.7 32.6-15.7l22.2-10.9-8.9-18.1c-5.2-10.7-10.4-19.8-12.7-22.3-9.6-10.7-22-15-34.7-12zm19.1 18c5.1 2.5 9 7.5 13.8 17.8 1.9 4.1 3.4 7.5 3.4 7.7 0 .3-26.3 13.2-34.8 17l-5.3 2.4-4.6-9.6c-4-8.3-4.7-10.5-4.7-15.8 0-3.6.7-7.3 1.6-9.1 5.6-10.5 20.1-15.4 30.6-10.4zM780.7 656.4c-9 3.3-18.2 13.4-20.8 22.9-1.5 5.6-.7 15.3 1.6 20.2 6.7 13.8 24 19.9 37.7 13.2 14.8-7.3 22.5-26.8 16.2-40.8-5.9-12.8-22-20-34.7-15.5zm14.4 16.6c7.3 3.8 10.2 11.3 7 18.4-3.6 8.3-12.4 10.9-20.6 6.3-7.7-4.4-10.4-11.9-6.8-19.4 3.3-7 12.3-9.4 20.4-5.3zM726.6 690.9l-5.7 5.7 9.1 8.8c4.9 4.7 9 8.9 9 9.1 0 .3-1.1.5-2.5.5-3.6 0-8.3 2.5-12.8 6.9-11.1 10.5-11.5 26.4-1.1 38 8.4 9.3 21.6 13 31.6 8.8 8.3-3.5 16.7-14.1 16.8-21.1v-2.9l2.3 2.1 2.3 2.2 5.2-5.3c2.9-2.9 5.2-5.5 5.2-5.8 0-.3-12.1-12.2-26.8-26.6l-26.9-26.2-5.7 5.8zm23.7 35.5c4.2 1.7 8.3 6.6 9.8 11.5 1 3.3.8 4.5-.9 8.4-5.9 13.4-23.8 10.7-28.3-4.2-1-3.3-.8-4.5.9-8.4 3.4-7.7 10.7-10.6 18.5-7.3zM329.5 715.2c-15.1 5.4-24 22.6-19 36.9 3.1 8.6 11.4 16 19.6 17.4l3.9.7-9.1 9.6-9.1 9.6 5.7 5.5 5.8 5.5 10.6-11c5.8-6 17.8-18.5 26.5-27.7l15.9-16.8-3.9-4c-5.4-5.6-7.1-6.4-9.4-4.4-1.7 1.5-1.8 1.4-2.4-1.8-.8-4.5-5.6-11.9-9.8-15-6.8-5.2-17.8-7.1-25.3-4.5zm15.8 15.2c5.4 2.2 8.7 7 8.7 12.5 0 12.9-15.3 21-24.4 13.1-4-3.5-6.1-8.8-5.1-12.8 1.1-4.5 5.3-10 9.2-12.1 4.5-2.4 7.3-2.6 11.6-.7zM688 752.9c-8.4 2.6-18.7 10.6-22.1 17.3-3 5.8-2.6 7.2 2.6 8.6 6.2 1.6 7.3 1.5 8-.8 2.9-9 16.4-14.7 24.7-10.4l3 1.6-3.3 2.2c-1.9 1.3-9.7 6.3-17.4 11.1-7.7 4.8-14.2 9-14.5 9.2-1 .9 3.7 7.8 7.9 11.4 17.6 15.5 47.6.9 47.5-23.1-.1-15.8-12.2-28.1-27.3-27.9-3.7 0-7.7.4-9.1.8zm21.8 30.3c.3 4-.1 5.1-2.8 8.1-5.2 6-13.2 7.2-18.9 2.8l-2.4-1.9 6.4-4c3.5-2.3 8.4-5.4 10.9-7.1 2.5-1.6 5-2.8 5.5-2.7.6.1 1.1 2.3 1.3 4.8zM382.6 755.9c-.3.4 0 3.3.6 6.4l1.2 5.5h4.7c10.1.1 18.9 7.9 18.9 16.7 0 1.9-.2 3.5-.5 3.5-.2 0-8.4-4.7-18.2-10.4-12.2-7.2-18.1-10.2-18.9-9.5-.7.5-2.2 3.3-3.5 6.2-8.2 18.4 4.9 38.2 26.1 39.5 9.1.5 15.7-1.8 21.3-7.6 6-6.3 8.2-11.6 8.2-20.2 0-12.2-6.1-21.2-18.7-27.5-6-3-8.1-3.5-13.9-3.5-3.7 0-7 .4-7.3.9zm9 33.8 11.5 6.8-2.7 2.2c-1.5 1.1-3.9 2.4-5.4 2.7-6.8 1.3-15.3-4.3-16.6-10.9-.5-3.1.1-7.5 1.2-7.5.3 0 5.7 3 12 6.7zM642.3 776.7l-6.2 2.4 1.8 4.7c1 2.6 3.5 8.7 5.5 13.6 4.5 11.2 4.8 17 1.1 21.5-1.5 1.6-4.2 3.6-6 4.3-1.9.6-3.5 1.5-3.5 1.9 0 .7 4.1 12 4.6 12.7 1.2 1.8 10.5-5.2 13.5-10.2l1.8-2.9 1.2 2.6c.7 1.5 1.6 2.7 2 2.7 1.3 0 11.3-4.1 12.3-5 1.3-1.3-18.5-51-20.4-50.9-.8 0-4.3 1.2-7.7 2.6zM431.7 815.3c-10.2 17.3-18.8 32-18.9 32.8-.2.8 2.2 1.8 7 2.9l7.3 1.7 13.7-23c8.3-14 13.8-22.3 14-21.1.1 1 1.3 12.8 2.6 26.2 1.2 13.3 2.5 24.5 2.9 24.8.3.3 3.5 1.2 7.2 2.1 5.7 1.3 6.9 1.3 8 .2.7-.8 7-11.1 14.1-22.9 12-20 12.9-21.3 13.2-18 .2 1.9 1.3 13.8 2.5 26.5l2.2 23 7.9 1.8c4.3 1 8.1 1.6 8.3 1.3.7-.7-6.6-73.9-7.5-74.7-1-1-16.3-4.2-16.9-3.6-.2.3-6.3 10.1-13.4 21.8-7 11.7-13 20.6-13.3 19.8-.2-.8-1.4-12-2.6-24.9-1.1-12.9-2.4-23.8-2.8-24.1-.4-.3-3.4-1.1-6.7-1.8-3.3-.7-6.9-1.5-8.1-1.8-1.9-.4-4.4 3.5-20.7 31zM578.8 794.5c-3.5 2-4.8 4.4-4.8 9.3 0 10.4 15.7 12.6 19 2.8 1.2-3.8-.2-8.9-3.3-11.4-2.4-2-7.9-2.4-10.9-.7z" />
	</svg>
);
// ok
export const ReactIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className={` ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="M12.001 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-.528 2.994c.175.211.35.414.528.609.177-.195.353-.398.528-.609a24.932 24.932 0 0 1-1.056 0Zm-1.995-.125a20.686 20.686 0 0 1-2.285-.367c-.075.35-.132.688-.17 1.015-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.665 20.665 0 0 1-1.462-1.796Zm7.331-.367a20.69 20.69 0 0 1-2.285.367 20.665 20.665 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.374 11.374 0 0 0-.17-1.015Zm1.45-.388c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48-2.574-.82-4.241-2.133-4.241-3.613s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48 1.282-.74 3.253.047 5.25 1.866 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.207 22.5 10.52 22.5 12s-1.668 2.793-4.241 3.614Zm-7.32-9.779c-.265-.239-.53-.458-.793-.655-1.277-.955-2.242-1.207-2.645-.974-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.677 20.677 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796Zm3.585 1.796c.802.085 1.568.209 2.285.368.075-.35.132-.69.17-1.015.19-1.584-.075-2.546-.478-2.778-.403-.233-1.368.019-2.645.974-.263.197-.528.416-.794.655.497.542.987 1.143 1.462 1.796Zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.868 24.868 0 0 1 1.056 0Zm-4.156 7.198a24.907 24.907 0 0 1-.528-.914c-.095.257-.183.51-.263.762.257.055.521.106.79.152Zm1.932.234a22.915 22.915 0 0 0 3.392 0A22.957 22.957 0 0 0 15.393 12a22.863 22.863 0 0 0-1.696-2.938 22.896 22.896 0 0 0-3.392 0A22.91 22.91 0 0 0 8.609 12a22.926 22.926 0 0 0 1.696 2.938Zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 25.076 25.076 0 0 1 .527.914ZM6.131 9.837c-.34.11-.662.23-.964.36-1.465.628-2.166 1.338-2.166 1.803 0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163Zm1.45-.388c.081.25.169.504.264.76a24.929 24.929 0 0 1 .528-.913c-.27.046-.534.097-.791.153Zm10.29 4.714c.34-.11.662-.23.964-.36C20.3 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803-.302-.13-.625-.25-.965-.36-.22.7-.496 1.426-.824 2.163.328.737.603 1.463.825 2.163Zm-1.45.389c-.081-.251-.169-.505-.264-.762a25.108 25.108 0 0 1-.528.914c.27-.046.534-.097.791-.152Z"
		/>
	</svg>
);
// ok
export const JavascriptIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className={` ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="m13.334 16.055-.858 1.188c.814.726 1.826 1.089 3.036 1.089.924-.022 1.628-.26 2.112-.715.492-.462.737-1.012.737-1.65 0-.623-.172-1.137-.517-1.54-.344-.403-.924-.726-1.738-.968-.674-.205-1.15-.392-1.43-.561-.278-.176-.418-.389-.418-.638 0-.227.114-.41.341-.55.228-.14.532-.209.913-.209.28 0 .594.055.946.165.352.095.664.25.935.462l.77-1.199c-.674-.543-1.569-.814-2.684-.814-.799 0-1.455.205-1.969.616-.528.41-.792.92-.792 1.529.008.645.22 1.148.638 1.507.426.36 1.03.653 1.815.88.653.205 1.097.41 1.331.616a.971.971 0 0 1 .341.748.75.75 0 0 1-.34.66c-.235.161-.573.242-1.013.242-.718.007-1.437-.279-2.156-.858Zm-5.53.638a2.18 2.18 0 0 1-.616-.583l-1.034.847c.308.52.69.884 1.144 1.089.425.19.913.286 1.463.286.3 0 .612-.048.935-.143.323-.095.62-.257.891-.484.477-.381.726-1.005.748-1.87v-5.588H9.85v5.302c0 .506-.114.862-.34 1.067-.228.198-.514.297-.859.297-.33 0-.612-.073-.847-.22ZM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z"
		/>
	</svg>
);
// ok
export const HtmlIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className={` ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="m12 18.178-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178ZM3 2h18l-1.623 18L12 22l-7.377-2L3 2Zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188Z"
		/>
	</svg>
);

export const SassIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 640 512"
		className={` ${className}`}
		{...rest}>
		<path
			fill="currentColor"
			d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"
		/>
	</svg>
);

export const TailwindIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		className={` ${className}`}
		{...rest}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
	</svg>
);

export const NextJsIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		className={` ${className}`}
		{...rest}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
		<path d="M15 12v-3"></path>
	</svg>
);
// ok
export const GatsbyIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className={` ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="M11.752 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751ZM12 2a9.988 9.988 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.535 9.12L14.88 19.466A8.018 8.018 0 0 0 19.749 14H15.5v-2H22c0 4.726-3.279 8.686-7.686 9.73L2.27 9.686C3.314 5.28 7.275 2 12 2Z"
		/>
	</svg>
);

// export const MaterialUiIcon = ({ className, ...rest }) => (
// 	);

export const NodeJsIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		className={` ${className}`}
		{...rest}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
		<path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
	</svg>
);

export const MongoDbIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		className={` ${className}`}
		{...rest}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M12 3v19"></path>
		<path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path>
	</svg>
);

export const MySqlIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		className={` ${className}`}
		{...rest}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path>
		<path fill="currentColor" d="M9 7h.01"></path>
	</svg>
);

export const SanityIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 41"
		className={`${className}`}
		fill="currentColor"
		{...rest}>
		<title>Artboard 1</title>
		<polygon points="139.71 40.41 148.63 40.41 148.63 16.67 139.71 21.36 139.71 40.41" />
		<polygon points="46.97 28.34 42.39 39.88 57.49 31.93 54.69 24.44 46.97 28.34" />
		<polygon points="140.46 10.12 140.12 10.29 139.71 10.5 139.71 19.71 148.63 15.01 149.35 14.63 150.09 14.25 157.93 10.12 141.45 10.12 140.46 10.12" />
		<polygon points="74.31 40.41 82.86 40.41 82.86 16.73 74.31 3.89 74.31 40.41" />
		<polygon points="45.43 28.3 45.83 27.27 50.94 14.39 46.72 3.12 34.58 32.93 34.16 33.97 33.74 34.99 33.57 35.43 40.01 41.13 40.25 41.35 40.41 40.92 45.01 29.32 45.43 28.3" />
		<polygon points="66.57 27.99 63.28 19.3 63.02 18.61 56.23 0.7 47.38 0.7 47.54 1.12 47.59 1.28 51.73 12.38 52.12 13.39 52.5 14.4 55.48 22.4 55.75 23.09 56.01 23.78 58.8 31.24 59.06 31.94 59.31 32.64 62.23 40.41 71.28 40.41 66.83 28.68 66.57 27.99" />
		<polygon points="76.71 0.7 73.94 0.7 74.31 1.26 82.86 14.1 83.58 15.19 84.32 16.29 98.72 37.94 98.72 23.95 83.86 0.7 76.71 0.7" />
		<rect x="114.72" y="0.7" width="8.87" height="39.71" />
		<polygon points="157.33 1.63 156.96 1 156.79 0.7 127.37 0.7 127.37 8.64 161.35 8.64 160.54 7.24 157.33 1.63" />
		<polygon points="171.44 0.7 161.76 0.7 175.01 23.77 179.73 15.31 171.44 0.7" />
		<polygon points="100.18 23.52 100.18 40.41 108.73 40.41 108.73 0.7 100.18 0.7 100.18 23.52" />
		<path d="M23.92,28.89v0c-.75,2.89-3.28,4.56-7,4.56-2.63,0-6-.82-7.24-4.7l-.09-.32H.46l.09.5C1.86,36.53,8,41,16.94,41A16.75,16.75,0,0,0,27,38V35.58A7.46,7.46,0,0,0,23.92,28.89Z" />
		<path d="M9.22,11.91c.86-2.63,3.29-4.34,6.66-4.34a6.58,6.58,0,0,1,6.68,4.34l.09.29h8.77l-.09-.51C29.94,4.41,24.14.07,15.81.07A15.79,15.79,0,0,0,6.13,3.12L6,6C6,7,7.14,10.51,9.22,11.91Z" />
		<path d="M21.25,17.22l0-.05-7-1.64a21.86,21.86,0,0,1-3.95-1.32l-.71-.36-.7-.41A8.54,8.54,0,0,1,4.61,5.62V4.3l-.75,1-.08.12A11.09,11.09,0,0,0,2.47,7.71a12,12,0,0,0-.92,4.75c0,5.79,3.39,9.51,10.1,11l6.85,1.55a24.25,24.25,0,0,1,4.21,1.47l.72.37.71.42a8.85,8.85,0,0,1,4.34,8.26V36.9l.75-1,.09-.12a11,11,0,0,0,.7-1,11.2,11.2,0,0,0,.62-1.21,12.34,12.34,0,0,0,1-5C31.66,22.81,28,18.79,21.25,17.22Z" />
		<polygon points="175.91 27.14 175.91 40.41 184.71 40.41 184.71 27.14 176.6 27.14 175.91 27.14" />
		<polygon points="189.56 0.7 189.44 0.92 181.4 15.3 180.99 16.05 180.57 16.79 175.85 25.24 175.91 25.36 175.91 25.66 184.53 25.66 184.65 25.45 184.71 25.36 184.78 25.24 199 0.7 189.56 0.7" />
	</svg>
);
// ok
export const WordpressIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className={` ${className}`}
		{...rest}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="M3.323 12c0 3.438 2 6.4 4.892 7.808L4.077 8.469A8.646 8.646 0 0 0 3.323 12ZM12 20.677a8.77 8.77 0 0 0 2.885-.492l-.062-.116-2.67-7.307-2.6 7.561c.77.23 1.593.354 2.447.354ZM13.192 7.93l3.139 9.33.869-2.892c.37-1.2.654-2.061.654-2.807 0-1.077-.385-1.816-.708-2.385-.446-.723-.854-1.33-.854-2.039 0-.8.6-1.538 1.462-1.538h.107A8.646 8.646 0 0 0 12 3.323a8.67 8.67 0 0 0-7.246 3.908l.554.015c.907 0 2.307-.115 2.307-.115.477-.023.531.661.062.715 0 0-.47.062-1 .085l3.17 9.4 1.9-5.692-1.355-3.708a15.49 15.49 0 0 1-.907-.077c-.47-.03-.416-.746.053-.723 0 0 1.431.115 2.285.115.908 0 2.308-.115 2.308-.115.469-.023.53.661.061.715 0 0-.469.054-1 .085Zm3.17 11.569a8.676 8.676 0 0 0 3.253-11.662 8.192 8.192 0 0 1-.6 4L16.361 19.5ZM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
		/>
	</svg>
);

export const CssIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...rest}
		className={`${className}`}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="currentColor"
			d="m5 3-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5Z"
		/>
	</svg>
);
