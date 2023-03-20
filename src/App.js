import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';


function App() {
  return (
   <BrowserRouter>
     <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/about' exact element={<About />}/>
      <Route path='/services' exact element={<Services />}/>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
