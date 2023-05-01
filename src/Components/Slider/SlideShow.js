import React, { useState, useEffect } from "react";

// Mui
import {
  Box,
  MobileStepper,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";

//Styles
import styles from "./Slider.module.css";

// graphql
import { GET_COVERPHOTO } from "../GraphQl/query";
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

const SlideShow = () => {
  const { data, loading, error } = useQuery(GET_COVERPHOTO);

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // activeStep !== 8 &&
    //   setTimeout(() => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   }, 3000);
    // activeStep === 8 && setActiveStep(0);
  }, [activeStep]);

  if (error) return <div>error...</div>;
  if (loading) return;

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
      </Box>
    </>
  );
};

export default SlideShow;
