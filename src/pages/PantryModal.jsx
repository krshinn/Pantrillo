import React from 'react'
import FoodDisplay from "./FoodDisplay";

export const PantryModal = ({showModal, setShowModalHelper, title, time, nutrition, prep, ingredients, imgSrc}) => {
	
	return <>
		<div id="recipe-overlay">
		<div id="recipe-modal">
		
			<div className="recipe-cont">
			
				<div classname="recipe-head">
					<div id="title">{title}</div>
					<div id="time">{time}</div>
				</div>
		  	
				<div className="recipe-img">
					<img id="imgSrc" src={imgSrc}></img>
					<div id="nutrition">{nutrition.map(item => item)}</div>
				</div>
		  	
				<div class="recipe-prep">
					<div id="pantry-ingredients">{ingredients.map(item => 		
										<div>
										<ul><li>{item}</li></ul>
										</div>)}
					</div>
					<div id="prep">{prep.map(item => 		
									<div id="prep-cont">
									{item}
									</div>)}
					</div>
				</div>
		  </div>
		  	<button id="close-recipe-modal" onClick={setShowModalHelper}>Back</button>
		</div>
		</div> 
		</>
	
};