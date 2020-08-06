import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
// import "../";
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
import "./Signin.css";

export class Signin1 extends Component {
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
							<div className="imgContainer">
								<img
									src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
									alt=""
								/>
							</div>

							<p>Step 1 of 3</p>
							<h1>Finish setting up your account.</h1>
							<p>
								Netflix is personalized for you. Create a password to watch
								Netflix on any device at any time.
							</p>
							<Link to="/signin1_2">
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

export default Signin1;
const Button = styled.button`
	width: 100%;
	height: 48px;
	background-color: #e50914;
	padding: 12px 25px;
	color: white;
	text-transform: uppercase;
	min-height: 48px;
	font-weight: 400;
	margin-top: 17px;
	font-size: 17px;
	border: none;
`;

const Content = styled.div`
	height: 487px;
	background-color: white;
	padding: 20px 32px 60px;
	margin: 0 95px 15px;

	.logoContainer {
		/* width: 260px; */
		/* width: 100%; */
		color: black;
		text-align: center;
		margin: 100px 0 20px;
		display: block;
		height: 200px;
		/* url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png) no-repeat 50% 50% */
		/* background: url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png)
			no-repeat 50% 50%; */
		.imgContainer {
			margin: 100px 0 20px;
		}
		img {
			text-align: center;
			width: 260px;
		}
		h1 {
			font-size: 22px;
			margin-bottom: 16px;
		}
		p {
			font-size: 17px;
		}
	}
	.contentContainer {
		max-width: 340px;
		text-align: center;
		margin: 0 auto;
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
