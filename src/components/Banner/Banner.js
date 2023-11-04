import React from "react";

function Banner({ gameStatus, children }) {
	console.log(gameStatus);
	return (
		<div className={`${gameStatus} banner`}>
			<p>{children}</p>
		</div>
	);
}

export default Banner;
