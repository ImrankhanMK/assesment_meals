import React from "react";
import { useNavigate } from "react-router-dom";
import "../Meals/meals.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Meals(props) {
  console.log("data", props.data);
  const success = useNavigate();
  const showInst = (id) => {
    success("/mealins", { state: { id: id } });
  };
  return (
    <div className="meals">
      <div className="categories_meal">
        {props.data.meals ? (
          props.data.meals.map((item, i) => (
            <div key={i} className="item">
              <Card style={{ width: "15rem", height : "26rem" , margin : "5px"}}>
                <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                  <Card.Title>{item.strMeal}</Card.Title>
                  <Button variant="primary" onClick={(e, i) => showInst(item.idMeal)}>Instructions</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h1>Select Category</h1>
        )}
      </div>
    </div>
  );
}

export default Meals;
