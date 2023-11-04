import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	function handleSubmitGuess(newGuess) {
		setGuesses([...guesses, newGuess]);
	}

	return (
		<>
			<Guesses guesses={guesses} answer={answer} />
			<InputForm handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
