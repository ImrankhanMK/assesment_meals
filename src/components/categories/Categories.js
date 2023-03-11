import React, { useEffect, useState } from "react";
import axios from "axios";
import "../categories/categories.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meals from "../Meals/Meals";
import MealInst from "../instructions/MealInst";

function Categories() {
  //sate for managing category list
  const [categoriesList, setCategoriesList] = useState([]);

  //state for managing meals list
  const [mealList, setMealList] = useState([]);

  //function to show meals in category
  const mealInCat = async (categ) => {
    // console.log(categ);
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`
    );
    setMealList(data);
  };

  //function to fetch categoties from API
  const fetchCategories = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategoriesList(data);
  };

  //fetching meals list
  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categoriesList);

  return (
    <div className="categories">
      <div className="categories_outerdiv">
        <h1>Categories</h1>
        <div className="categories_innerdiv">
          {categoriesList.categories ? (
            categoriesList.categories.map((item, i) => (
              <div key={i}>
                <p onClick={(e, i) => mealInCat(item.strCategory)}>
                  {item.strCategory}
                </p>
              </div>
            ))
          ) : (
            <h1>No data</h1>
          )}
        </div>
    </div>
    <div className="router_div">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meals data={mealList} />}></Route>
          <Route path="/mealins" element={<MealInst />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
        
     

      
    </div>
  );
}

export default Categories;
