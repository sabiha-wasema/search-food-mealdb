import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import Meals from "./components/Meals/Meals";
import MealDetails from "./components/MealDetail/MealDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/:idMeal" element={<MealDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
