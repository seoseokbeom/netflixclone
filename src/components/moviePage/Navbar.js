/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import netflixLogo from "../../images/playMovie/netflix-logo.png";

const leftLinks = ["Home", "TV Shows", "Movies", "Latest", "My List"];

/**
 * @function Navbar
 */
const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () =>
	// 		window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false);

	// 	const onScroll = window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", onScroll);
	// 	};
	// }, []);

	return (
		<nav
			css={[
				NavbarCSS,
				scrolled
					? css`
							background-color: rgb(20, 20, 20);
							background-image: linear-gradient(
								to bottom,
								rgba(0, 0, 0, 0.7) 10%,
								rgba(0, 0, 0, 0)
							);
					  `
					: css`
							background: transparent;
					  `,
			]}
		>
			<ul>
				<li>
					<a href="/">
						<img height="75" src={netflixLogo} />
					</a>
				</li>
				{/* 
				{leftLinks.map((link) => (
					<li key={link}>
						<a href="/">{link}</a>
					</li>
				))} */}
			</ul>

			<ul className="right">
				{/* <li>
					<a href="/">
						<i className="fa fa-search" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="/">
						<i className="fa fa-bell-o" aria-hidden="true"></i>
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

const NavbarCSS = css`
	position: fixed;
	height: 68px;
	z-index: 99;
	width: 100%;
	padding: 0 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	ul {
		display: flex;
		align-items: center;
	}

	li {
		margin-right: 20px;
	}

	a {
		font-size: 15px;
		letter-spacing: 0.5px;
		color: #e5e5e5;
	}

	a.active {
		color: white;
		font-weight: 500;
	}

	ul.right {
		i {
			font-size: 22px;
		}
	}
`;

export default Navbar;
