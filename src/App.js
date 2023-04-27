import React from "react";

// react-router-dom
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
