import React, { Component } from "react";
import StartPage from "./pages/index";
import MoviePage from "./pages/Movie";
import SignIn from "./pages/SignIn";
import SignIn1 from "./pages/Signin1";
import Signin1_2 from "./pages/Signin1_2";
import ManageProfile from "./pages/ManageProfile";
import SigninOrMovie from "./pages/SigninOrMovie";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/netflixclone" component={StartPage} />
					<Route exact path="/movie" component={MoviePage} />
					<Route exact path="/redirect" component={SigninOrMovie} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signin1" component={SignIn1} />
					<Route exact path="/signin1_2" component={Signin1_2} />
					<Route exact path="/manage" component={ManageProfile} />
				</Switch>
			</Router>
		);
	}
}

export default App;
