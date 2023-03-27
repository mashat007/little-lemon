import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';


function App() {
  return (
   <BrowserRouter>
     <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/about' exact element={<About />}/>
      <Route path='/contact' exact element={<Contact />}/>
      <Route path='/signin' exact element={<Signin />}/>
      <Route path='/signup' exact element={<Signup />}/>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
