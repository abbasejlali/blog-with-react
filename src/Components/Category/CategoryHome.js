import React, { useEffect, useRef } from "react";

// Mui
import { Box, Typography, Grid } from "@mui/material";

// styles
import styles from "./CategoryHome.module.css";

// react-router-dom
import { Link } from "react-router-dom";

// Green Sock
import { gsap } from "gsap";

const CategoryHome = () => {
  const Itemone = useRef();
  const Itemtwo = useRef();
  const Itemthree = useRef();
  const tl = useRef();
  const App1 = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        Itemone.current,
        {
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          scrollTrigger: {
            trigger: "#boxcategory",
            start: "top center",
          },
        }
      )
      .fromTo(
        Itemtwo.current,
        {
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          scrollTrigger: {
            trigger: "#boxcategory",
            start: "top center",
          },
        }
      )
      .fromTo(
        Itemthree.current,
        {
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          scrollTrigger: {
            trigger: "#boxcategory",
            start: "top center",
          },
        }
      );
  }, []);
  return (
    <Box
      mb={5}
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
      className={styles.boxcategory}
      id="boxcategory"
      ref={App1}
    >
      <Typography
        component="h3"
        fontWeight="bold"
        xs={12}
        mb={5}
        variant="h5"
        color="#666"
      >
        دسته بندی
      </Typography>
      <Grid
        container
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={styles.grid_categoryhome}
      >
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          height="90px"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.04) !important",
            borderRadius: "10px",
          }}
          ref={Itemone}
        >
          <Link to="/blogs/category/programming">
            <Typography
              component="h4"
              variant="h6"
              fontWeight="bold"
              color="#666"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width="100%"
              height="100%"
            >
              برنامه نویسی
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          height="90px"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.04) !important",
            borderRadius: "10px",
          }}
          ref={Itemtwo}
        >
          <Link to="/blogs/category/digital-world">
            <Typography
              component="h4"
              variant="h6"
              color="#666"
              fontWeight="bold"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width="100%"
              height="100%"
            >
              دنیای دیجیتال
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          height="90px"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.04) !important",
            borderRadius: "10px",
          }}
          ref={Itemthree}
        >
          <Link to="/blogs/category/technology">
            <Typography
              component="h4"
              variant="h6"
              color="#666"
              fontWeight="bold"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width="100%"
              height="100%"
            >
              تکنولوژی
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryHome;
