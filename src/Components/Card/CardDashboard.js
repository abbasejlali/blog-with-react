import React, { useState, useEffect } from "react";

// Graph Ql
import { GET_POSTS_FOR_USER, GET_POST_SAVED_BY_USER } from "../GraphQl/query";
import { useMutation, useQuery } from "@apollo/client";
import { DEL_SAVE_POST } from "../GraphQl/mutation";

// Mui
import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

// React-router-dom
import { Link } from "react-router-dom";

const CardDashboard = (props) => {
  const {
    data: dataPostSaved,
    loading: loadingPostSaved,
    error,
  } = useQuery(GET_POST_SAVED_BY_USER, {
    variables: {
      slug_post_saved: props.savepost.slugPostSaved,
    },
  });

  //Delete SavePost Betting
  const [icon_bookmark, setIcon_bookmark] = useState(null);

  const [del_post, { data: datadelpost, loading: loading_del_post }] =
    useMutation(DEL_SAVE_POST);

  const [id_delete_post, setId_delete_post] = useState("");
  const handleDeletePost = async () => {
    try {
      const response2 = await del_post({
        variables: {
          slugPostSaved_delete: dataPostSaved.post.slug,
          emailPersonPost_delete: `${
            props.dataUser &&
            props.dataUser.person !== null &&
            props.dataUser.person.email
          }`,
        },
      });
      setId_delete_post(
        response2 &&
          response2.data.deleteManySavepostsConnection.edges[0].node.id
      );
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: dataGetSavePOST_Bet,
    loading: loadingGetPOST_Bet,
    refetch,
  } = useQuery(GET_POSTS_FOR_USER, {
    variables: {
      emailPersonPost_Betting: `${
        props.dataUser &&
        props.dataUser.person !== null &&
        props.dataUser.person.email
      }`,
    },
  });
  const removeHandeler = () => {
    setIcon_bookmark(false);
  };

  useEffect(() => {
    if (icon_bookmark !== null && !icon_bookmark) handleDeletePost();
  }, [icon_bookmark]);

  useEffect(() => {
    if (id_delete_post.length > 0) refetch();
  }, [id_delete_post]);

  if (loadingPostSaved) return <div>Loading...</div>;

  if (error) return <div>Error ...</div>;

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
                        dataPostSaved.post.title.length > 24
                          ? "#f2f2f2"
                          : "#fff"
                      }`,
                      borderRadius: "25px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: `${
                        dataPostSaved.post.title.length > 24 ? "#666" : "#fff"
                      }`,
                      borderRadius: "25px",
                    },
                  }}
                >
                  {dataPostSaved.post.title}
                </Typography>
              </CardContent>
            </Link>
            <CardActions>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                  color: "#666",
                  "&:hover": { backgroundColor: "#f2f2f2 !important" },
                }}
                onClick={removeHandeler}
              >
                حذف پست
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
};

export default CardDashboard;
