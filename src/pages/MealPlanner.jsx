import React, {useState} from "react";
import Nav from './index.jsx';
import MealList from "./MealList.jsx";
import Footer from "../components/Footer/Footer.jsx";

function MealPlanner() {
  const [mealData, setMealData] = useState(null); //set to null default
  const [calories, setCalories] = useState(2000); //set to 2000 default

  function handleChange(event) {
    setCalories(event.target.value); //function listens for event to set calories
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=dc13f61c52a34390aca099bc71a28778&timeFrame=day&targetCalories=${calories}`
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
    <div>
    <Nav />
      <div className="App">
        <div className="cont">
          <h1>Meal Planner</h1>
          <p>Make your day easier by letting our API plan your meals<br />
          Input the amount of calories you would like to consume and leave the rest to us</p>
          <input className="cal-input" type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange} />
        <button className="meal-button" onClick={getMealData}>Get Daily Meal Plan</button>
        {mealData && <MealList mealData={mealData} />}
        </div>
      </div>
      < Footer />
      </div>
  );
}

export default MealPlanner;