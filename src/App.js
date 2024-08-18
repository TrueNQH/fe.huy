import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/register/Register';
import Home from './components/Home/Home';
import DetailProduct from './components/DetailProduct/DetailProduct';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
