import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Adjust the path as necessary
import TemplateSelector from "./pages/template"; // Adjust the path as necessary
import About from "./pages/about"; // Adjust the path as necessary
import Contact from "./pages/contact"; // Adjust the path as necessary
import Home from "./pages/home";
import Form from "./components/form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/template" element={<TemplateSelector />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
