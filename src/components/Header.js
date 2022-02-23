import Logo from "../headerlogo.png";

const Header = () => {
	// const handleClick = (event) => {
	// 	event.preventDefault();
	// 	const target = event.target.getAttribute("href");
	// 	const location = document.querySelector(target).offsetTop;
	// 	console.log(location);

	// 	window.scrollTo({
	// 		left: 0,
	// 		top: location - (10 * window.innerHeight) / 100,
	// 	});
	// };
	const scrollToTop = () => {
		window.scrollTo({
			left: 0,
			top: 0,
		});
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
		});
	};
	return (
		<>
			<header>
				<div className="header-container">
					<div className="logo-container">
						<a onClick={scrollToTop}>
							<img className="logo" src={Logo} alt="logo" />
						</a>
					</div>
					<nav>
						<a href="#about">About</a>
						<a href="#work">Work</a>
						<button onClick={scrollToBottom}>Reach Out</button>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;

// {links.map((link) => {
// 	return (
// 		<a href={link.url} key={link.id} onClick={handleClick}>
// 			{link.text}
// 		</a>
// 	);
// })}
