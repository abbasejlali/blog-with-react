import React, { useState } from "react";

// Mui
import { Box, MobileStepper, Button } from "@mui/material";

//Styles
import styles from "./Slider.module.css";

// img
import { GET_COVERPHOTO } from "../GraphQl/query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const SlideShow = () => {
  const { data, loading, error } = useQuery(GET_COVERPHOTO);
  console.log(data);

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (error) return <div>error...</div>;
  if (loading) return <div>loading...</div>;
  return (
    <>
      <Box
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
          }}
        >
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
            />
          </Link>
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
      </Box>
    </>
  );
};

export default SlideShow;
