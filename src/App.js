import React from "react";

// react-router-dom
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Category from "./Components/Category/Category";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/blogs/category/:slug" element={<Category />} />
      </Routes>
    </Layout>
  );
}

export default App;
