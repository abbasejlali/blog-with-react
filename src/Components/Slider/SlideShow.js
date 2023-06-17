import React, { useRef } from "react";

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

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

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
                  <LazyLoadImage
                    width="100%"
                    height="100%"
                    src={post.coverphoto.url}
                    effect="blur"
                    id="lazy_img"
                  />
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
