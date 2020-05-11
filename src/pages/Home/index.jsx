import React, { useState } from "react";

const Home = () => {
	const [value, setValue] = useState("");

	const changeValue = (e) => {
		setValue(e.target.value);
	};

	const submitForm = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form>
				<label>
					Formulaire :
					<input
						type="text"
						value={value}
						onChange={changeValue}
						placeholder="Looking for job?"
					/>
				</label>
				<input type="submit" value="Valider" onSubmit={submitForm} />
			</form>
		</>
	);
};

export default Home;
