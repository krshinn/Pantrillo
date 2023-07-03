import React, { useState, useEffect } from "react";
import Footer from '../components/Footer/Footer.jsx';
import Nav from '../pages/index.jsx';

function Mixology() {
	  const [cocktails, setCocktails] = useState([])

  function Search() {
		const searchBar = document.getElementById('search-bar')
			try {
				fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchBar.value)
				.then((results) => results.json())
				.then((data) => {
					  console.log("hello" + data.drinks)
			if(data.drinks === null) {
				document.getElementById('err').innerText = "Sorry, it looks like thats not available. Try something else."
							setCocktails([])
			} else {
				document.getElementById('err').innerHTML = ''
				setCocktails(data.drinks)
						}
					})
			  }
			catch(error) {
			  console.error(error)

			  }
			}
  return (
	<div>
		<Nav />
				<div className = "Appoli">
			<div className= "contain">
		<h1 className = "poison"> Learn a new drink 🍹 </h1>
		   <input id = "search-bar" placeholder = "wine, tonic, etc..." />
		   <button className = "mix-btn" onClick = {Search}> Search . . . </button>
		   <div id = "err"> </div>
			 {cocktails.map((drink) => {
				const {idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = drink;
				const ingredient = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5].filter(item => item !== null).join(', ')

		return (
		  <div key = {idDrink}>
			<h2 className = "drink"> {strDrink} </h2>
			<img className = "img" src = {strDrinkThumb} alt = {strDrink} />
			<h5 className = "category"> {strCategory} </h5>
			<h3 className = "drinkIngredient"> {ingredient} </h3>
			<p className = "drinkInstructions"> {strInstructions} </p>
		  </div>
		)
	  })}
	</div>
		</div>
		<Footer />
			</div>
  )
}


export default Mixology;
