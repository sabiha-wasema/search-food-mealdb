import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './MealDetail.css'

const MealDetail = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url).then(res => res.json()).then(data => setMeal(data.meals[0]));
  }, []);
  return (
    <div className='detail-container w-50 mx-auto'>
      <h1 className="text-success fs-1">
       <span className="text-danger"> {meal.strMeal} </span> Meal Details
      </h1>
      <div className="food-detail mt-5">
       <img src={meal.strMealThumb} alt="" />
        <h4>
          {meal.strMeal}
        </h4>
        <p>
          {meal.strInstructions?.slice(0, 100)}
        </p>
        <button className="more-details-button"><a href={meal.strYoutube}>Go Youtube</a></button>
      </div>
    </div>
  );
};

export default MealDetail;
