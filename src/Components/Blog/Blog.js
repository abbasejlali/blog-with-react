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
} from "@mui/material";

// icons Mui
import CircleIcon from "@mui/icons-material/Circle";

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
          boxShadow: "0px 2px 15px 1px rgba(0, 0, 0, 0.2)",
          padding: "24px",
          margin: "40px 24px 40px 24px",
          borderRadius: "10px",
        }}
      >
        <Avatar
          src={data.post.coverphoto.url}
          alt={data.post.title}
          sx={{ width: "100%", height: "250px", borderRadius: "10px" }}
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
          <ListItem disablePadding sx={{ width: "fit-content" }}>
            <ListItemIcon sx={{ minWidth: "fit-content", pl: 1 }}>
              <CircleIcon sx={{ fontSize: "10px", color: "#f2f2f2" }} />
            </ListItemIcon>
            <ListItemText
              primary={data.post.author.name}
              sx={{ color: "#666", mb: 1 }}
            />
          </ListItem>
        </List>
      </article>
    </>
  );
};

export default Blog;
