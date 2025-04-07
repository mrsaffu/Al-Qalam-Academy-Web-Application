import React from "react";
import "./Card.css";

const Card = ({ img, head, p1, p2, p3,p4,p5,name }) => {
  return (
    <div className="card ">
      <img src={img} alt="" />
      <div className="cardContent">
        <h1>{head}</h1>
        <h4>{name}</h4>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>
      </div>
    </div>
  );
};

export default Card;
