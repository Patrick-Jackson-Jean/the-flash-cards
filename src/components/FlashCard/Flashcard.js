import "./FlashCard.css";
import React, { useState } from "react";

export default function FlashCard(card) {
  const [isFlipped, setIsFlipped] = useState(false);

  // if the card is flipped, show the back of the card
  // otherwise, show the front of the card

  return (
    <div className="card" onClick={setIsFlipped(!isFlipped)}>
      <div className="card-body">
        <p className="card-text">Hello!</p>
        <h5 className="card-front">{!isFlipped ? card.front : card.back}</h5>
      </div>
    </div>
  );
}
