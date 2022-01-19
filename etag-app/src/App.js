import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import ContactPage from "./Pages/ContactPage";
import HelpPage from "./Pages/HelpPage";
import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

// skjdhfksdf
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/productdetail" element={<ProductDetailsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
