import "./FlashCard.css";
import React, { useState } from "react";
import { FiEdit, FiTrash2, FiCornerUpRight } from "react-icons/fi";
import { useNavigate, Link, Route, Routes } from "react-router-dom";

export default function FlashCard({ front, back, id, edit, deleteCard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newCard, setNewCard] = useState({ front, back, id });
  const navigate = useNavigate()
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
      <form onSubmit={(e) => {
        setIsEdit(false)
        edit(newCard, e)
        navigate("/")
        }}>
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
    <div className="card" >
      <div className="top-btn">
        <FiEdit onClick={() => setIsEdit(!isEdit)} className="card-btn"/>
        <FiCornerUpRight className="card-btn" onClick={() => setIsFlipped(!isFlipped)}/>
      </div>
      {!isEdit ? notEditing : beingEdited}
      <Link to="/DeleteCard"><FiTrash2 className="card-btn" onClick={() => deleteCard(id)}/></Link>
    </div>
  );
}
