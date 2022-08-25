import "./ListCards.css";
import React, { useState } from "react";
import FlashCard from "../FlashCard/FlashCard";

export default function ListCards({ cards, submitEdit, deleteCard }) {
  console.log(cards)
  const cardList = cards.map(({ front, back, id }) => {
    return <FlashCard key={id} front={front} back={back} id={id} edit={submitEdit} deleteCard={deleteCard}/>;
    // return <h2>{front} {back} {id}</h2>
  });

  //Deletes a single deck and refreshes the page. deckId is the id of the mapped deck
  const handleDeletecard = (cardId) => {
    const result = window.confirm(
      "Delete this deck? \n\n You will not be able to recover it."
    );

    // if we click "ok" on the prompt, it runs deletecard from the api utils.
    if (result) {
      // deletecard(cardId);
    }
  };

  return (
    <div className="cards">{cardList}</div>
  );
}
