import React from "react";

// Components
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";
import CardsHome from "../CardsHome/CardsHome";
import CommentsHome from "../Comments/CommentsHome";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideShow sx={{ backgroundColor: "red" }} />
      <CategoryHome />
      {/* <CardsHome categoryen="programming" categoryfa="برنامه نویسی" />
      <CardsHome categoryen="digital-world" categoryfa="دنیای دیجیتال" />
      <CardsHome categoryen="technology" categoryfa="تکنولوژی" /> */}
      {/* <CommentsHome /> */}
      <Footer />
    </div>
  );
};

export default Home;
