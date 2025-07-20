import React from "react";
import "./Button.css";
const Button = ({ name, addClass,onClick }) => {
  return (
    <>
      <button className={`buttonSec ${addClass}`} onClick={onClick}>{name}</button>
    </>
  );
};

export default Button;
