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
  Typography,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";

// icons Mui
import CircleIcon from "@mui/icons-material/Circle";
import WestIcon from "@mui/icons-material/West";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

// Function convert En to Fa
import { generate_fa } from "../../js/function";
import CommentBlog from "../Comments/CommentBlog";

const Blog = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POSTTOBLOG, {
    variables: { slug: slug },
  });
  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
      <Box
        component="article"
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          padding: "24px",
          margin: "40px 200px 40px 200px",
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <ListItem disablePadding sx={{ width: "fit-content", ml: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pl: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText primary={data.post.date} sx={{ color: "#666" }} />
          </ListItem>
          <ListItem disablePadding sx={{ width: "fit-content", ml: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pl: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText
              primary={data.post.author.name}
              sx={{ color: "#666", mb: 1 }}
            />
          </ListItem>
          <ListItem disablePadding sx={{ width: "fit-content", ml: 2 }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pl: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText
              primary={generate_fa(data.post.category)}
              sx={{ color: "#666", mb: 1 }}
            />
          </ListItem>
        </List>

        <Box
          maxWidth="100%"
          pt={0.7}
          pb={1}
          px={2}
          sx={{
            borderRadius: "10px",
            color: "#666",
          }}
          component="div"
          dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        ></Box>
        <Divider
          variant="middle"
          sx={{ width: "100%", margin: "16px 0 16px 0" }}
        />
        <Box
          maxWidth="100%"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
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
            <Typography component="h3" variant="h6" color="#666" ml={3}>
              تگ ها :
            </Typography>
            <Link
              to={`/blogs/category/${data.post.category}`}
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
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          padding: "24px",
          margin: "40px 200px 40px 200px",
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
            mr={1}
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
          sx={{ textAlign: "justify" }}
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
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
                sx={{ borderRadius: "4px", backgroundColor: "#f2f2f2" }}
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
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px -4px",
          padding: "24px",
          margin: "40px 200px 40px 200px",
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
        >
          <TextField
            id="outlined-multiline-static"
            label="لطفا نظر خود را وارد نمایید ..."
            multiline
            rows={4}
            sx={{
              border: "3px solid #f2f2f2",
              borderRadius: "10px",
              width: "100%",
            }}
          ></TextField>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
