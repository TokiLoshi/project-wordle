import React from "react";
import Banner from "../Banner";

function LostBanner({ answer }) {
	return (
		<div>
			<Banner gameStatus='sad'>
				<p>Sorry, the correct answer is: {answer}</p>
			</Banner>
		</div>
	);
}

export default LostBanner;
