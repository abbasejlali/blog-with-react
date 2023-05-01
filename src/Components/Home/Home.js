import React from "react";

// Components
import Header from "../Layout/Header";
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideShow />
      <CategoryHome />
    </div>
  );
};

export default Home;
