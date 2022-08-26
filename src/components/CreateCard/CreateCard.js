import './CreateCard.css';
import React, {useState} from 'react';

export default function CreateCard ({updateCard, id}) {
  console.log(id)
  return (
    <form className='create-card'>New Card
      <input name="front" onChange={(e) => updateCard(e, id)}placeholder='Question'/>
      <input name="back" onChange={(e) => updateCard(e, id)} placeholder='Answer'/>
    </form>
    );
}
