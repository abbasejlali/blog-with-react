import React, { useEffect, useState } from "react";

// react-router-dom
import { Routes, Route, useParams } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import CategorySlug from "./Components/Category/CategorySlug";
import Layout from "./Components/Layout/Layout";
import AuthorsSlug from "./Components/Authors/AuthorsSlug";

// scroll to top
import ScrollToTop from "./Components/shared/ScrollToTop";

function App() {
  const { slug } = useParams();
  useEffect(() => {
    console.log(slug);
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/blogs/category/:slug" element={<CategorySlug />} />
        <Route path="/authors/:slug" element={<AuthorsSlug />} />
      </Routes>
    </Layout>
  );
}

export default App;
