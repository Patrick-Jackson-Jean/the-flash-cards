import './EditCard.css';
import React from 'react';
import {Link} from 'react-router-dom'

export default function EditCard ({submitEdit, newCard}) {
  return (
     <div className="delete">
      <Link to={"/"}>Cancel</Link>
      <p>Are you sure you would like to submit these changes?</p>
      <p>New Queston: {newCard.front}</p>
      <p>New Answer: {newCard.back}</p>
     <Link to={"/"}><button onClick={() => submitEdit(newCard)}>Yes</button></Link>
    </div>    
  );
}