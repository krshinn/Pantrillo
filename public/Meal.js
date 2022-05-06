import React, {useState, useEffect} from 'react';

export default function Meal({meal}) {
	const [imgUrl, setImgUrl] = useState("");
	
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc13f61c52a34390aca099bc71a28778&includeNutrition=false`
		)
		.then((response) => response.json())
		.then((data) => {
			setImgUrl(data.image);
		})
		.catch(() => {
			console.log("error");
		})
	}, [meal.id])
	
	return(
		<article>
			<h1>{meal.title}</h1>
			<img src={imgUrl} alt="recipe" />
			<ul className="instructions">
				<li>Preparation time: {meal.readyInMinutes} minutes.</li>
				<li>Number of servings: {meal.servings}</li>
			</ul>
			
			<a href={meal.sourceUrl}>Go to Recipe</a>
		</article>
	)
}