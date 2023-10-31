import React from "react";

function InputForm() {
	const [placeholder, setPlaceholder] = React.useState("");
	function handleSubmit(placeholder) {
		event.preventDefault();
		console.log("We have a placeholder!", placeholder);
	}
	function updatePlaceholder() {
		console.log("Time to update the placeholder");
		setPlaceholder(event.target.value);
	}
	return (
		<div>
			<form
				className='guess-input-wrapper'
				onSubmit={() => handleSubmit(placeholder)}>
				<label htmlFor='guess-input'>Enter a guess:</label>
				<input
					type='text'
					id='guess-input'
					value={placeholder}
					onChange={(event) => updatePlaceholder(event.target.value)}
				/>
			</form>
			<p>{placeholder}</p>
		</div>
	);
}

export default InputForm;
