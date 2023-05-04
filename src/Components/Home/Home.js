import React from "react";

// Components
import Header from "../Layout/Header";
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";
import CardsHome from "../CardsHome/CardsHome";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideShow />
      <CategoryHome />
      <CardsHome />
    </div>
  );
};

export default Home;
