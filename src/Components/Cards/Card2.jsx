import React, { useRef } from "react";
import "../Cards/Card2.css";

const Card2 = ({ img, imgLogo, heading, paragraph, hcolor }) => {
  console.log(hcolor);

  return (
    <div className="Card2MainCont">
      <img src={img} alt="" />

      <div className="cardLogo" style={{'--hover-color': hcolor }}>
        <img src={imgLogo} alt="" />
        <h2>{heading} </h2>
      </div>

      <div className="cardParaGraph">
        <h4>{paragraph}</h4>

        <p>
          <u>Learn More</u>
        </p>
      </div>
    </div>
  );
};

export default Card2;
