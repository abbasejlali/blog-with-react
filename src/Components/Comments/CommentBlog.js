import React from "react";

// Mui
import { Avatar, Box, Typography } from "@mui/material";

const CommentBlog = ({ name, avatar, text }) => {
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
        <Avatar
          src={avatar.url}
          alt={name}
          sx={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
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
            fontSize="16px"
          >
            {name}
          </Typography>
          <Typography component="h5" variant="span" color="#666">
            zasas
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
            right: "15px",
            borderRadius: "2px",
            zIndex: "-1",
          }}
        ></Box>
        {text}
      </Box>
    </Box>
  );
};

export default CommentBlog;
