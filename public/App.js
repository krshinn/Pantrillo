import React, {useState} from "react";
import MealList from "./MealList";
// import FoodJoke from "./FoodJoke";
import './index.css';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  
  function handleChange(event) {
    setCalories(event.target.value);
  }
  
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=dc13f61c52a34390aca099bc71a28778&timeFrame=day&targetCalories=${calories}`
    )
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
      <section className="controls">
        <input
        type="number"
        placeholder="Calories (e.g. 2000)"
        onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
