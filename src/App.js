import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn.jsx';
import Welcome from './pages/Welcome.jsx';
import './App.css'
import MealPlanner from './pages/MealPlanner.js';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/MealPlanner" element = {<MealPlanner />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;