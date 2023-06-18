import React from "react";

// react-router-dom
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import CategorySlug from "./Components/Category/CategorySlug";
import Layout from "./Components/Layout/Layout";
import AuthorsSlug from "./Components/Authors/AuthorsSlug";
import Login from "./Components/Login/Login";

// scroll to top
import ScrollToTop from "./Components/shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/blogs/category/:slug" element={<CategorySlug />} />
        <Route path="/authors/:slug" element={<AuthorsSlug />} />
      </Routes>
    </Layout>
  );
}

export default App;
