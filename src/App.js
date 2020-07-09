import React, { Component } from "react";
import StartPage from "./pages/index";
import MoviePage from "./pages/Movie";
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
				</Switch>
			</Router>
		);
	}
}

export default App;
