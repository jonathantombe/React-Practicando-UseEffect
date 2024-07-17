import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "./assets/Components/Home/Home";
import Counter from "./assets/Components/Counter/Counter";
import Timer from "./assets/Components/Timer/Timer";
import "./assets/Styles/styles.css";
import Login from "./assets/Components/Login/Login";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>{" "}
          <Link to="/timer">Timer</Link>
          <Link to= "/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
