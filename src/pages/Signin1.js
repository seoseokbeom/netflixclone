import React, { Component } from "react";
import logo from "../svg/logo.svg";
// import {  } from "react-router-dom";
import styled from "styled-components";
// import "../";
// import "../css/App.css";
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
				<SiteFooter>Questions? Call 00-308-321-0161</SiteFooter>
			</div>
		);
	}
}

export default Signin1;
const SiteFooter = styled.div`
	margin: 0 auto;
	padding-top: 30px;
	width: 90%;
	font-size: 1em;
	color: #757575;
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
		background-color: white;
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
