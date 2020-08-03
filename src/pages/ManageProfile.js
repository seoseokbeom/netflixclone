import React, { Component } from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import Character from "../images/playMovie/netflixCharacter.png";
// import "../css/App.css";
import MoviePage from "../pages/Movie";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

class ManageProfile extends Component {
	state = {};
	render() {
		return (
			<div>
				<div className="overlay"></div>

				<AAA>
					<div className="header">
						<Logo src={logo} />
					</div>
				</AAA>
				<StoryCard>
					<div className="comment">Who's watching?</div>
					<ul className="choose-profile">
						<div className="margin">
							<Link to="/movie">
								<li className="profile">
									<div className="avatar-wrapper">
										{/* C:\Users\kakun\Desktop\netflixclone\src\images\playMovie\netflixCharacter.png */}
										<img src={Character} alt="Character" />
										{/* <img src="../images/playMovie/netflixCharacter.png" alt="" /> */}
									</div>
									<span className="profile-name">A</span>
								</li>
							</Link>
						</div>
						<div className="margin">
							{/* <a href="/movie"></a> */}
							<Link to="/movie">
								<li className="profile">
									<div className="avatar-wrapper">
										<img
											src="https://occ-0-3097-988.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41"
											alt=""
										/>
									</div>
									<span className="profile-name">A</span>
								</li>
							</Link>
						</div>
						<div className="margin">
							<Link to="/movie">
								<li className="profile">
									<div className="avatar-wrapper">
										<img
											src="https://occ-0-3097-988.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71"
											alt=""
										/>
									</div>
									<span className="profile-name">A</span>
								</li>
							</Link>
						</div>
						<div className="margin">
							<Link to="/movie">
								<li className="profile">
									<div className="avatar-wrapper">
										<img
											src="https://occ-0-3097-988.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSz8U4uC6_i0Fuc-oUrLQ-6_4cN4K_0kkS76utZWTEfAAFwG6TB09D0nSC1NqqtCJfckNvLVMajXBYjOSGc7zZi0Dx7z.png?r=b97"
											alt=""
										/>
									</div>
									<span className="profile-name">A</span>
								</li>
							</Link>
						</div>
					</ul>
					<div className="profiles"></div>
					<div className="button"></div>
					<HeroCard></HeroCard>
				</StoryCard>
			</div>
		);
	}
	0;
}

export default ManageProfile;

const Logo = styled.img`
	width: 92.5px;
	height: 31px;
	position: absolute;
	top: 50%;
	left: 10%;
	user-select: none;
	display: inline-block;
	vertical-align: middle;
	transform: translate(-50%, -50%);
	font-size: 25px;
	/* @media screen and (min-width: 950px) {
	} */
`;

const AAA = styled.div`
	position: relative;
	.header {
		position: relative;
		width: 100%;
		height: 70px;
		display: block;
		/* background-color: white; */
		/* border-bottom: solid rgb(230, 230, 230) 1px; */
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
	/* width: 100%; */
	padding: 35px 0;
	max-width: 950px;
	max-width: 80%;
	margin: 180px auto;
	height: 400px;
	text-align: center;
	z-index: 1;
	.comment {
		width: 100%;
		color: #fff;
		font-size: 3.5vw;
	}

	.choose-profile {
		/* text-align: center; */
		position: relative;
		/* align-items: center; */
		justify-content: center;
		display: flex;
		margin: 2em 0;
	}
	.margin {
		margin: 0 2vw 0 0;
	}
	.profile {
		/* margin: 0 2vw 0 0; */

		img {
			width: 10vw;
			max-width: 200px;
			min-width: 84px;
		}
	}

	.profile:hover {
		/* margin: 0 4vw; */
		img {
			border-style: solid;
			border-color: white;
		}

		.profile-name {
			color: white;
			font-weight: 200;
		}
	}

	.profile-name {
		line-height: 1.2em;
		min-height: 1.8em;
		color: grey;
		width: 100%;
		display: block;
		text-align: center;
		font-size: 1.3vw;
		margin: 0.6em 0;
	}

	.profile-icon {
		height: 10vw;
		width: 10vw;
		max-height: 200px;
		max-width: 200px;
		min-height: 84px;
		min-width: 84px;
		background-image: url(https://occ-0-3097-988.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41);
		text-align: center;
		/* width: 260px; */
	}
`;

const HeroCard = styled.div`
	max-width: 640px;
	margin: 0 auto;
	h2 {
		font-weight: 80;
		margin: 1rem auto;
	}
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
