import React from "react";
import "./Meals.css";
import { useNavigate } from "react-router-dom";

const Meals = props => {
  //   console.log(props);
  const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
  const navigate = useNavigate();
  const showDetails = () => {
    const path = `meals/${idMeal}`;
    navigate(path);
  };
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h4>
        {strMeal}
      </h4>
      <p>
        {strInstructions.slice(0, 100)}
      </p>
      <button onClick={showDetails} className="details-button">
        Details: {idMeal}
      </button>
    </div>
  );
};

export default Meals;
