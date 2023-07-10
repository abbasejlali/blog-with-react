import React, { useState, useEffect, useRef } from "react";

// Mui
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  AvatarGroup,
  Box,
} from "@mui/material";

// react-ruoter-dom
import { Link } from "react-router-dom";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// js function
import { fistename, inceaseLike, sharePage } from "../../js/function";

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

// Graph Ql
import { useQuery, useMutation } from "@apollo/client";

import {
  GET_LIKES_for_user,
  GET_POSTS_FOR_USER,
  GET_POST_TO_LIKE,
  GET_USER,
} from "../GraphQl/query";

import {
  DEL_SAVE_LIKE,
  DEL_SAVE_POST,
  SAVELIKE_PUBLISHED,
  SAVEPOST_PUBLISHED,
  SAVE_LIKE,
  SAVE_POST,
  // UPDATEING_LIKE_POST,
} from "../GraphQl/mutation";

// react-loader-spinner
import { TailSpin } from "react-loader-spinner";

const CardElement = ({
  title,
  author,
  slug,
  coverphoto,
  comments,
  category,
  like,
}) => {
  // Get data in localStorage
  const email_login = JSON.parse(localStorage.getItem("info_User"));

  // Get User
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: `${email_login && email_login.email}` },
  });

  // savePost Betting
  const [icon_bookmark, setIcon_bookmark] = useState(null);

  const [
    add_post,
    { data: dataPostSaved, loading: loadingPostSaved, error: errorPostSaved },
  ] = useMutation(SAVE_POST);

  const [data_add_post, setData_add_post] = useState("");
  const handleCreatePost = async () => {
    try {
      const response = await add_post({
        variables: {
          slugPostSaved: slug,
          emailPersonPost: `${
            data && data.person !== null && data.person.email
          }`,
        },
      });
      setData_add_post(response.data.createSavepost.id);
    } catch (error) {
      console.error(error);
    }
  };

  const [published_save_post, { data: datapublishpost }] = useMutation(
    SAVEPOST_PUBLISHED,
    {
      variables: {
        slug_published_post: slug,
        email_published_post: `${
          data && data.person !== null && data.person.email
        }`,
      },
    }
  );

  const [del_post, { data: datadelpost, loading: loading_del_post }] =
    useMutation(DEL_SAVE_POST);

  const [id_delete_post, setId_delete_post] = useState("");
  const handleDeletePost = async () => {
    try {
      const response2 = await del_post({
        variables: {
          slugPostSaved_delete: slug,
          emailPersonPost_delete: `${
            data && data.person !== null && data.person.email
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
        data && data.person !== null && data.person.email
      }`,
    },
  });

  // lick betting
  const [icon_like, setIcon_like] = useState(null);

  const [add_like, { data: dataLike, loading: loadingLike, error: errorLike }] =
    useMutation(SAVE_LIKE);

  const [data_add_like, setData_add_like] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await add_like({
        variables: {
          slugPostLiked: slug,
          emailPersonLike: `${
            data && data.person !== null && data.person.email
          }`,
        },
      });
      setData_add_like(response.data.createSaveLike.id);
    } catch (error) {
      console.error(error);
    }
  };

  const [published_save_like, { data: datapublish }] = useMutation(
    SAVELIKE_PUBLISHED,
    {
      variables: {
        slug_published: slug,
        email_published: `${data && data.person !== null && data.person.email}`,
      },
    }
  );

  const [del_like, { data: datadellike, loading: loading_del_like }] =
    useMutation(DEL_SAVE_LIKE);

  const [id_delete, setId_delete] = useState("");
  const handleDeleteLike = async () => {
    try {
      const response2 = await del_like({
        variables: {
          slugPostLiked_delete: slug,
          emailPersonLike_delete: `${
            data && data.person !== null && data.person.email
          }`,
        },
      });
      setId_delete(
        response2 &&
          response2.data.deleteManySaveLikesConnection.edges[0].node.id
      );
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: dataGetSaveLike_Bet,
    loading: loadingGetLike_Bet,
    refetch,
  } = useQuery(GET_LIKES_for_user, {
    variables: {
      emailPersonLike_Betting: `${
        data && data.person !== null && data.person.email
      }`,
    },
  });

  // The condition of increasing the number of likes

  // const [increase, setIncrease] = useState("");
  // const [updateing_like, { data: dataIncreaseLike }] = useMutation(
  //   UPDATEING_LIKE_POST,
  //   {
  //     variables: {
  //       quantity_like: `${increase && increase}`,
  //       slug_post: slug,
  //     },
  //   }
  // );

  const likeHandeler = (e) => {
    dataGetSaveLike_Bet &&
    dataGetSaveLike_Bet.saveLikes.find((item) => item.slugPostLiked === slug)
      ? setIcon_like(false)
      : setIcon_like(true);
  };

  useEffect(() => {
    if (!loadingGetLike_Bet)
      if (
        icon_like !== null &&
        icon_like &&
        dataGetSaveLike_Bet &&
        !dataGetSaveLike_Bet.saveLikes.find(
          (item) => item.slugPostLiked === slug
        )
      ) {
        console.log("add heart");
        // The condition of increasing the number of likes

        // const convert_to_num = parseInt(like);
        // const sum = convert_to_num + 1;
        // const convert_to_str = sum.toString();
        // if (convert_to_str) setIncrease(convert_to_str);
        handleSubmit();
      }

    if (
      icon_like !== null &&
      !icon_like &&
      dataGetSaveLike_Bet &&
      dataGetSaveLike_Bet.saveLikes.find((item) => item.slugPostLiked === slug)
    ) {
      console.log("delete heart");
      handleDeleteLike();
    }
  }, [icon_like]);

  useEffect(() => {
    !loadingGetLike_Bet &&
    dataGetSaveLike_Bet &&
    dataGetSaveLike_Bet.saveLikes.find((item) => item.slugPostLiked === slug)
      ? setIcon_like(true)
      : setIcon_like(false);
  }, [dataGetSaveLike_Bet]);

  // The condition of increasing the number of likes

  // useEffect(() => {
  //   console.log(increase);
  //   console.log(typeof increase);
  //   console.log(increase ? "true" : "false");
  //   if (increase) {
  //     console.log("okay");
  //     updateing_like();
  //     console.log(dataIncreaseLike && dataIncreaseLike);
  //   }
  //   // if (update_increase) updateing_like();
  // }, [increase]);

  useEffect(() => {
    if (id_delete.length > 0) refetch();
  }, [id_delete]);

  useEffect(() => {
    if (data_add_like.length > 0) {
      published_save_like();
      refetch();
    }
  }, [data_add_like]);

  return (
    <Card
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "rgb(233 233 233) 0px 8px 24px",
        "&:hover": { boxShadow: "rgb(220 220 220) 0px 8px 24px" },
        position: "relative",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.04)",
              marginLeft: "8px",
              width: 40,
              height: 40,
            }}
          >
            <LazyLoadImage
              width="100%"
              height="100%"
              src={author.image.url}
              effect="blur"
              alt={title}
              id="lazy_img"
            />
          </Avatar>
        }
        title={author.name}
      />
      <CardMedia width="100%" sx={{ p: 0.8 }} height="100%">
        <LazyLoadImage
          width="100%"
          height={194}
          src={coverphoto.url}
          effect="blur"
          alt={title}
          id="lazy_img"
        />
      </CardMedia>
      <Box
        sx={{
          position: "absolute",
          top: "83px",
          right: "10px",
          backgroundColor: "white",
          padding: "3px 5px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="span"
          variant="span"
          fontWeight="bold"
          fontSize="14px"
        >
          {category === "programming" && "برنامه نویسی"}
          {category === "digital-world" && "دنیای دیجیتال"}
          {category === "technology" && "تکنولوژی"}
        </Typography>
      </Box>
      <CardContent>
        <Link to={`blogs/${slug}`} style={{ color: "#666" }}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            component="h3"
            varianr="h5"
            fontWeight="bold"
          >
            {title}
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing sx={{ direction: "ltr" }}>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
        {!data ? (
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        ) : data.person !== null ? (
          <IconButton
            value={slug}
            onClick={likeHandeler}
            aria-label="add to favorites"
          >
            {!dataGetSaveLike_Bet && loadingGetLike_Bet ? (
              <TailSpin
                height="24"
                width="24"
                color="#666"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : dataGetSaveLike_Bet && icon_like ? (
              <FavoriteIcon sx={{ color: "#ff6347" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        ) : (
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        )}

        <IconButton
          aria-label="share"
          onClick={() => sharePage(title, `/blogs/${slug}`)}
        >
          <ShareIcon />
        </IconButton>
        {comments.length > 2 ? (
          <AvatarGroup
            total={comments.length}
            max={3}
            sx={{ direction: "ltr", marginLeft: "auto", width: 30, height: 30 }}
          >
            <Avatar
              src={`${
                comments[0].avatar !== null &&
                comments[0].avatar.url &&
                comments[0].avatar.url
              }`}
              sx={{
                bgcolor: "#f2f2f2",
                color: "#666",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                objectFit: "cover",
              }}
            >
              {comments[0].avatar === null && fistename(comments[0].name)}
            </Avatar>
            <Avatar
              src={`${
                comments[1].avatar !== null &&
                comments[1].avatar.url &&
                comments[1].avatar.url
              }`}
              sx={{
                bgcolor: "#f2f2f2",
                color: "#666",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                objectFit: "cover",
              }}
            >
              {comments[1].avatar === null && fistename(comments[1].name)}
            </Avatar>
          </AvatarGroup>
        ) : (
          comments.length >= 1 && (
            <AvatarGroup
              total={comments.length}
              max={1}
              sx={{
                direction: "ltr",
                marginLeft: "auto",
                width: 30,
                height: 30,
              }}
            >
              <Avatar
                src={`${
                  comments[0].avatar !== null &&
                  comments[0].avatar.url &&
                  comments[0].avatar.url
                }`}
                sx={{
                  bgcolor: "#f2f2f2",
                  color: "#666",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  objectFit: "cover",
                }}
              >
                {comments[0].avatar === null && fistename(comments[0].name)}
              </Avatar>
            </AvatarGroup>
          )
        )}

        {comments.length === 0 && (
          <Typography ml="auto" component="p" variant="p">
            بدون کامنت
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default CardElement;
