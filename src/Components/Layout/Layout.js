import React from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <React.Fragment>
        <Header />
        {children}
        <Footer style={{ marginTop: "400px" }} />
      </React.Fragment>
    </>
  );
};

export default Layout;
