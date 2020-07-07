import React from "react";
import Main from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Switch>
			<Route path="/" component={Main} />
		</Switch>
	);
}

export default App;
