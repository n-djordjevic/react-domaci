import React from "react";
import "./Cards.css";
import CardItem from "./Card";

function Cards() {
  return (
    <div className="cards">
      <h1>Our suggestions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="These books are the throwback readings you were assigned in English class"
              label="Classics"
              path="/library"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Action and adventure books constantly have you on the edge of your seat with excitement"
              label="Action"
              path="/library"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="The plot always revolves around a crime of sorts that must be solved"
              label="Mystery"
              path="/library"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Fantasy books include prominent elements of supernatural"
              label="Fantasy"
              path="/library"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Meant to cause discomfort and fear for both the character and readers"
              label="Horror"
              path="/library"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
