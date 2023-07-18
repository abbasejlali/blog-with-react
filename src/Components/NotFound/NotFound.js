import React from "react";

// Mui
import { Avatar, Grid, Typography, Box } from "@mui/material";

// Icons Mui
import EastIcon from "@mui/icons-material/East";

// Img
import Img from "../../asset/img/404.jpg";

//React-Router-dom
import { Link } from "react-router-dom";

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

const NotFound = () => {
  return (
    <>
      <Box maxWidth="100%">
        <Grid
          conteiner
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item xs={12} md={6} sx={{ width: "fit-content", mr: 2 }}>
            <LazyLoadImage
              width="100%"
              height="fit-content"
              src={Img}
              effect="blur"
              alt="NotFound Img"
              id="lazy_img"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: "fit-content" }}>
            <Typography
              component="h6"
              sx={{ width: "fit-content" }}
              variant="h5"
              color="#FF0000"
            >
              صفحه مورد نظر یافت نشد !!!
            </Typography>
            <Link
              style={{
                color: "#666",
                marginBottom: "16px",
                alignSelf: "flex-start",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#fff",
                boxShadow: "rgb(233 233 233) 0px 8px 24px",
                borderRadius: "4px",
                width: "fit-content",
                padding: "6px 12px",
                marginTop: "16px",
              }}
              to="/"
            >
              <EastIcon style={{ marginLeft: "4px" }} /> بازگشت به خانه
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NotFound;
