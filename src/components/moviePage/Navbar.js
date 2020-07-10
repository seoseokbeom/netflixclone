/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import netflixLogo from "../../images/playMovie/netflix-logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import Character from "../../images/playMovie/netflixCharacter.png";
const leftLinks = ["Home", "TV Shows", "Movies", "Latest", "My List"];

/**
 * @function Navbar
 */
const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () =>
			window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false);

		const onScroll = window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

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
							/* z-index: 1; */
					  `
					: css`
							/* background: transparent; */
					  `,
			]}
		>
			{/* <FaSearch /> */}
			<ul>
				<li>
					<a href="/">
						<img height="75" src={netflixLogo} />
					</a>
				</li>

				{leftLinks.map((link) => (
					<li key={link}>
						<a href="/">{link}</a>
					</li>
				))}
			</ul>

			<ul className="right">
				<li>
					<a href="/">
						{/* <i className="fa fa-search" aria-hidden="true"></i> */}

						<FaSearch size={20} />
					</a>
				</li>
				<li>
					<a href="/">
						<AiOutlineGift size={28} />
					</a>
				</li>
				<li>
					<a href="/">
						<BsFillBellFill size={24} />
					</a>
				</li>
				<li style={{ verticalAlign: "baseline" }}>
					<a href="/">
						<img src={Character} alt="Character" style={{ maxWidth: 30 }} />
						<GoTriangleDown height="30" className="svg" size={14} />
					</a>
				</li>
				{/* BsFillBellFill   */}
			</ul>
		</nav>
	);
};

const NavbarCSS = css`
	/* background: #000; */
	/* z-index: 100;
	background: #fff; */
	/* background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(255, 255, 255, 1) 75%
	); */
	/* background: transparent; */
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent),
		url("images/background.jpg");

	position: fixed;
	height: 68px;
	z-index: 99;
	width: 100%;
	padding: 0 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.svg {
		margin-bottom: 8px;
		margin-left: 10px;
	}

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
	}

	li {
		margin-right: 20px;
	}

	a {
		height: 100%;
		font-size: 15px;
		letter-spacing: 0.5px;
		color: #fff;
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
