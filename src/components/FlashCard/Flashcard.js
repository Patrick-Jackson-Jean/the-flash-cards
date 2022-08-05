import "./FlashCard.css";
import React, { useEffect, useState } from "react";

export default function FlashCard() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    async function getDeck() {
      const response = await fetch(
        "http://localhost:5000/decks",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setDeck(data);
      setCard(data[cardIndex]);
    }
    getDeck();
  }, [cardIndex]);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">Hello!</p>
        <h5 className="card-front">{card.front}</h5>
        <h5 className="card-back">{card.back}</h5>
      </div>
    </div>
  );
}
