import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these genres!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="card">
            <Card
              src="images/img-9.jpg"
              text="Explore the mysteriousness of these books"
              label="Mystery"
              path="/books"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
