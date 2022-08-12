import './CreateCard.css';
import React, {useState} from 'react';

export default function CreateCard ({updateCard}) {

  return (
    <form className='create-card'>New Card
      <input name="q" onChange={updateCard}placeholder='Question'/>
      <input name="a" onChange={updateCard} placeholder='Answer'/>
    </form>
    );
}
