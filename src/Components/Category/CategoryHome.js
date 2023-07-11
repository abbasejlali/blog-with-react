import React, { useRef } from "react";

// Mui
import { Box, Typography, Grid } from "@mui/material";

// styles
import styles from "./CategoryHome.module.css";

// react-router-dom
import { Link } from "react-router-dom";

const CategoryHome = () => {
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
            bgcolor: "white",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "rgb(233 233 233) 0px 8px 24px",
            "&:hover": { boxShadow: "rgb(220 220 220) 0px 8px 24px" },
          }}
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
            bgcolor: "white",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "rgb(233 233 233) 0px 8px 24px",
            "&:hover": { boxShadow: "rgb(220 220 220) 0px 8px 24px" },
          }}
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
            bgcolor: "white",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "rgb(233 233 233) 0px 8px 24px",
            "&:hover": { boxShadow: "rgb(220 220 220) 0px 8px 24px" },
          }}
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
