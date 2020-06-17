import React from "react";
import { render } from "react-dom";
// import CallbackStateChange from "./components/callback-state-change";
import WheelDynamicStop from "./components/WheelDynamicStop";

const App = () => {
	return <div className="container">
		<div className="row">
			<div className="col-12">
				<h1 className="text-center">GSAP React Base App</h1>
				<p className="lead">This features a series of answers for the React related questions in the GSAP Forums.</p>
				<hr />
			</div>
		</div>

		<WheelDynamicStop />
		{/* <CallbackStateChange /> */}
	</div>;
};

render(
	<App />, document.getElementById("root")
);
