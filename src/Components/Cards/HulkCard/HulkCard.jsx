import React, { useRef, useState } from "react";
import "./HulkCard.css";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Award, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HulkCard = ({ img, imgLogo, heading, paragraph, hcolor }) => {
  console.log(hcolor);

  let navigate = useNavigate();
  function nevigateTo() {
    navigate("/academics");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="Card2MainCont"
    >
      <img src={img} alt="" />

      <div className="cardLogo" style={{ "--hover-color": hcolor }}>
        <img src={imgLogo} alt="" />
        <h2>{heading} </h2>
      </div>

      <div className="cardParaGraph">
        <h4>{paragraph}</h4>

        <p>
          <u onClick={nevigateTo}>Learn More</u>
        </p>
      </div>
    </motion.div>
  );
};

export default HulkCard;
