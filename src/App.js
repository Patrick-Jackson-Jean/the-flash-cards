import "./App.css";
import React, { useState } from "react";
// import FlashCard from "./components/FlashCard/FlashCard";
import { DeleteCard } from "./components/DeleteCard/DeleteCard";
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
  const [deleteId, setDeleteId] = useState()
  const [cardChange, setCardChange] = useState()
  // const navigate = useNavigate()
  const submitCards = (cards, e) => {
    e.preventDefault();
    const cardsWithIds = cards.map((card, ind) => {
      return {...card, id: newCards.length + ind + 1}
    })
    console.log(cardsWithIds);
    setNewCards([...newCards, ...cardsWithIds]);
    // navigate("/")
  };

  const submitEdit = (card) => {
    const cardToEdit = newCards.findIndex((c) => c.id === card.id);
    const newCardUpdate = newCards;
    newCardUpdate[cardToEdit] = card;
    setNewCards(newCardUpdate);
    console.log(card.id)
  }

  const deleteCard = (id) => {
    const cardsAfterDeletion = newCards
    const cardToDelete = newCards.findIndex(card => card.id === id)
    cardsAfterDeletion.splice(cardToDelete, 1)
    console.log(cardsAfterDeletion)
    setNewCards(cardsAfterDeletion)
    setDeleteId(id)
  }

  const setupDeleteId = (id) => {
    setDeleteId(id)
  }

  const setupCardChanges = (newCard, e) => {
    e.preventDefault()
    setCardChange(newCard)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="header-link" to="/">
            <h1>The Flash Cards</h1>
          </Link>
          <Link className="header-link" to="/CreateCards">
            <p className="create-btn">Create New Cards</p>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<ListCards cards={newCards} deleteCard={setupDeleteId} beginEdit={setupCardChanges} />} />
          <Route path="/EditCard" element={<EditCard newCard={cardChange} submitEdit={submitEdit} />} />
          <Route
            path="/CreateCards"
            element={<NewCardsForm submitCards={submitCards} />}
          />
          <Route path="/DeleteCard" element={<DeleteCard id={deleteId} deleteCard={deleteCard}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
