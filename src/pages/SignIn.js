import React, { Component } from "react";
import logo from "../images/svg/logo.svg";
import styled from "styled-components";
import "../css/App.css";
import fire from "../components/authentication/Fire";
import Icon from "../components/moviePage/Icon";
import { FaEyeSlash } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { Toaster, Intent } from "@blueprintjs/core";
import Movie from "../pages/Movie";
import ManageProfile from "../pages/ManageProfile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

toast.configure();
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
			user: null,
			hidden: true,
			email: "",
			password: "",
			redirect: false,
		};
		this.toggleShow = this.toggleShow.bind(this);
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.setCurrentUser = this.setCurrentUser.bind(this);
		this.signup = this.signup.bind(this);
	}

	toggleShow(e) {
		e.preventDefault();
		this.setState({ hidden: !this.state.hidden });
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	setCurrentUser(user) {
		if (user) {
			this.setState(
				{
					user: user,
					authenticated: true,
				},
				console.log(this.state.user, this.state.authenticated)
			);
		} else {
			this.setState(
				{
					user: null,
					authenticated: false,
				},

				console.log(this.state.user, this.state.authenticated)
			);
		}
	}

	login(e) {
		e.preventDefault();
		console.log(e.target);
		const email = this.emailInput.value;
		const password = this.passwordInput.value;
		console.log(email, password);
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				this.setCurrentUser(user);
				toast.error("Login Succeded.");
				this.setState({ redirect: true });
			})
			.catch((error) => {
				toast.error(error.message);
			});
	}

	signup(e) {
		e.preventDefault();
		fire
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((u) => {
				console.log(u);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		if (this.state.authenticated) {
			return <ManageProfile />;
		}

		return (
			<HeaderComponent className="header-container">
				<div className="overlay"></div>
				<div className="header-top">
					<Logo src={logo} />
				</div>
				<form>
					<LoginBody>
						<LoginContent>
							<h1>Sign In</h1>
							<Toaster
								ref={(element) => {
									this.toaster = element;
								}}
							/>
							<div className="textb">
								<input
									value={this.state.email}
									ref={(input) => {
										this.emailInput = input;
									}}
									onChange={this.handleChange}
									type="email"
									name="email"
									required
								/>
								<div className="placeholder">Email or phone number</div>
							</div>

							<div className="textb">
								<input
									value={this.state.password}
									ref={(input) => {
										this.passwordInput = input;
									}}
									onChange={this.handleChange}
									type={this.state.hidden ? "password" : "text"}
									name="password"
									required
								/>
								<div className="placeholder">Password</div>
								<button
									onClick={(e) => this.toggleShow(e)}
									className="FaEyeSlash"
								>
									<FaEyeSlash color="white" size="18px" />
								</button>
							</div>
							<input
								onClick={(e) => {
									this.login(e);
								}}
								ref={(form) => {
									this.loginForm = form;
								}}
								type="submit"
								value="Submit"
								className="signin-btn"
							></input>
							<div className="remember">
								<input className="checkbox1" type="checkbox" />
								<div className="remember2"> Remember me</div>

								<Link to="/signin1">
									<a className="help" href="#">
										Need help?
									</a>
								</Link>
							</div>

							<div>
								<div className="facebook-login">
									<a href="#">
										<div className="icon-color">
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
									This page is protected by Google reCAPTCHA to ensure you're
									not a bot.
								</p>
							</div>
						</LoginContent>
					</LoginBody>
				</form>

				<Footer>
					<div className="container">
						<p className="footer-top">Question? Call 00-308-321-0161</p>
						<div className="footer_container">
							<a className="footer-item">Gift Card Terms</a>
							<a className="footer-item">Terms of Use</a>
							<a className="footer-item">Privacy Statement</a>
						</div>

						<div className="description2">
							<p>
								Netflix Services Korea Ltd. E-Commerce Registration Number: Je
								2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0161
								Representative: Reginald Shawn Thompson
							</p>
							<p>Email: korea@netflix.com Address: 20F,</p>
							<p>
								Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu,
								Seoul, 03161 Republic of Korea Hosted by: Amazon Web Services
								Inc.
							</p>
						</div>
					</div>
				</Footer>
			</HeaderComponent>
		);
	}
}

export default Header;
const Footer = styled.div`
	position: relative;
	width: 100%;
	height: 26.7%;
	// margin-top:200px 174px;
	background: rgba(0, 0, 0, 0.7);
	.container {
		max-width: 1000px;
		p {
			margin: 1rem 0 1.5em;
			line-height: 1.35em;
			font-size: 1.5em;
		}
		padding: 25px 0;
		margin: 0 auto;
		color: #757575;
	}

	.footer_container {
		display: flex;
		justify-content: space-between;
		a {
			flex-basis: auto;
			width: 200px;
			margin: 0 0 25px;
			padding: 0 12px 0 0;
			color: #757575;
		}
	}

	.description2 {
		font-size: 8px;
		a {
			color: #7141eb;
		}
		a:hover {
			text-decoration: underline;
		}
	}
`;
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
