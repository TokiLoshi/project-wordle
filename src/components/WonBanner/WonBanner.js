import React from "react";
import Banner from "../Banner";

function WonBanner({ numGuesses }) {
	return (
		<div>
			<Banner gameStatus='happy'>
				<p>
					Congratulations! You guessed the answer in{" "}
					{numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
				</p>
			</Banner>
		</div>
	);
}

export default WonBanner;
