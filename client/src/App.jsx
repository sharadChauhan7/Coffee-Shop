import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";
import Test from "./pages/test";
import Landing from "./pages/landing";
import Store from "./pages/store";
import Product from "./pages/Product";
import Checkout from "./pages/checkout";
import React from "react";
import Privaterout from "./util/Privaterout";
import { ToastContainer } from "react-toastify";
import PaymentSuccess from "./pages/paymentsuccess";

import "react-toastify/dist/ReactToastify.css";

// Import axios

function App() {
  let { userId } = useParams();
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Store />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/user" element={<Privaterout />}>
            <Route path="product/:userId" element={<Product />} />
            <Route path='product/checkout' element={<Checkout />} />
            <Route path="test" element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
