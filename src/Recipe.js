import React from "react";
import { Col, Container, Row } from "reactstrap";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<Container>
			<Row>
				<Col>
					<div className={style.recipe}>
						<h1 className={style.h1}>{title}</h1>
						<ol className={style.ol}>
							{ingredients.map((ingredient) => (
								<li> {ingredient.text}</li>
							))}
						</ol>
						<p>Calories: {calories}</p>
						<img className={style.image} src={image} alt=""></img>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Recipe;
