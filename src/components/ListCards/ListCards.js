import "./ListCards.css";
import React from "react";
import FlashCard from "../FlashCard/FlashCard";

export default function ListCards({ cards, beginEdit, deleteCard }) {
  console.log(cards)
  const cardList = cards.map(({ front, back, id }) => {
    return <FlashCard key={id} front={front} back={back} id={id} edit={beginEdit} deleteCard={deleteCard}/>;
  });

  return (
    <div className="cards">{cardList}</div>
  );
}
