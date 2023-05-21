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
import { MutatingDots } from "react-loader-spinner";

const CardsHome = ({ categoryen, categoryfa }) => {
  const { data, loading, error } = useQuery(GET_POSTSCARDSHOME, {
    variables: { category: categoryen },
  });
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
              justifyContent: `${loading ? "center" : "space-between"}`,
              alignItems: `${loading ? "center" : "flex-start"}`,
              flexWrap: "wrap",
            }}
          >
            {loading ? (
              <MutatingDots
                height="100"
                width="100"
                color="#666"
                secondaryColor="#666"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              data.posts.map((post) => (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  md={3.8}
                  className={styles.itemcard}
                >
                  <CardElement key={post.id} {...post} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardsHome;
