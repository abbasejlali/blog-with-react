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
  if (loading) return <div>Loading...</div>;
  return (
    <>
      {/* <Box
        container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "hidden",
          padding: "0 16px",
        }}
        mx="auto"
        mb={10}
        className={styles.box_slider}
      >
        <Box
          width="100%"
          height="100%"
          sx={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          {loading ? (
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              animation="wave"
              width="100%"
              height="100%"
            >
              <div style={{ width: "100%" }}></div>
            </Skeleton>
          ) : (
            <Link
              width="100%"
              height="100%"
              to={`/blogs/${data.posts[activeStep].slug}`}
              style={{ display: "flex" }}
            >
              <img
                src={`${
                  activeStep === activeStep &&
                  data.posts[activeStep].coverphoto.url
                }`}
                alt={data.posts[0].title}
                width="100%"
                height="100%"
                style={{ borderRadius: "10px", fitObject: "cover" }}
                onMouseDown={() => setActiveStep(activeStep + 1)}
              />
            </Link>
          )}
          <Box
            className={styles.title_box}
            p={1}
            sx={{ bgcolor: "white", borderRadius: "10px" }}
          >
            <Typography
              component="h6"
              color="#666"
              variant="h5"
              fontWeight="bold"
            >
              {data.posts[activeStep].title}
            </Typography>
          </Box>
        </Box>

        <MobileStepper
          variant="dots"
          steps={data.posts.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400 }}
          nextButton={
            <Button
              size="large"
              onClick={handleNext}
              disabled={activeStep === data.posts.length - 1}
              sx={{ color: "#666" }}
            >
              بعدی
            </Button>
          }
          backButton={
            <Button
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "#666" }}
            >
              قبلی
            </Button>
          }
        />
      </Box> */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.posts.map((post, index) => (
          <SwiperSlide key="post.id">
            <Link
              to={`/blogs/${data.posts[index].slug}`}
              style={{ display: "flex", width: "100%", height: "100%" }}
            >
              <img src={post.coverphoto.url} alt={post.title} />
              {/* {console.log(index)} */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
