import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
	console.log(guesses);
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				<Guess key={num} value={guesses[num]} answer={answer} />
			))}
		</div>
	);
}

export default Guesses;
