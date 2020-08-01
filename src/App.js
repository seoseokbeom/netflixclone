import React, { Component } from "react";
import StartPage from "./pages/index";
import MoviePage from "./pages/Movie";
import SignIn from "./pages/SignIn";
import SignIn1 from "./pages/Signin1";
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
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signin1" component={SignIn1} />
				</Switch>
			</Router>
		);
	}
}

export default App;
