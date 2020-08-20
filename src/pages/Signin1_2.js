import React, { Component } from "react";
import logo from "../images/svg/logo.svg";
import styled from "styled-components";
import "../css/App.css";
import { Toaster, Intent } from "@blueprintjs/core";
import fire from "../components/authentication/Fire";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "../components/moviePage/Icon";
import { FaEyeSlash } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import Movie from "./Movie";
import ManageProfile from "../pages/ManageProfile";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";
import "./Signin.css";
toast.configure();

class Signin1_2 extends Component {
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
		this.signup = this.signup.bind(this);
		this.setCurrentUser = this.setCurrentUser.bind(this);
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
		const email = this.emailInput.value;
		const password = this.passwordInput.value;
		console.log(email, password);
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				this.setCurrentUser(user);
				this.setState({ authenticated: true, redirect: true });
			})
			.catch((error) => {
				console.log("sssssssss", error);
				toast.error(error.message);
			});
	}

	signup(e) {
		e.preventDefault();
		const email = this.emailInput.value;
		const password = this.passwordInput.value;
		console.log(email, password);
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((u) => {
				this.setCurrentUser(u);
				this.setState({ authenticated: true });
				toast.success("Thanks! Your account has been successfully created.");
				console.log("kkkkkkkk");
				console.log(u);
			})
			.catch((error) => {
				toast.error(error.message);
				console.log(error);
			});
	}

	render() {
		if (this.state.authenticated) {
			console.log("-------------------");
			return <ManageProfile />;
		}
		console.log("222222222222222222222");
		return (
			<div className="entire">
				<AAA>
					<div className="header">
						<Logo src={logo} />
					</div>
					<Link to="/signin">
						<a href="#" className="Signin">
							Sign in
						</a>
					</Link>
				</AAA>
				<SimpleContainer></SimpleContainer>
				<Content>
					<form
						onSubmit={(e) => {
							this.signup(e);
						}}
						ref={(form) => {
							this.loginForm = form;
						}}
						className="contentContainer"
					>
						<div className="logoContainer">
							<p>Step 1 of 3</p>
							<h1>Create a password to start your membership.</h1>
							<p>
								Just a few more steps and you're done! We hate paperwork, too.
							</p>

							<div className="textb">
								<input
									ref={(input) => {
										this.emailInput = input;
									}}
									onChange={this.handleChange}
									type="email"
									name="email"
									required
								/>
								<div className="placeholder">Email</div>
							</div>

							<div className="textb">
								<input
									ref={(input) => {
										this.passwordInput = input;
									}}
									onChange={this.handleChange}
									type={this.state.hidden ? "password" : "text"}
									name="password"
									required
								/>

								<div className="placeholder">Add a password</div>
							</div>
							<div className="remember">
								<input className="checkbox1" type="checkbox" />
								<div className="remember2">
									Yes, please email me Netflix special offers.
								</div>
							</div>

							<input
								type="submit"
								value="Continue"
								className="signup-btn"
							></input>
						</div>
					</form>
				</Content>
				<SiteFooter>
					<div className="footer-inside">
						<div className="question">Questions? Call 00-308-321-0161</div>
						<div className="footer_container">
							<a href="https://help.netflix.com/en/node/412" target="_blank">
								FAQ
							</a>
							<a href="https://help.netflix.com/en/" target="_blank">
								Help Center
							</a>
							<a
								href="https://help.netflix.com/legal/termsofuse"
								target="_blank"
							>
								Terms of Use
							</a>
							<a href="https://help.netflix.com/legal/privacy" target="_blank">
								Privacy
							</a>
						</div>
						<div className="footer_container">
							<a
								href="https://help.netflix.com/legal/privacy#cookies"
								target="_blank"
							>
								Cookie Preferences
							</a>
							<a href="https://help.netflix.com/en/node/2101" target="_blank">
								Corporate Information
							</a>
							<a href="#"></a>
							<a href="#"></a>
						</div>
						<div className="description">
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
							<a
								target="_blank"
								href="http://www.ftc.go.kr/www/bizCommView.do?key=232&apv_perm_no=2018300016930200431&pageUnit=10&searchCnd=bup_nm&searchKrwd=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&pageIndex=1"
							>
								Link to KFTC website
							</a>
						</div>
					</div>
				</SiteFooter>
			</div>
		);
	}
}

export default Signin1_2;

const Content = styled.div`
	height: 487px;
	background-color: white;
	padding: 20px 32px 60px;
	margin: 0 95px 130px;

	@media (max-width: 750px) {
		margin: 0 0 130px;
	}
	.signup-btn {
		width: 100%;
		height: 48px;
		background-color: #e50914;
		padding: 12px 25px;
		color: white;
		text-transform: uppercase;
		min-height: 48px;
		font-weight: 400;
		font-size: 17px;
		border: none;
	}

	.logoContainer {
		color: black;
		text-align: left;
		margin: 50px 0 20px;
		display: block;
		height: 200px;
		h1 {
			font-size: 22px;
			margin-bottom: 16px;
		}
		p {
			font-size: 17px;
			margin-bottom: 10px;
		}
	}
	.contentContainer {
		max-width: 460px;
		text-align: left;
		margin: 0 auto;
	}

	.textb {
		margin-bottom: 12px;
		position: relative;
	}

	.textb input {
		width: 100%;
		height: 54px;
		font-size: 16px;
		font-weight: 500;
		color: black;
		padding: 14px 60px 0 20px;
	}

	.textb input:focus ~ .placeholder,
	.textb input:valid ~ .placeholder {
		/* left: 10px; */
		top: -9px;
		font-size: 10px;
		transition-duration: 0.2s;
	}

	.remember {
		position: relative;
		display: flex;
		margin-bottom: 50px;
		font-weight: 100;
		font-size: 13px;
	}

	.remember2 {
		color: #808080;
	}

	.checkbox1 {
		margin-right: 5px;
	}

	.placeholder {
		/* text-transform: uppercase; */
		font-size: 14px;
		font-weight: 500;
		position: absolute;
		line-height: 54px;
		top: 0;
		left: 20px;
		color: #9d9d9d;
		user-select: none;
		pointer-events: none;
	}
`;

const SiteFooter = styled.div`
	padding: 30px 0 30px;
	/* height: 400px; */
	/* padding: 0 auto; */
	/* padding: 30px auto 0; */
	width: 100%;
	font-size: 1em;
	background-color: #f3f3f3;
	color: #757575;
	.footer-inside {
		width: 90%;
		margin: 0 auto;
	}
	.question {
		margin-bottom: 30px;
	}
	.footer_container {
		display: flex;
		justify-content: space-between;
		a {
			flex-basis: auto;
			width: 200px;
			/* text-align: left; */
			margin: 0 0 25px;
			padding: 0 12px 0 0;
			color: #757575;
		}
	}
	.description {
		a {
			color: #7141eb;
		}
		a:hover {
			text-decoration: underline;
		}
	}
`;

const SimpleContainer = styled.div`
	width: 100%;
	overflow: hidden;
	-webkit-tap-highlight-color: transparent;
	background: white;
`;

const Body = styled.div``;

const AAA = styled.div`
	display: flex;
	position: relative;
	border-bottom: solid rgb(230, 230, 230) 1px;
	.header {
		position: relative;
		width: 100%;
		height: 70px;
		display: block;
	}

	.Signin {
		position: relative;
		float: right;
		right: 0;
		border: none;
		margin: 14px 3%;
		height: 2rem;
		width: 100px;
		padding: 0.7rem 0.5rem;
		font-weight: 550;
		line-height: normal;
		border-radius: 0.1875rem;
		translate: transform(-50%, -50%);
		cursor: pointer;

		position: relative;
		font-weight: 700;
		font-size: 19px;
		color: #333;
	}
`;

const Logo = styled.img`
	position: relative;
	height: calc(40px);
	top: 10px;
	left: 5%;
`;
