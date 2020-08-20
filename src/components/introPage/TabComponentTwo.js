import React, { useState } from "react";
import styled from "styled-components";
import "../../css/TabsNav.css";
import netflixImg from "../../images/svg/netflix.jpg";
import netflix2 from "../../images/svg/netflix2.jpg";
import netflix3 from "../../images/svg/netflix3.jpg";
function TabComponentOne() {
	const [active, setActive] = useState("");

	function handleExpandCollaps(name) {
		if (active === name) {
			//If collapsiable is already visible and clicked on same then this will hide it
			setActive("");
		} else {
			//To show collapsiable
			setActive(name);
		}
	}

	return (
		<div>
			<TabContentContainer>
				<section className="card">
					<h1 className="story-card-title">Frequently Asked Questions</h1>
					<div className="box">
						<div className="box1" onClick={() => handleExpandCollaps("idx1")}>
							What is Netflix?
							<div className="right_plus">+</div>
						</div>
						<div
							className={`subbox transform ${
								active === "idx1" ? "" : "active"
							}`}
						>
							Netflix is a streaming service that offers a wide variety of
							award-winning TV shows, movies, anime, documentaries, and more on
							thousands of internet-connected devices. You can watch as much as
							you want, whenever you want without a single commercial – all for
							one low monthly price. There's always something new to discover
							and new TV shows and movies are added every week!
						</div>
						<div className="box1" onClick={() => handleExpandCollaps("idx2")}>
							How much does Netflix cost?
							<div className="right_plus">+</div>
						</div>
						<div
							className={`subbox transform ${
								active === "idx2" ? "" : "active"
							}`}
						>
							Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
							streaming device, all for one fixed monthly fee. Plans range from
							KRW9,500 to KRW14,500 a month. No extra costs, no contracts.
						</div>
						<div className="box1" onClick={() => handleExpandCollaps("idx3")}>
							Where can I watch?
							<div className="right_plus">+</div>
						</div>
						<div
							className={`subbox transform ${
								active === "idx3" ? "" : "active"
							}`}
						>
							Watch anywhere, anytime, on an unlimited number of devices. Sign
							in with your Netflix account to watch instantly on the web at
							netflix.com from your personal computer or on any
							internet-connected device that offers the Netflix app, including
							smart TVs, smartphones, tablets, streaming media players and game
							consoles. You can also download your favorite shows with the iOS,
							Android, or Windows 10 app. Use downloads to watch while you're on
							the go and without an internet connection. Take Netflix with you
							anywhere.
						</div>
						<div className="box1" onClick={() => handleExpandCollaps("idx4")}>
							How do I cancel?
							<div className="right_plus">+</div>
						</div>
						<div
							className={`subbox transform ${
								active === "idx4" ? "" : "active"
							}`}
						>
							Netflix is flexible. There are no pesky contracts and no
							commitments. You can easily cancel your account online in two
							clicks. There are no cancellation fees – start or stop your
							account anytime.
						</div>
						<div className="box1" onClick={() => handleExpandCollaps("idx5")}>
							What can I watch on Netflix?
							<div className="right_plus">+</div>
						</div>
						<div
							className={`subbox transform ${
								active === "idx5" ? "" : "active"
							}`}
						>
							Netflix has an extensive library of feature films, documentaries,
							TV shows, anime, award-winning Netflix originals, and more. Watch
							as much as you want, anytime you want.
						</div>
					</div>
				</section>
			</TabContentContainer>
			<TabContentContainer>
				<div className="tab-content">
					<div className="tab_left">
						<img src={netflix2} alt="a" />
					</div>
					<div className="tab_right">
						<h1>Download your shows to watch offline.</h1>
						<span>
							Save your favorites easily and always have something to watch.
						</span>
					</div>
				</div>
			</TabContentContainer>
			<TabContentContainer>
				<div className="tab-content">
					<div className="tab_left">
						<h1>Watch everywhere.</h1>
						<span>
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV without paying more.
						</span>
					</div>
					<div className="tab_right1">
						{/* <div className="overlay"></div> */}
						<img src={netflix3} alt="a" />
					</div>
				</div>
			</TabContentContainer>
		</div>
	);
}

export default TabComponentOne;

// const boxStyle = {
// 	text-align: left;
// 	height: calc(23px + 3vw);
// 	/* font-size: 26px; */
// 	font-size: calc(10px + 1.2vw);
// 	background-color: #303030;
// 	color: white;
// 	padding: 1em 2.2em 0.8em 1.2em;
// 	margin-bottom: 9px;
// 	font-weight: 400;
// 	position: relative;
// }''

const TabContentContainer = styled.div`
	background: black;
	border-bottom: solid 8px #222;
	h1 {
		font-size: 3.5rem;
	}

	.right_plus {
		position: absolute;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: right;
		align-items: right;
		justify-content: right;
		margin-right: 30px;
		display: inline;

		right: 0;
	}

	img {
		z-index: 1;
		width: 31rem;
	}

	.card {
		width: 80%;
		padding: 7% 0 7%;
		/* padding-top: 7%; */
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.story-card-title {
		justify-content: center;
		text-align: center;
		font-weight: bold;
		font-size: calc(12px + 3vw);
		margin-bottom: 60px;
	}

	.box {
		width: 100%;
	}
	.box1 {
		text-align: left;
		height: calc(23px + 3vw);
		/* font-size: 26px; */
		font-size: calc(10px + 1.2vw);
		background-color: #303030;
		color: white;
		padding: 1em 2.2em 0.8em 1.2em;
		margin-bottom: 9px;
		font-weight: 400;
		position: relative;
	}

	.transform {
		transition: all 0.3s ease-out;
		/* -webkit-transition: all 0.4s ease;
		-moz-transition: all 0.4s ease;
		-o-transition: all 0.4s ease;
		-ms-transition: all 0.4s ease;
		transition: all 0.4s ease; */
	}
	.subbox {
		position: relative;
		text-align: left;
		/* height: calc(23px + 3vw); */
		font-size: calc(10px + 1.2vw);
		line-height: calc((10px + 1.2vw) * 1.3);
		background-color: #303030;
		color: white;
		padding: 1em 2.2em 0.8em 1.2em;
		margin-bottom: 9px;
		font-weight: 400;
		position: relative;
		opacity: 1;
		/* height: 0; */
		/* display: none; */
	}

	.subbox.active {
		transition: all 0s ease-out;
		/* padding: 1em 2.2em 0.8em 1.2em; */
		/* transition: max-height 0.2s ease-out; */
		/* max-height: 0; */
		padding: 0 2.2em 0 1.2em;
		overflow: hidden;
		height: 0;
		/* display: none; */
		/* display: inline-block; */
		/* opacity: 0; */
	}

	.tab_right1 {
		position: relative;
	}
	.overlay {
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}

	.tab-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10rem;
		align-items: center;
		line-height: 2rem;
		margin: 0 10%;
		font-size: 2rem;
		padding: 3.5rem 0;
	}
`;
