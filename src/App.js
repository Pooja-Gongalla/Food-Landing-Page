import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
       <About/>
       <Testimonial/>
       <Contact/>
    <Footer />

    </div>
  );
}

export default App;

