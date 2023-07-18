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

// Loader Spinner
import { InfinitySpin } from "react-loader-spinner";

// Mui
import { Avatar } from "@mui/material";

// function
import { fistename } from "../../js/function";

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

const CommentsHome = () => {
  const { data, loading, error } = useQuery(GET_COMMENTSHOME);

  if (error) return <div>error ...</div>;

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      id="swiper"
    >
      {!data && loading ? (
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            border: "0",
          }}
        >
          <InfinitySpin width="200" color="#666" />
        </SwiperSlide>
      ) : (
        <>
          {data.comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              {comment.avatar.url && (
                <Avatar
                  sx={{ width: "80px !important", height: "80px !important" }}
                >
                  <LazyLoadImage
                    width="100%"
                    height="100%"
                    src={comment.avatar.url}
                    effect="blur"
                    alt={comment.name}
                    id="lazy_img"
                  />
                </Avatar>
              )}
              {comment.avatar.url === null && (
                <Avatar
                  sx={{
                    width: "80px !important",
                    height: "80px !important",
                    bgcolor: "#f2f2f2",
                  }}
                >
                  {fistename(`${comment.name}`)}
                </Avatar>
              )}
              <h5 style={{ fontSize: "20px" }}>{comment.name}</h5>
              <p style={{ fontSize: "18px" }}>{comment.text}</p>
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
};

export default CommentsHome;
