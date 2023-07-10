import React from "react";

// Graph Ql
import { GET_POST_SAVED_BY_USER } from "../GraphQl/query";
import { useQuery } from "@apollo/client";

// Mui
import { Card, Grid, CardMedia, Typography, CardContent } from "@mui/material";

// React-router-dom
import { Link } from "react-router-dom";

const CardDashboard = ({ slugPostSaved }) => {
  const {
    data: dataPostSaved,
    loading: loadingPostSaved,
    error,
  } = useQuery(GET_POST_SAVED_BY_USER, {
    variables: {
      slug_post_saved: slugPostSaved,
    },
  });

  //   const { slug, coverphoto, title } = dataPostSaved.post;
  if (loadingPostSaved) return <div>Loading...</div>;

  if (error) return <div>Error ...</div>;

  //   if (!slugPostSaved) return <div>شما هیج پستی را سیو نکردید</div>;

  if (dataPostSaved && dataPostSaved.post)
    return (
      <>
        <Grid item xs={12} md={6} lg={3.2} xl={3} mb={2}>
          <Card
            sx={{
              maxWidth: "100%",
              width: "100%",
              boxShadow: "rgb(233 233 233) 0px 8px 24px",
            }}
          >
            <Link
              style={{ maxWidth: "100%", width: "100%" }}
              to={`/blogs/${dataPostSaved.post.slug}`}
            >
              <CardMedia
                component="img"
                height="150px"
                image={dataPostSaved.post.coverphoto.url}
                alt={dataPostSaved.post.title}
                sx={{ p: "6.4px", borderRadius: "10px" }}
              />
              <CardContent p={1} pb={0}>
                <Typography
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  color="#666"
                  fontSize="14px"
                  pb={1}
                  sx={{
                    whiteSpace: "nowrap",
                    overflowX: "scroll",
                    "&::-webkit-scrollbar": {
                      width: "80%",
                      height: "7px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: `${
                        dataPostSaved.post.title.length > 20
                          ? "#f2f2f2"
                          : "#fff"
                      }`,
                      borderRadius: "25px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: `${
                        dataPostSaved.post.title.length > 20 ? "#666" : "#fff"
                      }`,
                      borderRadius: "25px",
                    },
                  }}
                >
                  {dataPostSaved.post.title}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </>
    );
};

export default CardDashboard;
