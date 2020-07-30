import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
import "../css/App.css";
import Icon from "../components/moviePage/Icon";

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
							<Icon type="eye-slash" />
							{/* <div className="show-password fas fa-eye-slash"></div> */}
						</div>

						<div className="checkbox">
							<input type="checkbox" />
							<Icon type="check" />
							Remember me
							{/* <div className="fas fa-check"></div> */}
						</div>

						<a href="#">Need help?</a>
						<div>
							<h2>New to Netflix?</h2>
							<a href="#">Sign up now</a>
							<p>
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.
							</p>
						</div>
					</LoginContent>
					{/* <LoginContent>
						<h1>Sign In</h1>

						<div className="login-form">
							<div className="login-id">
								<div className="box">
									<label>
										<input type="text" />
										<label className="placeLabel">Email or phone number</label>
									</label>
								</div>
							</div>
							<div className="login-passwd">
								<div className="box"></div>
							</div>
						</div>
					</LoginContent> */}
				</LoginBody>
			</HeaderComponent>
		);
	}
}

export default Header;

const LoginContent = styled.div`
	min-height: 660px;
	@media only screen and (min-width: 740px) {
		min-height: 625px;
		padding: 60px 68px 40px;
		margin-bottom: 90px;
		background-color: rgba(0, 0, 0, 0.75);
		margin: 0;
		width: 100%;
	}

	color: #8c8c8c;
	margin: 0 auto;
	padding: 0 5%;

	h1 {
		color: #fff;
		padding-bottom: 30px;
		/* <z-index:2></z-index:2>; */
	}

	.textb {
		margin-bottom: 12px;
		position: relative;
	}

	.textb input {
		width: 100%;
		height: 45px;
		border: none;
		border-radius: 6px;
		background-color: #333;
		font-size: 16px;
	}

	.login-id {
		padding-bottom: 16px;
		max-width: 100%;
		font-size: 16px;
		display: block;
	}
	.login-passwd {
		padding-bottom: 16px;
	}

	.box {
		width: 100%;
		color: #fff;
		height: 50px;
		line-height: 50px;
		border-radius: 4px;
		padding: 16px 20px 0;
		background: #333;
	}

	.text {
		padding: 16px 20px 0;
	}

	.placeLabel {
		left: 20px;
		font-size: 16px;
		// position: absolute;
		// top: 50%;
		color: #8c8c8c;
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
	height: 45px;
	width: 167px;
	position: absolute;
	top: 50%;
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
		height: 90px;
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
