import React from "react";

// Mui
import { Avatar, Box, Typography } from "@mui/material";

const CommentBlog = ({ name, avatar, text }) => {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "3px solid #666",
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
          src={avatar.url}
          alt={name}
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
            {name}
          </Typography>
          <Typography component="h5" variant="span" color="#666">
            zasas
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentBlog;
