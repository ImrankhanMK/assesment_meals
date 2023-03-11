import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../instructions/mealins.css'
import {useLocation } from "react-router";
import Card from "react-bootstrap/Card";

function MealInst(props) {

    const location = useLocation();
    const mealId = location.state.id;
    //state for managing meals instruction
    const [inst, setInst] = useState([]);

    // fetching meals discription by usingID
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((response) => response.json())
        .then((data) => setInst(data));
    },[])

    console.log(inst)
  return (
    <div>
        {inst?.meals ? (
            <div>
                <Link to="/" id="back_link">Back</Link>
                <Card style={{ width:"98%" , margin : "5px"}}>
                <Card.Img variant="top" style={{ width:"25rem",height : "20rem"}} src={inst.meals[0].strMealThumb} />
                <Card.Body>
                  <Card.Title>{inst.meals[0].strMeal}</Card.Title>
                  <Card.Title>{inst.meals[0].strArea}</Card.Title>
                  <Card.Text>{inst.meals[0].strInstructions}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            )
        : (<div>no instructions</div>)}
        
    </div>
  )
}

export default MealInst