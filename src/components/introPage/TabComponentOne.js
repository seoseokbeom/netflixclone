import React from "react";
import styled from "styled-components";
import "../../css/TabsNav.css";
import netflixImg from "../../images/svg/netflix0.png";
import readytocast from "../../images/svg/readytocast.jpg";
import devicePile from "../../images/svg/device-pile.png";
function TabComponentOne() {
	return (
		<div>
			<TabContentContainer>
				<div className="tab-content">
					<div className="tab_left">
						<h1>Enjoy on your TV.</h1>
						<span>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</span>
					</div>
					<div className="tab_right1">
						<div className="overlay"></div>
						<img src={netflixImg} alt="a" />
					</div>
				</div>
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
	img {
		z-index: 1;
		width: 31rem;
	}

	/* .tab_left {
	background: red;
}
 */

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
