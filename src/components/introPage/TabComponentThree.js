import React from "react";
import styled from "styled-components";
import "../../css/TabsNav.css";
import netflixImg from "../../images/svg/netflix.jpg";
import readytocast from "../../images/svg/readytocast.jpg";
import devicePile from "../../images/svg/device-pile.png";
import NetflixPrices from "../../images/svg/netflixprices1.jpg";
import "../../css/TabThree.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";
function TabComponentOne() {
	return (
		<div>
			<TabContentContainer>
				<div className="price-container">
					<h1>Choose one plan and watch everything on Netflix.</h1>
					<div className="join-free">
						<Link to="/signin">
							<Button>JOIN FREE FOR A MONTH</Button>
						</Link>
					</div>
					<img className="price-image" src={NetflixPrices} alt="" />
					<p className="price-description">
						HD and Ultra HD availability subject to your Internet service and
						device capabilities. Not all content available in HD or Ultra HD.
						See Terms of Use for more details.
					</p>
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
const Button = styled.div`
	border-radius: 2px;
	align-items: center;
	justify-content: center;
	padding: 30px 20px;
	width: 100%;
	position: relative;
	text-align: center;
	color: #fff;
	border: none;
	display: flex;
	background: #f40612;
	font-size: 1.625rem;
	min-height: 60px;
`;
const TabContentContainer = styled.div`
	background: black;
	border-bottom: solid 8px #222;
	.price-description {
		margin-top: -9px;
		font-size: 15px;
		text-align: left;
		padding-bottom: 40px;
		margin: -25px 30px 0;
	}

	.join-free {
		width: 40%;
		text-align: center;
		margin: 15px auto;
	}
	.price-container {
		h1 {
			font-size: 31px;
			margin-bottom: 30px;
		}
		width: 80%;
		padding: 7% 0 7%;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.price-image {
		width: 100%;
	}
	h1 {
		font-size: 3.5rem;
	}
	img {
		z-index: 1;
		width: 31rem;
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
