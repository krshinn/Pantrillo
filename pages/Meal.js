import React, {useState, useEffect} from 'react';

export default function Meal({meal}) {
	const [imgUrl, setImgUrl] = useState("");
	
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc278d39f926447f9f01c6c2a958f3be&includeNutrition=false`
		)
		.then((response) => response.json()) //response in json format
		.then((data) => {
			setImgUrl(data.image); //taking data image
		})
		.catch(() => {
			console.log("error");
		})
	}, [meal.id])
	
	return(
		<article class="meal-art">
			<h1>{meal.title}</h1>
			<img id="mealplanimg" src={imgUrl} alt="recipe" />
			<ul className="instructions">
				<li>Preparation time: {meal.readyInMinutes} minutes.</li>
				<li>Number of servings: {meal.servings}</li>
			</ul>
			
			<button class="meal-button" onClick={meal.sourceUrl}>Go to Recipe</button>
		</article>
	)
}