import React, { ReactElement } from "react";

function Loader(): ReactElement {
	return (
		<div className="lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Loader;