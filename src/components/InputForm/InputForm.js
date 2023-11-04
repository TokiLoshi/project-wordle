import React from "react";

function InputForm({ handleSubmitGuess }) {
	const [placeholder, setPlaceholder] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuess(placeholder);
		setPlaceholder("");
	}
	return (
		<div>
			<form className='guess-input-wrapper' onSubmit={handleSubmit}>
				<label htmlFor='guess-input'>Enter a guess:</label>
				<input
					type='text'
					id='guess-input'
					value={placeholder}
					maxLength={5}
					minLength={5}
					title='5 letter word'
					pattern='[A-zA-Z]{5}'
					required
					onChange={(event) => {
						const nextGuess = event.target.value;
						setPlaceholder(nextGuess.toUpperCase());
					}}
				/>
			</form>
			<p>{placeholder}</p>
		</div>
	);
}

export default InputForm;
