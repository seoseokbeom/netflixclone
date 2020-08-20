import Dropdown3 from "./components/moviePage/Dropdown3";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// https://github.com/seoseokbeom/netflixclone.git
// https://seoseokbeom.github.io/netflixclone/

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById("root")
);

serviceWorker.unregister();
