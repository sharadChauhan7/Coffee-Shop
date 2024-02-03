import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import "./App.css";
import Test from "./pages/test";
import Landing from "./pages/landing";
import Store from "./pages/store";
import Product from "./pages/Product";
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


// Import axios

function App() {
  let {userId}=useParams();
  return (
    <>
      <ToastContainer />
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
