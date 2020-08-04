// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap";
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.css";
// import Dropdown from "./components/moviePage/Dropdown";
// import "bootstrap/js/dist/dropdown";
import Dropdown3 from "./components/moviePage/Dropdown3";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
// import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<div>
		<App />
		{/* <App /> */}
	</div>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
