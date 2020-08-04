import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
// import "popper.min.js ";
import $ from "jquery";
import Popper from "popper.js";
import React, { Component } from "react";
class Dropdown extends Component {
	render() {
		return (
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-danger dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Action
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="#">
						Separated link
					</a>
				</div>
			</div>
		);
	}
}

export default Dropdown;
