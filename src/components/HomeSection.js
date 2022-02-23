import React from "react";
import ArrowButton from "./extra/ArrowButton";
import MyPicture from "../mypicture.jpeg";
import DownloadLogo from "../components/extra/DownloadLogo";

const HomeSection = () => {
	function handleClick() {
		console.log("CLICKED");
	}
	return (
		<section className="home-section" id="home">
			<div className="home-text-content">
				<p>Front-end developer</p>
				<h1>Ole-Martin Kirsebom</h1>
				<button className="download-btn" onClick={handleClick}>
					<DownloadLogo /> Download Resume
				</button>
				<ArrowButton />
			</div>
			<div className="picture-container">
				<img
					className="profile-picture"
					src={MyPicture}
					alt="Ole-Martin Kirsebom"
				/>
			</div>
		</section>
	);
};

export default HomeSection;
