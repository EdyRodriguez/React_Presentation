import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Hobbies from './components/hobbies';
import Footer from './components/footer';
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar></Navbar>
    <About></About>
    <Hobbies></Hobbies>
    <Footer></Footer>
  </main>
  );
}

export default App;
