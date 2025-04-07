import "./Card.css";

import "../Cards/Card1.css";
const Card1 = ({ img, head, p1, p2, p3,p4 ,name}) => {
  return (
    <div className="card1 ">
      <div className="cardContent1">
        <h1>{head}</h1>
        <h4>{name}</h4>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>

      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Card1;
