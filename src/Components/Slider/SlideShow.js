import React, { useState, useEffect } from "react";

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

const SlideShow = () => {
  const { data, loading, error } = useQuery(GET_COVERPHOTO);
  console.log(data);
  // useEffect(() => {
  //   const filterPost = data.posts.filter((post) => {
  //     return post.id === "clgxuzyo12u9k0clho2n4ke6y";
  //     console.log(filterPost);
  //   });
  // }, []);

  if (error) return <div>error...</div>;
  // if (loading) return <div>Loading...</div>;
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
            <SwiperSlide key="post.id">
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
