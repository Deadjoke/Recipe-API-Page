import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import Product from "./../Product/Product";

export default function Allproducts() {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState(null);
  console.log("hello");

  async function getAllProducts() {
    if (categoryName) {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setMeals(data.meals);
    } else {
      let { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setMeals(data.meals);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [categoryName]);

  return (
    <>
      <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
        {meals?.map((meal) => (
          <Product key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {/* 👇 Without this, /categories/:categoryName won't render properly */}
      <Outlet />
    </>
  );
}
