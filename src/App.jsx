import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
