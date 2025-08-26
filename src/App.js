import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';
import CreateAccount from './CreateAccount.jsx';
import Auction from './Auction.jsx';
import User from './User.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/auctions" element={<Auction />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;