import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	function handleSubmitGuess(newGuess) {
		const nextGuesses = [...guesses, newGuess];
		setGuesses(nextGuesses);
		if (newGuess === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}
	const [gameStatus, setGameStatus] = React.useState("running");
	return (
		<>
			<Guesses guesses={guesses} answer={answer} />
			<InputForm
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus === "won" && <WonBanner numGuesses={guesses.length} />}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</>
	);
}

export default Game;
