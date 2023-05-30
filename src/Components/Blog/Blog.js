import React from "react";

// react router dom
import { useParams } from "react-router-dom";

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
} from "@mui/material";

// icons Mui
import CircleIcon from "@mui/icons-material/Circle";
import WestIcon from "@mui/icons-material/West";

// Function convert En to Fa
import { generate_fa } from "../../js/function";

const Blog = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POSTTOBLOG, {
    variables: { slug: slug },
  });
  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
      <article
        style={{
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
      </article>
    </>
  );
};

export default Blog;
