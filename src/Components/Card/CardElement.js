import React from "react";

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

// js
import { fistename } from "../../js/function";

const CardElement = ({
  title,
  author,
  slug,
  coverphoto,
  comments,
  category,
}) => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "0px 2px 15px 1px rgba(0, 0, 0, 0.2)",
        "&:hover": { boxShadow: "0px 2px 15px 3px rgba(0, 0, 0, 0.2)" },
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
            src={author.image.url}
            alt={title}
          />
        }
        title={author.name}
      />
      <CardMedia
        component="img"
        width="100%"
        height="194"
        image={coverphoto.url}
        alt={title}
      />
      <Box
        sx={{
          position: "absolute",
          top: "78px",
          left: "5px",
          backgroundColor: "white",
          padding: "0px 10px 5px 10px",
          borderRadius: "31px",
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
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {comments.length ? (
          <AvatarGroup
            total={comments.length}
            max={3}
            sx={{ direction: "ltr", marginLeft: "auto", width: 30, height: 30 }}
          >
            <Avatar
              sx={{
                bgcolor: "#f2f2f2",
                color: "#666",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {fistename(comments[0].name)}
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "#f2f2f2",
                color: "#666",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {fistename(comments[1].name)}
            </Avatar>
          </AvatarGroup>
        ) : (
          <Typography ml="auto" component="p" variant="p">
            بدون کامنت
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default CardElement;
