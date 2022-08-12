import './App.css';
import React, {useState} from 'react';
import FlashCard from './components/FlashCard/Flashcard';
import ListCards from './components/ListCards/ListCards';
import EditCard from './components/EditCard/EditCard';
import CreateCard from './components/CreateCard/CreateCard';
import NewCardsForm from './components/NewCardsForm/NewCardsForm';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  const [newFormOpen, setNewFormOpen] = useState(false)
  const [newCards, setNewCards] = useState([])

  const changeFormVisibility = () => {
    setNewFormOpen(!newFormOpen)
  }
  const submitCards = (cards, e) => {
    e.preventDefault()
    console.log(cards)
    setNewCards([...newCards, cards])
    changeFormVisibility()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Flash Cards</h1>
        <button onClick={changeFormVisibility}>Add Cards</button>
      </header>
        {newFormOpen && <NewCardsForm closeNewForm={changeFormVisibility} submitCards={submitCards}/>}
    </div>
  );
}

export default App;
