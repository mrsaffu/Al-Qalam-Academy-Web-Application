import React from "react";
import "./EventCard.css";
const EventCard = ({ img, heading, paragraph, hoeverText }) => {
  return (
    <div className="eCardCont">
      <img src={img} alt="" />
      <h1>{heading}</h1>
      <p data-hover={hoeverText}>{paragraph}</p>

      <button>Read More </button>
    </div>
  );
};

export default EventCard;
