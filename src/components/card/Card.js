import React from "react";
import "../card/card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="cardContainer tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?`} className="img" />

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
