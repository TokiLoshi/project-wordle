import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	return (
		<>
			Put a game here!<div>Hello this is a div</div>
			<InputForm />
		</>
	);
}

export default Game;
