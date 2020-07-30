import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
import "../css/App.css";
import MoviePage from "../pages/Movie";
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
				<div className="header-top">
					<Logo src={logo} />
				</div>
				<LoginBody>
					<LoginContent>
						<h1>Sign In</h1>
						<div className="textb">
							<input type="text" required />
							<div className="placeholder">Username</div>
						</div>

						<div className="textb">
							<input type="text" required />
							<div className="placeholder">Password</div>
							<div className="show-password fas fa-eye-slash"></div>
						</div>
					</LoginContent>
				</LoginBody>
			</HeaderComponent>
		);
	}
}

export default Header;

const LoginContent = styled.div`
	@media only screen and (min-width: 740px) {
		min-height: 625px;
		padding: 60px 68px 40px;
		margin-bottom: 90px;
		background-color: rgba(0, 0, 0, 0.75);
		/* -webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column; */
		margin: 0;
		min-height: 515px;
		padding: 20px 0 30px;
		width: 100%;
	}
`;

const LoginBody = styled.div`
	@media only screen and (min-width: 740px) {
		margin: 0 auto -236px;
		min-height: 100vh;
		background-color: transparent;
		max-width: 450px;
	}
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
		font-weight: 50;
	}
`;
