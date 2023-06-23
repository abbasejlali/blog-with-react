import React from "react";

// Components
import SlideShow from "../Slider/SlideShow";
import CategoryHome from "../Category/CategoryHome";
import CardsHome from "../CardsHome/CardsHome";
import CommentsHome from "../Comments/CommentsHome";
import { useSelector } from "react-redux";

const Home = () => {
  const info_user = useSelector((state) => state.userState);
  return (
    <div>
      {console.log(info_user)}
      <SlideShow sx={{ backgroundColor: "red" }} />
      <CategoryHome />
      <CardsHome categoryen="programming" categoryfa="برنامه نویسی" />
      <CardsHome categoryen="digital-world" categoryfa="دنیای دیجیتال" />
      <CardsHome categoryen="technology" categoryfa="تکنولوژی" />
      <CommentsHome />
    </div>
  );
};

export default Home;
