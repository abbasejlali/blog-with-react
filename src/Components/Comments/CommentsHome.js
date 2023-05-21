import React from "react";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_COMMENTSHOME } from "../GraphQl/query";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Styles Swiper
import "swiper/css";
import "swiper/css/effect-cards";

import "./CommentsHome.css";

const CommentsHome = () => {
  // const [number, setNumber] = useState(1);

  // const numberplus = (e) => {
  //   setNumber(number + 1);
  //   if (number >= 3) {
  //     setNumber(() => number - 2);
  //   }
  // };
  // const numberminus = (e) => {
  //   setNumber(number - 1);
  //   if (number <= 1) {
  //     setNumber(() => number + 2);
  //   }
  // };

  const { data, loading, error } = useQuery(GET_COMMENTSHOME);
  console.log(data);

  if (loading) return <div>loading ...</div>;
  if (error) return <div>error ...</div>;
  return (
    // <section className={styles.about_main}>
    //   <div className={styles.about_textmain}>
    //     <div
    //       style={{
    //         zIndex: `${number === 1 ? "4" : "3"}`,
    //         transform: `${number === 1 ? "rotate(0deg)" : "rotate(4deg)"}`,
    //       }}
    //     >
    //       <h4>{data.posts[0].title}</h4>
    //       <h5>{data.posts[0].comments[0].name}</h5>
    //       <p>{data.posts[0].comments[0].text}</p>
    //     </div>
    //     <div
    //       style={{
    //         zIndex: `${number === 2 ? "4" : "2"}`,
    //         transform: `${number === 2 ? "rotate(0deg)" : "rotate(8deg)"}`,
    //       }}
    //     >
    //       <h4>{data.posts[0].title}</h4>
    //       <h5>{data.posts[0].comments[1].name}</h5>
    //       <p>{data.posts[0].comments[1].text}</p>
    //     </div>
    //     <div
    //       style={{
    //         zIndex: `${number === 3 ? "4" : "1"}`,
    //         transform: `${number === 3 ? "rotate(0deg)" : "rotate(12deg)"}`,
    //       }}
    //     >
    //       <h4>{data.posts[0].title}</h4>
    //       <h5>{data.posts[0].comments[2].name}</h5>

    //       <p>{data.posts[0].comments[2].text}</p>
    //     </div>

    //     <div>
    //       <button onClick={numberminus} style={{ zIndex: "999" }}>
    //         <ArrowForwardIcon />
    //       </button>
    //       <button onClick={numberplus} style={{ zIndex: "999" }}>
    //         <ArrowBackIcon />
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      id="swiper"
    >
      <SwiperSlide>
        <h4>{data.posts[0].title}</h4>
        <h5>{data.posts[0].comments[0].name}</h5>
        <p>{data.posts[0].comments[0].text}</p>
      </SwiperSlide>
      <SwiperSlide>
        <h4>{data.posts[0].title}</h4>
        <h5>{data.posts[0].comments[1].name}</h5>
        <p>{data.posts[0].comments[1].text}</p>
      </SwiperSlide>
      <SwiperSlide>
        <h4>{data.posts[0].title}</h4>
        <h5>{data.posts[0].comments[2].name}</h5>
        <p>{data.posts[0].comments[2].text}</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default CommentsHome;
