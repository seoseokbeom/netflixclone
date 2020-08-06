import "./index.css";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import ProfileImg from "../../images/playMovie/netflixCharacter.png";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { DivideOutline } from "styled-icons/typicons";
import fire from "../authentication/Fire";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom"
function Dropdown3() {
	return (
		<div>
			{/* <NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} /> */}
			{/* icon={<CaretIcon />}  */}
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu></DropdownMenu>
			</NavItem>
		</div>
	);
}

function logout() {
	fire.auth().signOut();
}

// function Navbar(props) {
// 	return (
// 		<nav className="navbar">
// 			<ul className="navbar-nav">{props.children}</ul>
// 		</nav>
// 	);
// }

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li
			className="nav-item"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<a href="#" className="icon-button">
				{/* // onClick={() => setOpen(!open)} */}
				<span>
					<img src={ProfileImg} alt="ProfileImg" width="32px" />
				</span>
				<span>{props.icon}</span>
				{open && props.children}
			</a>
		</li>
	);
}

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	// function calcHeight(el) {
	// 	const height = el.offsetHeight;
	// 	setMenuHeight(height);
	// }

	function DropdownItem(props) {
		return (
			<a
				href="#"
				className="menu-item"
			// onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				{/* <span className="icon-button">{props.leftIcon}</span> */}
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}

	function logout() {
		return fire.auth().signOut().then(function () {
			// Sign-out successful.
		}).catch(function (error) {
			// An error happened.
		});
	}


	return (
		//style={{ height: menuHeight }}
		<div className="dropdown" ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
				onEnter="300px"
			>
				<div className="menu">
					<DropdownItem>Account</DropdownItem>
					<Link to="/manage" >
						<DropdownItem
							leftIcon={<CogIcon />}
							// rightIcon={<ChevronIcon />}
							goToMenu="settings"
						>
							Profile
					</DropdownItem>
					</Link>
					<Link to="/signin">
						<DropdownItem
							leftIcon="🦧"
							// rightIcon={<ChevronIcon />}
							goToMenu="animals"
							onClick={logout}
						>
							Sign out of netflix
						</DropdownItem>
					</Link>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
			// onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h2>My Tutorial</h2>
					</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "animals"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
			// onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h2>Animals</h2>
					</DropdownItem>
					<DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
					<DropdownItem leftIcon="🐸">Frog</DropdownItem>
					<DropdownItem leftIcon="🦋">Horse?</DropdownItem>
					<DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default Dropdown3;
