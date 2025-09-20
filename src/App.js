import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ecommerce from "./pages/Ecommerce";
import FlappyBird from "./pages/FlappyBird";
import TamilOCR from "./pages/TamilOCR";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/ecommerce" element={<Ecommerce />} />
            <Route path="/projects/flappy-bird" element={<FlappyBird />} />
            <Route path="/projects/tamilocr" element={<TamilOCR />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;