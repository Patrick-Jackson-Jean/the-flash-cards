import './NewCardsForm.css';
import React, { useState } from 'react';
import CreateCard from '../CreateCard/CreateCard';
import {BsPlusSquare} from 'react-icons/bs'

export default function NewCardsForm ({closeNewForm, submitCards}) {
  const [newCards, setNewCards] = useState([])
  const [currentCard, setCurrentCard] = useState(0)
  const updateCard = (e) => {

    const newCardData = newCards
    newCardData[currentCard] = {...newCardData[currentCard], [e.target.name]: e.target.value}
    console.log(newCardData, currentCard, newCardForms)
    setNewCards(newCardData)
  }
  const [newCardForms, setNewCardForms] = useState([<CreateCard updateCard={updateCard} key="0"/>])

  const addCard = () => {
    const newCardFormUpdate = [...newCardForms, <CreateCard updateCard={updateCard} key={newCards.length}/>]
    setNewCardForms(newCardFormUpdate)
    setCurrentCard(newCardFormUpdate.length - 1)
  }
  return (
    <form className='create-many-cards' onSubmit={(e)=> submitCards(newCards, e)}>
      <p className="close" onClick={closeNewForm}>X</p>
      {newCardForms}
      <BsPlusSquare className='add-card' onClick={addCard}/>
      <button>Submit Cards</button>
    </form>
    );
}