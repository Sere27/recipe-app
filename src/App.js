import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
	const APP_ID = "21bbdb7c";
	const APP_KEY = "1ae4291cf7a9112c283d257db8eccb9b	";

	const exapleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	return (
		<div className="App">
			<h1></h1>
		</div>
	);
};

export default App;
