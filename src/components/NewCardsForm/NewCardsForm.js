import './NewCardsForm.css';
import React, { useState } from 'react';
import CreateCard from '../CreateCard/CreateCard';
import {BsPlusSquare} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

export default function NewCardsForm ({closeNewForm, submitCards}) {
  const [newCards, setNewCards] = useState([])
  const [currentCard, setCurrentCard] = useState(0)
  const navigate = useNavigate()
  const updateCard = (e, id) => {

    const newCardData = newCards
    if (typeof newCardData[id] === "object") {
      newCardData[id] = {...newCardData[id], [e.target.name]: e.target.value}
    } else newCardData.push({[e.target.name]: e.target.value})
    console.log(newCardData, currentCard, newCardForms)
    setNewCards(newCardData)
  }
  const [newCardForms, setNewCardForms] = useState([<CreateCard updateCard={updateCard} key="0" id="0"/>])

  const addCard = () => {
    const newCardFormUpdate = [...newCardForms, <CreateCard updateCard={updateCard} key={String(newCards.length)} id={String(newCards.length)}/>]
    setNewCardForms(newCardFormUpdate)
    setCurrentCard(newCardFormUpdate.length - 1)
  }

  const handleSubmit = (e) => {
    submitCards(newCards, e)
    navigate("/")
  }
  return (
    <form className='create-many-cards' onSubmit={(e)=> handleSubmit(e)}>
      <Link to={"/"} className="close" onClick={closeNewForm}>X</Link>
      {newCardForms}
      <BsPlusSquare className='add-card' onClick={addCard}/>
      <button>Submit Cards</button>
    </form>
    );
}