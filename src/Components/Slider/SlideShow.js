import React, { useState } from "react";

// Mui
import { Box, MobileStepper, Button } from "@mui/material";

// icons

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
          borderRadius: "5px",
          boxShadow: "0 3px 6px 0 hsl(0deg 0% 51.8% / 15%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        mx="auto"
        my={10}
      >
        <Box
          width="100%"
          height="100%"
          sx={{
            borderRadius: "10px",
          }}
        >
          <Link to={`/blogs/${data.posts[activeStep].slug}`}>
            <img
              src={`${
                activeStep === activeStep &&
                data.posts[activeStep].coverphoto.url
              }`}
              alt={data.posts[0].title}
              width="100%"
              height="100%"
              sx={{
                borderRadius: "10px",
              }}
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
