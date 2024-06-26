import React,{useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./assets/components/home/Home";
import Navbar from "./assets/components/navbar/Navbar";
import FavoriteContainer from "./assets/components/favorite/FavoriteContainer";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    
  <Router>
    <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
      <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/favorite" element={<FavoriteContainer  searchQuery={searchQuery}  />} />
      </Routes>
    </Router>
  );
}

export default App;
