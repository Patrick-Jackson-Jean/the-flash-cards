import "./App.css";
import React, { useState } from "react";
import FlashCard from "./components/FlashCard/FlashCard";
import ListCards from "./components/ListCards/ListCards";
import EditCard from "./components/EditCard/EditCard";
import NewCardsForm from "./components/NewCardsForm/NewCardsForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [newCards, setNewCards] = useState([
    { id: 1, front: "1 x 1 = ?", back: "1" },
    { id: 2, front: "2 x 2 = ?", back: "4" },
    { id: 3, front: "3 x 3 = ?", back: "9" },
  ]);

  const submitCards = (cards, e) => {
    e.preventDefault();
    console.log(cards);
    setNewCards([...newCards, cards]);
  };

  const submitEdit = (card, e) => {
    e.preventDefault();
    const cardToEdit = newCards.findIndex((c) => c.id === card.id);
    const newCardUpdate = newCards;
    newCardUpdate[cardToEdit] = card;
    setNewCards(newCardUpdate);
    console.log(card.id)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="header-link" to="/">
            <h1>The Flash Cards</h1>
          </Link>
          <Link className="header-link" to="/CreateCards">
            <p>Create New Cards</p>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<ListCards cards={newCards} submitEdit={submitEdit} />} />
          <Route path="/EditCard" element={<EditCard />} />
          <Route
            path="/CreateCards"
            element={<NewCardsForm submitCards={submitCards} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
