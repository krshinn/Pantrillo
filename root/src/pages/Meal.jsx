import React, {useState, useEffect} from 'react';

function Meal({meal}) {
	const [imgUrl, setImgUrl] = useState("");

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc13f61c52a34390aca099bc71a28778&includeNutrition=false`
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
				<li>Preparation time:</li>
					<ul id="macros">
						<li>{meal.readyInMinutes} minutes.</li>
					</ul><br/>
				<li>Number of servings:</li>
					<ul id="macros">
				    	<li>{meal.servings}</li>
					</ul>
			</ul>

			<button class="meal-button" onClick={meal.sourceUrl}>Go to Recipe</button>
		</article>
	)
}

export default Meal;