import React, { useEffect, useLayoutEffect, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// graphql
import { GET_COVERPHOTO } from "../GraphQl/query";
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

// loader
import { MutatingDots } from "react-loader-spinner";

// gsap
import { gsap } from "gsap";

const SlideShow = () => {
  const { data, loading, error } = useQuery(GET_COVERPHOTO);
  const app = useRef();
  const img_main = useRef();

  if (error) return <div>error...</div>;
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        ref={app}
      >
        {loading ? (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MutatingDots
              height="100"
              width="100"
              color="#666"
              secondaryColor="#666"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </SwiperSlide>
        ) : (
          data.posts.map((post, index) => (
            <SwiperSlide key="post.id" ref={img_main}>
              <Link
                to={`/blogs/${data.posts[index].slug}`}
                style={{ display: "flex", width: "100%", height: "100%" }}
              >
                <img src={post.coverphoto.url} alt={post.title} />
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default SlideShow;
