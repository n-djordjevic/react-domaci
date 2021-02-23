import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <li className="card">
        <Link className="card-link" to={props.path}>
          <figure className="card-pic-wrap" data-category={props.label}>
            <img src={props.src} className="card-img" />
          </figure>
          <div className="card-info">
            <h5 className="card-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
