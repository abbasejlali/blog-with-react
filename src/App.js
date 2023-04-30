import React from "react";

// react-router-dom
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:slug" element={<Blog />} />
    </Routes>
  );
}

export default App;
