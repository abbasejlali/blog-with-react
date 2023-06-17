import React, { useRef, lazy, Suspense } from "react";

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

// Mui
import { Skeleton } from "@mui/material";
import { generate_rabndomnum } from "../../js/function";

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
        {loading && (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skeleton variant="rounded" width="100%" height="100%" />
          </SwiperSlide>
        )}
        {!loading &&
          data.posts
            .slice(
              `${Math.floor(Math.random() * 2) + 0}`,
              generate_rabndomnum(data.posts.length)
            )
            .map((post, index) => (
              <SwiperSlide key="post.id" ref={img_main}>
                <Link
                  to={`/blogs/${data.posts[index].slug}`}
                  style={{ display: "flex", width: "100%", height: "100%" }}
                >
                  {/* <img src={lazy(() => post.coverphoto.url)} alt={post.title} /> */}
                  <Suspense fallback={<div>Loading...</div>}>
                    {data && lazy(() => post.coverphoto.url)}
                  </Suspense>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
