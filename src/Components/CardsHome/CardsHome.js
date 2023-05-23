import React from "react";

// Mui
import { Grid, Typography, Divider, Box, Skeleton } from "@mui/material";

// react-router-dom
import { Link } from "react-router-dom";

// Cpmponents
import CardElement from "../Card/CardElement";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTSCARDSHOME } from "../GraphQl/query";

// Styles
import styles from "./CardsHome.module.css";

const CardsHome = ({ categoryen, categoryfa }) => {
  const { data, loading, error } = useQuery(GET_POSTSCARDSHOME, {
    variables: { category: categoryen },
  });

  const lengthpost = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  if (error) return <div>Error ...</div>;
  return (
    <>
      <Box maxWidth="100%" mt={5} mb={8} className={styles.boxcards}>
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
            <Typography
              component="h2"
              color="#666"
              variant="h5"
              fontWeight="bold"
            >
              {categoryfa}
            </Typography>
            <Link style={{ color: "#666" }} to="blogs/category/programming">
              مطالب بیشتر
            </Link>
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
            {loading &&
              lengthpost.map((post) => (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  md={2.8}
                  sx={{ borderRadius: "10px" }}
                  className={styles.itemcard}
                  key={post.id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    mb={2}
                  >
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
                  </Box>
                  <Skeleton variant="rounded" width="100%" height={194} />
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                </Grid>
              ))}

            {!loading &&
              data.posts.map((post) => (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  md={2.8}
                  className={styles.itemcard}
                  key={post.id}
                >
                  <CardElement {...post} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardsHome;
