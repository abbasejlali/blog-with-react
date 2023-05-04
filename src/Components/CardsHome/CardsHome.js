import React from "react";

// Mui
import { Grid, Typography, Divider, Box } from "@mui/material";

// react-router-dom
import { Link } from "react-router-dom";

// Cpmponents
import CardElement from "../Card/CardElement";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTSCARDSHOME } from "../GraphQl/query";

// Styles
import styles from "./CardsHome.module.css";

const CardsHome = () => {
  const { data, loading, error } = useQuery(GET_POSTSCARDSHOME, {
    variables: { category: "programming" },
  });
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error ...</div>;
  return (
    <>
      <Box maxWidth="100%" my={5} className={styles.boxcards}>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          xs={12}
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
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {data.posts.map((post) => (
              <Grid item xs={12} sm={5.8} md={3.8} className={styles.itemcard}>
                <CardElement key={post.id} {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardsHome;
