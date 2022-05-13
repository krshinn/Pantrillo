import React, {useState} from "react";
import MealList from "./MealList";
import './MealPlanner.css';

function MealPlanner() {
  const [mealData, setMealData] = useState(null); //set to null default
  const [calories, setCalories] = useState(2000); //set to 2000 default
  
  function handleChange(event) {
    setCalories(event.target.value); //function listens for event to set calories
  }
  
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=dc278d39f926447f9f01c6c2a958f3be&timeFrame=day&targetCalories=${calories}`
    ) //search meal plan by day and passing in state of calories
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data)
    })
    .catch(() => {
      console.log("error")
    });
  }
  
  return (
    <div className="App">
      <div className="cont">
        <span className="title"><h1>Meal Planner</h1></span>
        <section className="controls">
        <input class="cal-input" type="number" 
        placeholder="Calories (e.g. 2000)" 
        onChange={handleChange} />
        </section>
      <button class="meal-button" onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
      </div>
    </div>
  );
}

export default MealPlanner;
