import React, { Component } from "react";
import "../css/App.css";
import fire from "../components/authentication/Fire";
import SignIn from "./SignIn";
// import Movie from "./Movie";
import ManageProfile from "./ManageProfile";

class SigninOrMovie extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
		this.authLnpmistener = this.authListener.bind(this);
	}

	componentDidMount() {
		console.log("---");
		this.authListener();
	}

	authListener() {
		fire.auth().onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				this.setState({ user });
				// localStorage.setItem("user", user.uid);
			} else {
				this.setState({ user: null });
				// localStorage.removeItem("user");
			}
		});
	}

	render() {
		return (
			<div className="App">
				{this.state.user ? <ManageProfile /> : <SignIn />}
			</div>
		);
	}
}

export default SigninOrMovie;
