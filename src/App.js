import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About/About.js";
import Product from "./Components/Product/Product.js";
import Footer from "./Components/Footer/Footer.js";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Footer />
    </>
  );
}

export default App;
