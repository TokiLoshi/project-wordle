import React from "react";

function InputForm({ handleSubmitGuess, gameStatus }) {
	const [placeholder, setPlaceholder] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuess(placeholder);
		setPlaceholder("");
	}
	const gameOver = gameStatus === "running" ? "keepgoing" : "visually-hidden";
	return (
		<div>
			<form className='guess-input-wrapper' onSubmit={handleSubmit}>
				<label htmlFor='guess-input' className={gameOver}>
					Enter a guess:
				</label>
				<input
					type='text'
					id='guess-input'
					value={placeholder}
					maxLength={5}
					minLength={5}
					title='5 letter word'
					pattern='[A-zA-Z]{5}'
					onChange={(event) => {
						const nextGuess = event.target.value;
						setPlaceholder(nextGuess.toUpperCase());
					}}
					className={gameOver}
				/>
			</form>
			<p>{placeholder}</p>
		</div>
	);
}

export default InputForm;
