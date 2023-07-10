import React, { useEffect, useState } from "react";

// react router dom
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

// Graph Ql
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_POSTTOBLOG,
  GET_LIKES_for_user,
  GET_USER,
  GET_POSTS_FOR_USER,
} from "../GraphQl/query";
import {
  DEL_SAVE_LIKE,
  DEL_SAVE_POST,
  SAVELIKE_PUBLISHED,
  SAVEPOST_PUBLISHED,
  SAVE_LIKE,
  SAVE_POST,
} from "../GraphQl/mutation";

// Mui
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
  IconButton,
  Divider,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// icons Mui
import CircleIcon from "@mui/icons-material/Circle";
import WestIcon from "@mui/icons-material/West";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// Function convert En to Fa
import { generate_fa } from "../../js/function";

// COMPONENTS
import CommentBlog from "../Comments/CommentBlog";
import SendCommentBlog from "../Comments/SendCommentBlog";

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

// function share
import { sharePage } from "../../js/function";
import { TailSpin } from "react-loader-spinner";

// Customize Mui Textfield
const CssBox = styled(Box)({
  "& p": {
    textAlign: "justify !important",
    marginBottom: "24px",
  },
  "& h2 , & h2 , & h3 , & h5 , & h6 , & h4": {
    marginBottom: "8px",
  },
});

const Blog = () => {
  // Navigate
  const navigate = useNavigate();
  const location = useLocation();

  // Get Slug
  const { slug } = useParams();

  // MefiaQuery in Mui
  const theme = useTheme();
  const MatchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const MatchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const MatchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const boxXS = {
    ...(MatchesXS && {
      marginRight: "16px",
      marginLeft: "16px",
    }),
  };

  const boxSM = {
    ...(MatchesSM && {
      marginRight: "24px",
      marginLeft: "24px",
    }),
  };

  const boxMD = {
    ...(MatchesMD && {
      marginRight: "200px",
      marginLeft: "200px",
    }),
  };

  const boxdirectionXS = {
    ...(MatchesXS && {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
  };

  const boxdirectionSM = {
    ...(MatchesSM && {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }),
  };

  const paddingXS = {
    ...(MatchesXS && {
      padding: "16px",
    }),
  };
  const paddingSM = {
    ...(MatchesSM && {
      padding: "24PX",
    }),
  };

  const flexdirecXS = {
    ...(MatchesXS && {
      flexDirection: "column",
    }),
  };
  const flexdirecSM = {
    ...(MatchesSM && {
      flexDirection: "row",
    }),
  };

  // Get data
  const { loading, error, data } = useQuery(GET_POSTTOBLOG, {
    variables: { slug },
  });

  // Get data in localStorage
  const email_login = JSON.parse(localStorage.getItem("info_User"));

  // Get User
  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USER, {
    variables: { email: `${email_login && email_login.email}` },
  });

  // SavePost Betting
  const [icon_bookmark, setIcon_bookmark] = useState(null);

  const [add_post, { data: dataPostSaved }] = useMutation(SAVE_POST);

  const [data_add_post, setData_add_post] = useState("");
  const handleCreatePost = async () => {
    try {
      const response = await add_post({
        variables: {
          slugPostSaved: slug,
          emailPersonPost: `${
            dataUser && dataUser.person !== null && dataUser.person.email
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
          dataUser && dataUser.person !== null && dataUser.person.email
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
            dataUser && dataUser.person !== null && dataUser.person.email
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
    refetch: refetchSavePost,
  } = useQuery(GET_POSTS_FOR_USER, {
    variables: {
      emailPersonPost_Betting: `${
        dataUser && dataUser.person !== null && dataUser.person.email
      }`,
    },
  });

  const SavePostHandeler = (e) => {
    dataGetSavePOST_Bet &&
    dataGetSavePOST_Bet.saveposts.find((item) => item.slugPostSaved === slug)
      ? setIcon_bookmark(false)
      : setIcon_bookmark(true);
  };

  useEffect(() => {
    if (!loadingGetPOST_Bet)
      if (
        icon_bookmark !== null &&
        icon_bookmark &&
        dataGetSavePOST_Bet &&
        !dataGetSavePOST_Bet.saveposts.find(
          (item) => item.slugPostSaved === slug
        )
      ) {
        console.log("add bookmark");
        handleCreatePost();
      }

    if (
      icon_bookmark !== null &&
      !icon_bookmark &&
      dataGetSavePOST_Bet &&
      dataGetSavePOST_Bet.saveposts.find((item) => item.slugPostSaved === slug)
    ) {
      console.log("delete bookmark");
      handleDeletePost();
    }
  }, [icon_bookmark]);

  useEffect(() => {
    !loadingGetPOST_Bet &&
    dataGetSavePOST_Bet &&
    dataGetSavePOST_Bet.saveposts.find((item) => item.slugPostSaved === slug)
      ? setIcon_bookmark(true)
      : setIcon_bookmark(false);
  }, [dataGetSavePOST_Bet]);

  useEffect(() => {
    if (id_delete_post.length > 0) refetchSavePost();
  }, [id_delete_post]);

  useEffect(() => {
    if (data_add_post.length > 0) {
      published_save_post();
      refetchSavePost();
    }
  }, [data_add_post]);

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
        email_published: `${
          dataUser && dataUser.person !== null && dataUser.person.email
        }`,
      },
    }
  );

  const [del_like, { data: datadellike, loading: loading_del_like }] =
    useMutation(DEL_SAVE_LIKE);

  const [id_delete, setId_delete] = useState("");
  const handleDelete = async () => {
    try {
      const response2 = await del_like({
        variables: {
          slugPostLiked_delete: slug,
          emailPersonLike_delete: `${
            dataUser && dataUser.person !== null && dataUser.person.email
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
        dataUser && dataUser.person !== null && dataUser.person.email
      }`,
    },
  });

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
        handleSubmit();
      }

    if (
      icon_like !== null &&
      !icon_like &&
      dataGetSaveLike_Bet &&
      dataGetSaveLike_Bet.saveLikes.find((item) => item.slugPostLiked === slug)
    ) {
      console.log("delete heart");
      handleDelete();
    }
    console.log(icon_like);
  }, [icon_like]);

  useEffect(() => {
    !loadingGetLike_Bet &&
    dataGetSaveLike_Bet &&
    dataGetSaveLike_Bet.saveLikes.find((item) => item.slugPostLiked === slug)
      ? setIcon_like(true)
      : setIcon_like(false);
  }, [dataGetSaveLike_Bet]);

  useEffect(() => {
    if (id_delete.length > 0) refetch();
  }, [id_delete]);

  useEffect(() => {
    if (data_add_like.length > 0) {
      published_save_like();
      refetch();
    }
  }, [data_add_like]);

  if (error) return <div>error</div>;

  if (loading) return <div>loading</div>;

  return (
    <React.Fragment>
      <Box
        component="article"
        sx={{
          ...boxXS,
          ...boxSM,
          ...boxMD,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          ...paddingXS,
          ...paddingSM,
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "10px",
        }}
      >
        <Box
          maxWidth="100%"
          mb={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            component="h2"
            color="#666"
            variant="h6"
            fontWeight="bolder"
          >
            {data.post.title}
          </Typography>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{ fontSize: "30px", color: "#666" }}
          >
            <WestIcon />
          </IconButton>
        </Box>
        <Avatar sx={{ width: "100%", height: "360px", borderRadius: "10px" }}>
          <LazyLoadImage
            width="100%"
            height="100%"
            src={data.post.coverphoto.url}
            effect="blur"
            alt={data.post.title}
            id="lazy_img"
          />
        </Avatar>
        <List
          sx={{
            ...flexdirecXS,
            ...flexdirecSM,
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <ListItem disablePadding sx={{ width: "fit-content", mr: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pr: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText primary={data.post.date} sx={{ color: "#666" }} />
          </ListItem>
          <ListItem disablePadding sx={{ width: "fit-content", mr: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pr: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText
              primary={data.post.author.name}
              sx={{ color: "#666", mb: 1 }}
            />
          </ListItem>
          <ListItem disablePadding sx={{ width: "fit-content", mr: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pr: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText
              primary={generate_fa(data.post.category)}
              sx={{ color: "#666", mb: 1 }}
            />
          </ListItem>
        </List>

        <CssBox
          maxWidth="100%"
          sx={{
            borderRadius: "10px",
            color: "#666",
          }}
          component="div"
          dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        ></CssBox>
        <Divider
          variant="middle"
          sx={{ width: "100%", margin: "16px 0 16px 0" }}
        />
        <Box
          maxWidth="100%"
          sx={{
            display: "flex",

            width: "100%",
            ...boxdirectionXS,
            ...boxdirectionSM,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Typography component="h3" variant="h6" color="#666">
              تگ ها :
            </Typography>
            <Link
              to={`/blogs/category/${data.post.category}`}
              style={{
                color: "#666",
                fontWeight: "bold",
                marginRight: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  marginLeft: "4px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                component="span"
                variant="h6"
              >
                #
              </Typography>
              {generate_fa(data.post.category)}
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            {!dataUser ? (
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            ) : dataUser.person !== null ? (
              <IconButton onClick={SavePostHandeler}>
                {!dataGetSavePOST_Bet && loadingGetPOST_Bet ? (
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
                ) : dataGetSavePOST_Bet && icon_bookmark ? (
                  <BookmarkIcon sx={{ color: "#666" }} />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </IconButton>
            ) : (
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            )}
            {!dataUser ? (
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
            ) : dataUser.person !== null ? (
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
              onClick={() => sharePage(document.title, window.location.href)}
            >
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        sx={{
          ...boxXS,
          ...boxSM,
          ...boxMD,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          padding: "24px",
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar sx={{ width: "72px", height: "72px", borderRadius: "50%" }}>
            <LazyLoadImage
              width="100%"
              height="100%"
              src={data.post.author.image.url}
              effect="blur"
              alt={data.post.author.name}
              id="lazy_img"
            />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            ml={1}
          >
            <Typography
              component="h4"
              variant="h6"
              fontWeight="bold"
              color="#666"
              fontSize="18px"
            >
              {data.post.author.name}
            </Typography>
            <Typography component="h5" variant="span" color="#666">
              {data.post.author.field}
            </Typography>
          </Box>
        </Box>

        <Typography
          component="p"
          variant="p"
          sx={{ textAlign: "justify !important" }}
          color="#666"
          mt={1}
        >
          {data.post.author.describtion}
        </Typography>

        <Box
          maxWidth="100%"
          mt={2}
          sx={{
            display: "flex",
            width: "100%",
            ...boxdirectionXS,
            ...boxdirectionSM,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Link
              to={`/authors/${data.post.author.slug}`}
              style={{
                color: "#666",
                fontWeight: "bold",
                marginLeft: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "white",
                  border: "3px solid #f2f2f2 !important",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "17px",
                    marginLeft: "4px",
                    color: "#666",
                    fontWeight: "bold",
                  }}
                  component="span"
                  variant="h6"
                >
                  همه مقالات {data.post.author.name}
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              onClick={() =>
                sharePage(
                  data.post.author.name,
                  `/authors/${data.post.author.slug}`
                )
              }
            >
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        sx={{
          ...boxXS,
          ...boxSM,
          ...boxMD,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          padding: "24px",
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ alignSelf: "flex-start" }}
          component="h4"
          variant="h5"
          color="#666"
          fontWeight="bold"
          mb={3}
        >
          کامنت ها
        </Typography>
        {data.post.comments.map((comment) => (
          <CommentBlog {...comment} key={comment.id} />
        ))}
        <Box
          component="form"
          sx={{
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          mt={4}
        >
          <SendCommentBlog slug={slug} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Blog;
