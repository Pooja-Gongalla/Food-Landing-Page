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
      <Routes>
        <Route path="/home" element={<Home />} />
     
      <Route path="/about" element={<About />} />

        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;

