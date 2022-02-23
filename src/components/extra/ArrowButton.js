import React from "react";

const ArrowButton = () => {
	// const handleClick = () => {
	// 	console.log("ARROW CLICKED");

	// 	let position = window.scrollY;
	// 	console.log(position);

	// 	window.scrollTo({
	// 		left: 0,
	// 		top: (90 * window.innerHeight) / 100 + (100 * position) / 100,
	// 	});
	// };

	// const handleScroll = () => {
	// 	const sections = document.querySelectorAll("section");
	// 	const options = {
	// 		threshold: 0.7,
	// 	};
	// 	let observer = new IntersectionObserver(navCheck, options);

	// 	function navCheck(entries) {
	// 		entries.forEach((entry) => {
	// 			console.log(entry);
	// 		});
	// 	}

	// 	sections.forEach((section) => {
	// 		observer.observe(section);
	// 	});
	// };

	return (
		<svg
			className="arrow-btn"
			xmlns="http://www.w3.org/2000/svg"
			width="37.526"
			height="70.6"
			viewBox="0 0 37.526 70.6"
		>
			<g
				id="Group_7"
				data-name="Group 7"
				transform="translate(-214.045 -589.447)"
			>
				<path
					id="Path_3"
					data-name="Path 3"
					d="M1562.5,651.5,1570,668l10.5-16.5"
					transform="translate(-1348 -9)"
					fill="none"
					stroke="#8dad93"
					stroke-width="1"
				/>
				<path
					id="Path_4"
					data-name="Path 4"
					d="M1569.5,667c3.5-64.5,28-61,28-61"
					transform="translate(-1346 -16)"
					fill="none"
					stroke="#8dad93"
					stroke-width="1"
				/>
			</g>
		</svg>
	);
};

export default ArrowButton;
