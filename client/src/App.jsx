import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import "./App.css";
import Test from "./pages/test";
import Landing from "./pages/landing";
import Store from "./pages/store";
import Product from "./pages/Product";
import { useState,useEffect } from "react";

// Import axios

function App() {
  let {userId}=useParams();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:userId" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
