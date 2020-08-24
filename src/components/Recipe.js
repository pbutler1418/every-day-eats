import React, { Component } from "react";
import foods from "../assets/food_photo_files/foods";
import Card from "react-bootstrap/Card";

function Recipe() {
  console.log(foods);

  let foodItems =
    foods.length !== 0 &&
    foods.map((item, index) => {
      return (
        <div key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.directions}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  return (
    <>
      <h1>Recipes</h1>
      {foodItems}
    </>
  );
}
export default Recipe;
