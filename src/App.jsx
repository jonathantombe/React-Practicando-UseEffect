import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "./assets/Components/Home/Home";
import Counter from "./assets/Components/Counter/Counter";
import Timer from "./assets/Components/Timer/Timer";
import Login from "./assets/Components/Login/Login";
import DigitalClock from "./assets/Components/DigitalClock/DigitalClock";
import "./assets/Styles/styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>{" "}
          <Link to="/timer">Timer</Link>
          <Link to="/login">Login</Link>
          <Link to="/clock">Clock</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clock" element={<DigitalClock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
