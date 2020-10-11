import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const APP_ID = "21bbdb7c";
	const APP_KEY = "1ae4291cf7a9112c283d257db8eccb9b	";
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("effect has been run");
	});

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text"></input>
				<button className="search-button" type="submit">
					{" "}
					Search{" "}
				</button>
				<h1 onClick={() => setCounter(counter + 1)}> {counter}</h1>
			</form>
		</div>
	);
};

export default App;
