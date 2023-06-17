import React from "react";

// Mui
import { Avatar, Box, Typography } from "@mui/material";

// function
import { fistename } from "../../js/function";

// LazyLoadImage
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../shared/lazy_load.css";

const CommentBlog = ({ name, avatar, text, date }) => {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        width: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "3px solid #f2f2f2",
        borderRadius: "10px",
      }}
      mb={2}
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
        {avatar !== null && avatar.url && (
          <Avatar
            sx={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          >
            <LazyLoadImage
              width="100%"
              height="100%"
              src={avatar.url}
              effect="blur"
              alt={name}
              id="lazy_img"
            />
          </Avatar>
        )}
        {avatar === null && (
          <Avatar
            sx={{
              bgcolor: "#f2f2f2",
              color: "#666",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            {fistename(name)}
          </Avatar>
        )}

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
            fontSize="16px"
          >
            {name}
          </Typography>
          <Typography component="h5" variant="span" color="#666">
            {date}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          position: "relative",
          borderRadius: "10px",
          border: "3px solid #f2f2f2",
          backgroundColor: "white",
        }}
        mt={2}
        p={3}
      >
        <Box
          sx={{
            width: "20px",
            height: "20px",
            border: "3px solid #f2f2f2",
            transform: "rotate(45deg)",
            background: "#f2f2f2",
            position: "absolute",
            top: "-11px",
            borderRadius: "2px",
            zIndex: "-1",
            left: "15px",
          }}
        ></Box>
        {text}
      </Box>
    </Box>
  );
};

export default CommentBlog;
