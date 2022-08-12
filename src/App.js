import './App.css';
import React, {useState, useEffect} from 'react';
import FlashCard from './components/FlashCard/Flashcard';
import ListCards from './components/ListCards/ListCards';
import EditCard from './components/EditCard/EditCard';
import CreateCard from './components/CreateCard/CreateCard';
import NewCardsForm from './components/NewCardsForm/NewCardsForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      const response = await fetch("http://localhost:5000/decks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setDecks(data);
    }
    getDecks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Flash Cards</h1>
        <button onClick={changeFormVisibility}>Add Cards</button>
        <Router>
          <Routes>
            <Route path="/" element={<ListCards decks={decks} />} />
            <Route path="/EditCard" element={<EditCard />} />
            <Route path="/CreateCard" element={<CreateCard />} />
          </Routes>
        </Router>
      </header>
        {newFormOpen && <NewCardsForm closeNewForm={changeFormVisibility} submitCards={submitCards}/>}
    </div>
  );
}

export default App;
