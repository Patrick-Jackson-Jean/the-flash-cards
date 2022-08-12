import "./FlashCard.css";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function FlashCard({ front, back, id, edit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newCard, setNewCard] = useState({ front, back, id });
  console.log(front, back);
  // if the card is flipped, show the back of the card
  // otherwise, show the front of the card

  const notEditing = (
    <div className="card-body">
      <h5 className="card-front">{!isFlipped ? front : back}</h5>
    </div>
  );

  const handleEdit = (e) => {
    e.target.name === "front"
      ? setNewCard({ ...newCard, front: e.target.value })
      : setNewCard({ ...newCard, back: e.target.value });
  };

  const beingEdited = (
    <div className="card-body">
      <form onSubmit={(e) => edit(newCard, e)}>
      <h5 className="card-front">
        <input
          type="text"
          name="front"
          placeholder={front}
          onChange={(e) => handleEdit(e)}
        />
      </h5>
      <h5 className="card-back">
        <input
          type="text"
          name="back"
          placeholder={back}
          onChange={(e) => handleEdit(e)}
        />
      </h5>
      <button>Submit</button>
      </form>
    </div>
  );

  return (
    <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
      <FiEdit onClick={() => setIsEdit(!isEdit)} />
      {!isEdit ? notEditing : beingEdited}
    </div>
  );
}
