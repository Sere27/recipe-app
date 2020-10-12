import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import { Button } from "reactstrap";

const App = () => {
	const APP_ID = "21bbdb7c";
	const APP_KEY = "1ae4291cf7a9112c283d257db8eccb9b	";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		//sadeece counter değişince çalışcak boş olursa 1 kere
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		// fonksiyodna async olmalı async-await kullanacaksak
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log("data.hits", data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<Button className="search-button btn" type="submit">
					Search
				</Button>
			</form>
			{recipes.map((recipe) => (
				<Recipe
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					ingredients={recipe.recipe.ingredients}
				></Recipe>
			))}
		</div>
	);
};

export default App;
