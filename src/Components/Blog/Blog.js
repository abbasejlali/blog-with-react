import React from "react";

// react router dom
import { Link, useParams } from "react-router-dom";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTTOBLOG } from "../GraphQl/query";

// Mui
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Button,
  Typography,
  IconButton,
  Divider,
  TextField,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// icons Mui
import CircleIcon from "@mui/icons-material/Circle";
import WestIcon from "@mui/icons-material/West";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// Function convert En to Fa
import { generate_fa } from "../../js/function";
import CommentBlog from "../Comments/CommentBlog";

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
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #f2f2f2 ",
    },

    "&.Mui-focused fieldset": {
      border: "3px solid #666 ",
    },
  },
  "& .muirtl-flo563-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#666 !important",
    fontSize: "14px",
  },
  "& .muirtl-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#666 !important",
  },
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#666 !important",
  },
});

const Blog = () => {
  // Get Slug
  const { slug } = useParams();

  // Get data
  const { loading, error, data } = useQuery(GET_POSTTOBLOG, {
    variables: { slug },
  });

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

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
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
          <IconButton sx={{ fontSize: "30px", color: "#666" }}>
            <WestIcon />
          </IconButton>
        </Box>
        <Avatar
          src={data.post.coverphoto.url}
          alt={data.post.title}
          sx={{ width: "100%", height: "360px", borderRadius: "10px" }}
        />
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
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="share">
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
          <Avatar
            src={data.post.author.image.url}
            alt={data.post.author.name}
            sx={{ width: "72px", height: "72px", borderRadius: "50%" }}
          />
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
            <IconButton aria-label="share">
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
          <Typography
            component="h4"
            variant="h5"
            color="#666"
            fontWeight="bold"
            mb={3}
          >
            ثبت دیدگاه
          </Typography>

          <CssTextField
            label="لطفا نظر خود را وارد نمایید ..."
            id="custom-css-outlined-input"
            fullWidth
            multiline
            rows={4}
          />
          <Box
            sx={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mt={2}
          >
            <CssTextField
              id="custom-css-outlined-input"
              label="نام و نام خانوادگی"
              sx={{ width: "49%" }}
            />
            <CssTextField
              id="custom-css-outlined-input"
              label="پسورد"
              type="password"
              sx={{ width: "49%" }}
            />
          </Box>
          <Box
            sx={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mt={2}
          >
            <CssTextField
              id="custom-css-outlined-input"
              label="ایمیل خود را وارد نمایید"
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00e676",
              "&:hover": {
                backgroundColor: "#00c853 !important",
              },
              fontWeight: "bold",
              alignSelf: "flex-start",
              marginTop: "16px",
            }}
          >
            ثبت دیدگاه
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
