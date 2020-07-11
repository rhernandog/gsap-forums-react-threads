import React from "react";
import { render } from "react-dom";

import UpdateState from "./components/StateUpdate";

const App = () => {
	return <div className="container">
		<div className="row">
			<div className="col-12">
				<h1 className="text-center">GSAP React Base App</h1>
				<p className="lead">This features a series of answers for the React related questions in the GSAP Forums.</p>
				<hr />
			</div>
			<UpdateState />
		</div>
	</div>;
};

render(
	<App />, document.getElementById("root")
);
