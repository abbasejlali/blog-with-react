import React from "react";

// Components
import Header from "../Layout/Header";
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";
import CardsHome from "../CardsHome/CardsHome";
import CommentsHome from "../Comments/CommentsHome";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideShow />
      <CategoryHome />
      <CardsHome categoryen="programming" categoryfa="برنامه نویسی" />
      <CardsHome categoryen="digital-world" categoryfa="دنیای دیجیتال" />
      <CardsHome categoryen="technology" categoryfa="تکنولوژی" />
      {/* <CommentsHome /> */}
      <Footer style={{ marginTop: "400px" }} />
    </div>
  );
};

export default Home;
