import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import Meals from '../Meals/Meals'

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(
    () => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
      fetch(url).then(res => res.json()).then(data => setMeals(data.meals));
    },
    [searchText]
  );
  const searchFood = e => {
    setSearchText(e.target.value);
  };
  return (
    <div className="mt-4">
      <h3 className="fs-2 text-danger">Find the Food you want!!!</h3>
      <p>
        <input
          onChange={searchFood}
          className="search-input mt-3 w-50"
          type="text"
          placeholder="search your food"
        />
      </p>
      <br />
      <h3>
        Result Found: {meals?.length}
      </h3>
     <div className="meals-container">
     {meals.slice(0,9).map(meal => <Meals meal={meal} key={meal.idMeal} />)}
     </div>
    </div>
  );
};

export default Restaurant;
