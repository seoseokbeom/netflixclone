import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
import "../css/App.css";
import Icon from "../components/moviePage/Icon";
import { FaEyeSlash } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import MoviePage from "../pages/Movie";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

// const FacebookLogo = styled(A)`
// 	color: blue;
// `;

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hidden: true,
		};
		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow() {
		this.setState({ hidden: !this.state.hidden });
	}
	render() {
		return (
			<HeaderComponent className="header-container">
				<div className="header-top">
					<Logo src={logo} />
				</div>
				<LoginBody>
					<LoginContent>
						<h1>Sign In</h1>
						{/* <FacebookBox /> */}
						<div className="textb">
							<input type="text" required />
							<div className="placeholder">Email or phone number</div>
						</div>

						<div className="textb">
							<input type={this.state.hidden ? "password" : "text"} required />
							<div className="placeholder">Password</div>
							<button onClick={this.toggleShow} className="FaEyeSlash">
								<FaEyeSlash color="white" size="18px" />
							</button>
							{/* <div >
							</div> */}
							{/* <Icon type="eye-slash" /> */}
							{/* <div className="show-password fas fa-eye-slash"></div> */}
						</div>
						<Link to="/movie">
							<button className="signin-btn">Sign In</button>
						</Link>

						<div className="remember">
							<input className="checkbox1" type="checkbox" />
							{/* <Icon type="check" /> */}
							<div className="remember2"> Remember me</div>

							<Link to="/signin1">
								<a className="help" href="#">
									Need help?
								</a>
							</Link>
							{/* <div className="fas fa-check"></div> */}
						</div>

						<div>
							<div className="facebook-login">
								<a href="#">
									<div className="icon-color">
										{/* <Icon color="#3b5998" type="facebook-square" /> */}
										<GrFacebook color="#3b5998" size="20px" />
									</div>
								</a>
								<div className="facebook-login2">Log with Facebook</div>
							</div>
							<div className="newtonetflix">
								<h2>New to Netflix?</h2>

								<Link to="/signin1">
									<a className="signupnow" href="#">
										Sign up now
									</a>
								</Link>
							</div>
							<p className="description">
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.
							</p>
						</div>
					</LoginContent>
				</LoginBody>
			</HeaderComponent>
		);
	}
}

export default Header;

const LoginContent = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	position: relative;
	z-index: 1000;

	min-height: 660px;
	@media only screen and (min-width: 740px) {
		min-height: 625px;
		padding: 60px 68px 40px;
		margin-bottom: 90px;
		background-color: rgba(0, 0, 0, 0.75);
		margin: 0;
		width: 100%;
	}

	/* color: #8c8c8c; */
	margin: 0 auto;
	padding: 0 5%;

	h1 {
		color: white;
		padding-bottom: 30px;
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
		font-weight: 500;
		color: white;
		padding: 14px 60px 0 20px;
	}

	.signin-btn {
		width: 100%;
		height: 45px;
		border-radius: 6px;
		background-color: #e50914;
		font-size: 16px;
		margin: 24px 0 12px;
		padding: 16px;
		text-align: center;
		color: white;
		font-weight: 700;
		opacity: 1;
		border: none;
	}

	.textb input:focus ~ .placeholder,
	.textb input:valid ~ .placeholder {
		/* left: 10px; */
		top: -9px;
		font-size: 10px;
		transition-duration: 0.2s;
	}

	.placeholder {
		/* text-transform: uppercase; */
		font-size: 14px;
		font-weight: 500;
		position: absolute;
		line-height: 45px;
		top: 0;
		left: 20px;
		color: #9d9d9d;
		user-select: none;
		pointer-events: none;
	}
	.FaEyeSlash {
		position: absolute;
		line-height: 20px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		top: 15px;
		right: 20px;
		pointer-events: fill;

		/* right: 0; */
	}

	.remember {
		position: relative;
		display: flex;
		margin-bottom: 50px;
		font-weight: 100;
		font-size: 13px;
	}

	.remember2 {
		color: #9d9d9d;
	}

	.checkbox1 {
		margin-right: 5px;
	}

	.help {
		position: absolute;
		right: 0;
	}

	.facebook-login {
		position: relative;
		display: flex;
	}
	.icon-color {
		/* color: #3b5998; */
		size: 20px;
	}

	.facebook-login2 {
		font-size: 13px;
		margin-left: 4px;
		line-height: 23px;
		margin-bottom: 20px;
		color: #9d9d9d;
	}

	.newtonetflix {
		position: relative;
		display: flex;
		/* justify-content: space-between; */
		margin-bottom: 20px;
	}
	h2 {
		position: relative;
		font-size: 16px;
		font-weight: 100;
		margin-right: 10px;
		color: #9d9d9d;
	}
	.signupnow {
		position: relative;
		line-height: 16px;
		/* top: 6px; */
		right: 0;
		font-size: 16px;
	}

	.description {
		font-size: 13px;
		color: #9d9d9d;
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
		/* color: white; */
	}
`;

const LoginBody = styled.div`
	z-index: 1;
	@media only screen and (min-width: 740px) {
		margin: 0 auto -236px;
		min-height: 100vh;
		/* background-color: transparent; */
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
// const Title = styled.h1`
// 	max-width: 640px;
// 	margin: 0 auto;
// 	font-size: 3.125rem;
// `;

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
