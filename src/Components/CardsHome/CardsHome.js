import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardsHome = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      xs={12}
      px="36px"
      my={5}
    >
      <Grid
        item
        xs={12}
        width="100%"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Typography component="h2" variant="h5" fontWeight="bold">
          برنامه نویسی
        </Typography>
        <Link to="blogs/category/programming">مطالب بیشتر</Link>
      </Grid>
      <Grid item xs={12} width="100%" my={3}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        card
      </Grid>
    </Grid>
  );
};

export default CardsHome;
