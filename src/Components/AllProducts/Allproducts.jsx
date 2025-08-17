import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./../Product/Product";

export default function Allproducts() {
  const { categoryName } = useParams(); // get the category name from URL
  const [meals, setMeals] = useState(null);

  async function getAllProducts() {
    if (categoryName) {
      // fetch meals by category
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setMeals(data.meals);
    } else {
      // fetch all meals
      let { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setMeals(data.meals);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [categoryName]); // runs again when categoryName changes

  return (
    <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
      {meals?.map((meal) => (
        <Product key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

