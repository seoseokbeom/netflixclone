import React, { Component } from "react";
import logo from "../../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
import "../../css/App.css";
import MoviePage from "../../pages/Movie";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

class Header extends Component {
	state = {};
	render() {
		return (
			<HeaderComponent className="header-container">
				<div className="overlay"></div>
				<div className="header-top">
					<Logo src={logo} />
					<Link className="signIn-btn" to="/redirect">
						Sign In
					</Link>
				</div>
				{/* Header Content */}
				<StoryCard>
					{/* <div className="header-content"> */}
					<HeroCard>
						<Title>Unlimited movies, TV shows, and more.</Title>
						<h2>Watch anywhere. Cancel at any time.</h2>
					</HeroCard>
					<EmailForm>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<EmailLockUp>
							<SimpleForm>
								<EmailInput placeholder="Email address" type="text" />
							</SimpleForm>
							<Link to="/redirect">
								<Button>TRY 30 DAYS FREE</Button>
							</Link>
							<p>Email is required.</p>
						</EmailLockUp>
					</EmailForm>
					{/* </div> */}
				</StoryCard>
				<Footer >

				</Footer>
			</HeaderComponent>
		);
	}
}

export default Header;

const Footer = styled.div`
position:relative;
width:100%;
height:20%;
	margin-top:200px 174px;
	background-color: red;

`;

const EmailLockUp = styled.div`
	p {
		text-align: left;
		margin: 0;
		padding: 10px;
		font-size: 15px;
		color: #ffa00a;
	}
	/* text-align: left;
	margin: 0; */
`;

const SimpleForm = styled.div``;

const EmailInput = styled.input`
	/* margin-bottom: 10px; */
	/* display: inline-flex; */
	/* padding: 0;
*/
	/* display: flex; */
	color: #8c8c8c;
	border-radius: 4px;
	font-size: 16px;
	margin: 0;
	float: left;
	position: relative;
	padding: 0 1em;
	width: 60%;
	background: #fff;
	max-width: 450px;
	height: 62px;
	margin-top: -2px;
	min-height: 60px;
`;

const Button = styled.button`
	/* float: left; */
	border-radius: 2px;
	align-items: center;
	justify-content: center;
	padding: 0 1em;
	width: 40%;
	position: relative;
	text-align: center;
	/* right: 0px; */
	color: #fff;
	border: none;
	display: flex;
	background: #f40612;
	font-size: 1.625rem;
	min-height: 60px;
`;

const StoryCard = styled.div`
	position: relative;
	width: 100%;
	padding: 75px 0;
	padding-bottom:180px;
	max-width: 950px;
	margin: 0 auto;

	text-align: center;
	z-index: 1;
`;

const HeroCard = styled.div`
	max-width: 640px;
	margin: 0 auto;
	h2 {
		font-weight: 80;
		margin: 1rem auto;
	}
`;

const Logo = styled.img`
	width: 134px;
	height: 44px;
	position: absolute;
	top: 25%;
	left: 10%;
	transform: translate(-50%, -50%);
`;

// Header Container
const HeaderComponent = styled.div`
	.signIn-btn {
		right: 0;
		margin: 1.125rem 3% 0;
		padding: 0.4275rem 1.0625rem;
		font-weight: 400;
		line-height: normal;
		border-radius: 0.1875rem;
		font-size: 1rem;
		background: var(--main-red);
		position: absolute;
		translate: transform(-50%, -50%);
		cursor: pointer;
		color: white;
		transition: background 0.2s ease-in;
		&:hover {
			background: var(--main-red-hover);
		}
	}

	.header-top {
		position: relative;
		height: 10rem;
		z-index: 1;
	}

	// Header Content
	.header-content {
		max-width: 550px;
		position: relative;
		margin: 4.5rem auto 0;
		display: flex;
		justify-content: center;
		align-content: center;
		text-align: center;
		flex-direction: column;
		z-index: 1;
	}
`;

// Main Title
const Title = styled.h1`
	max-width: 640px;
	margin: 0 auto;
	font-size: 3.125rem;
	@media only screen and (max-width: 1449px) and (min-width: 950px) {
		font-size: 3.125rem;
	}
`;

// Subtitle
const SubTitle = styled.h2`
	/* font-weight: 400; */
	font-size: 1.625rem;
	line-height: 1.25em;
	margin: 0 0 1.875rem;
	/* text-transform: uppercase; */
`;

const EmailForm = styled.ul`
	h3 {
		padding: 0 5%;
		font-weight: 50;
		@media only screen and (max-width: 1449px) and (min-width: 950px),
			only screen and (min-width: 1450px) {
			max-width: none;
			padding-bottom: 20px;
			font-size: 1.2rem;
		}
	}
`;
