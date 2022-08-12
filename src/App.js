import "./App.css";
import React, { useEffect, useState } from "react";
import ListCards from "./components/ListCards/ListCards";
import EditCard from "./components/EditCard/EditCard";
import CreateCard from "./components/CreateCard/CreateCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
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
        <Router>
          <Routes>
            <Route path="/" element={<ListCards decks={decks} />} />
            <Route path="/EditCard" element={<EditCard />} />
            <Route path="/CreateCard" element={<CreateCard />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
