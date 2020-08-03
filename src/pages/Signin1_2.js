import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
// import "../";
// import "../css/App.css";
import Icon from "../components/moviePage/Icon";
import { FaEyeSlash } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import MoviePage from "./Movie";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";
import "./Signin.css";

class Signin1_2 extends Component {
	render() {
		return (
			// <HeaderComponent className="header-container">
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
					<div className="contentContainer">
						<div className="logoContainer">
							<p>Step 1 of 3</p>
							<h1>Create a password to start your membership.</h1>
							<p>
								Just a few more steps and you're done! We hate paperwork, too.
							</p>
							<div className="textb">
								<input type="text" required />
								<div className="placeholder">Email or phone number</div>
							</div>

							<div className="textb">
								<input type="password" required />
								<div className="placeholder">Add a password</div>
							</div>
							<div className="remember">
								<input className="checkbox1" type="checkbox" />
								<div className="remember2">
									Yes, please email me Netflix special offers.
								</div>
							</div>
							<Link to="/manage">
								<Button>Continue</Button>
							</Link>
						</div>
					</div>
				</Content>
				<SiteFooter>
					<div className="footer-inside">
						<div className="question">Questions? Call 00-308-321-0161</div>
						<div className="footer_container">
							<a href="#">FAQ</a>
							<a href="#">Help Center</a>
							<a href="#">Terms of Use</a>
							<a href="#">Privacy</a>
						</div>
						<div className="footer_container">
							<a href="#">Cookie Preferences</a>
							<a href="#">Corporate Information</a>
							<a href="#">a</a>
							<a href="#">a</a>
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
const Button = styled.button`
	width: 100%;
	height: 48px;
	background-color: #e50914;
	padding: 12px 25px;
	color: white;
	text-transform: uppercase;
	min-height: 48px;
	font-weight: 400;
	/* margin-top: 17px; */
	font-size: 17px;
	border: none;
`;

const Content = styled.div`
	height: 487px;
	background-color: white;
	padding: 20px 32px 60px;
	margin: 0 95px 130px;

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
		/* border: none; */
		/* border-radius: 6px; */
		/* background-color: #333; */
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
		color: #9d9d9d;
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
	height: 400px;
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
	position: relative;
	.header {
		position: relative;
		width: 100%;
		height: 100px;
		display: block;
		/* background-color: white; */
		border-bottom: solid rgb(230, 230, 230) 1px;
	}

	.Signin {
		position: absolute;
		/* top: 50%; */
		font-weight: 700;
		font-size: 19px;
		/* line-height: 90px; */
		width: 75px;
		height: 90px;
		margin: 0 38px;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		top: 10px;
		color: #333;
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
