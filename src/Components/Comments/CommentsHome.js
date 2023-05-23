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
import { MutatingDots } from "react-loader-spinner";

// Mui
import { Avatar } from "@mui/material";

// function
import { fistename } from "../../js/function";

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
      {loading ? (
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            border: "0",
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
        <>
          {data.comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              {comment.avatar.url && (
                <Avatar
                  alt={comment.name}
                  src={comment.avatar.url}
                  sx={{ width: "80px !important", height: "80px !important" }}
                />
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
