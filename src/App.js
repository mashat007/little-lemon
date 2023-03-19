import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Navbar';


function App() {
  return (
   <BrowserRouter>
     <div className="App">
      <Navbar />
    </div>
   </BrowserRouter>

  );
}

export default App;
