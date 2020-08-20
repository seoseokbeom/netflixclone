import React, { Component } from "react";
// import Header from "../components/moviePage/Header";
import Navbar from "../components/moviePage/Navbar";
import TitleMovie from "../components/moviePage/TitleMovie";
import { Global, css } from "@emotion/core";
import Row from "../components/moviePage/Row";
import requests from "../components/moviePage/requests";
import Footer from "../components/moviePage/Footer";
import ContentRow from "../components/moviePage/ContentRow";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

class MoviePage extends Component {
	constructor() {
		super();
		this.state = {
			user: true,
		};
		this.serviceClick = this.serviceClick.bind(this);
	}
	serviceClick = () => {
		this.setState({ serviceCode: "cTD2eZxfHqwxhMLX" });
	};
	render() {
		return (
			<MovieDiv>
				<Global styles={GlobalCSS} />
				<Navbar />
				<TitleMovie />
				<ContentRow />
				<Row
					title="NETFLIX ORIGINAL"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Footer
					serviceClick={this.serviceClick}
					serviceCode={this.state.serviceCode}
				/>
			</MovieDiv>
		);
	}
}

const MovieDiv = styled.div`
	overflow: hidden;
`;

const GlobalCSS = css`
	* {
		box-sizing: border-box;
		font-family: "Roboto", sans-serif;
	}
	html,
	body,
	.app {
		margin: 0;
		min-height: 100%;
		width: 100%;
	}
	body {
		background: #151515;
	}
	a {
		text-decoration: none;
		color: white;
	}
	p {
		font-size: 20px;
	}
	ul {
		margin: 0;
		list-style: none;
		padding: 0;
	}
	button {
		background-color: #d0d0d0;
		border: 0;
		padding-left: calc(3.6rem / 2);
		padding-right: calc(3.6rem / 2);
		padding-top: 0.6rem;
		padding-bottom: 0.6rem;
		border-radius: 0.25vw;
		box-shadow: none;
		font-size: 1.1vw;
		color: black;
		margin-right: 15px;
		cursor: pointer;
		font-weight: 600;
		letter-spacing: 0.4px;
	}
	.Icon {
		font-size: 18.5px;
		cursor: pointer;
		color: white;
	}
`;

export default MoviePage;
