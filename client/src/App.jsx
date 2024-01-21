import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/test";
import Landing from "./pages/landing";
import Store from "./pages/store";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
