import React from "react";

// react-router-dom
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import CategorySlug from "./Components/Category/CategorySlug";
import Layout from "./Components/Layout/Layout";
import AuthorsSlug from "./Components/Authors/AuthorsSlug";
import Login from "./Components/Login/Login";
import DashboardUser from "./Components/DashboardUser/DashboardUser";
import NotFound from "./Components/NotFound/NotFound";

// scroll to top
import ScrollToTop from "./Components/shared/ScrollToTop";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Provider store={store}>
        <ScrollToTop />
        {pathname === "/login" ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs/:slug" element={<Blog />} />
            <Route path="/blogs/category/:slug" element={<CategorySlug />} />
            <Route path="/authors/:slug" element={<AuthorsSlug />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blogs/:slug" element={<Blog />} />
              <Route path="/blogs/category/:slug" element={<CategorySlug />} />
              <Route path="/authors/:slug" element={<AuthorsSlug />} />
              <Route path="/dashboard" element={<DashboardUser />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        )}
      </Provider>
    </>
  );
}

export default App;
