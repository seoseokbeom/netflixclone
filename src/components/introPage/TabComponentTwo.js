import React from "react";
import styled from "styled-components";
import "../../css/TabsNav.css";
import netflixImg from "../../images/svg/netflix.jpg";
import readytocast from "../../images/svg/readytocast.jpg";
import devicePile from "../../images/svg/device-pile.png";
function TabComponentOne() {
	return (
		<div>
			<TabContentContainer>
				<section className="card">
					<h1 className="story-card-title">Frequently Asked Questions</h1>
					<div className="box">
						<div className="box1">
							What is Netflix?
							<div className="right_plus">+</div>
						</div>
						<div className="box1">
							How much does Netflix cost?
							<div className="right_plus">+</div>
						</div>
						<div className="box1">
							Where can I watch?
							<div className="right_plus">+</div>
						</div>
						<div className="box1">
							How do I cancel?
							<div className="right_plus">+</div>
						</div>
						<div className="box1">
							What can I watch on Netflix?
							<div className="right_plus">+</div>
						</div>
					</div>
				</section>
			</TabContentContainer>
			<TabContentContainer>
				<div className="tab-content">
					<div className="tab_left">
						<img src={readytocast} alt="a" />
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
						<img src={devicePile} alt="a" />
					</div>
				</div>
			</TabContentContainer>
		</div>
	);
}

export default TabComponentOne;

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
		margin-bottom: 60px;
	}

	.box {
		width: 100%;
	}

	.box1 {
		text-align: left;
		height: 70px;
		font-size: 26px;
		background-color: #303030;
		color: white;
		padding: 1em 2.2em 0.8em 1.2em;
		margin-bottom: 9px;
		font-weight: 400;
		position: relative;
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
