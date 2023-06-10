import React from "react";

// Components
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";
import CardsHome from "../CardsHome/CardsHome";
import CommentsHome from "../Comments/CommentsHome";

const Home = () => {
  return (
    <div>
      <SlideShow sx={{ backgroundColor: "red" }} />
      <CategoryHome />
      <CardsHome categoryen="programming" categoryfa="برنامه نویسی" />
      <CardsHome categoryen="digital-world" categoryfa="دنیای دیجیتال" />
      <CardsHome categoryen="technology" categoryfa="تکنولوژی" />
      {/* <CommentsHome /> */}
    </div>
  );
};

export default Home;
