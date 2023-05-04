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
  Box,
  AvatarGroup,
} from "@mui/material";

// Styles
import styles from "./CardEle.module.css";

// react-ruoter-dom
import { Link } from "react-router-dom";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const CardElement = ({ title, author, slug, coverphoto }) => {
  return (
    <Card
      className={styles.cardmain}
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.04)!important",
        border: "3px solid rgba(0, 0, 0, 0.04)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "rgba(0, 0, 0, 0.04)", marginLeft: "8px" }}
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
      <CardContent>
        <Link to={`blogs/${slug}`} style={{ color: "#666" }}>
          <Typography component="h3" varianr="h5" fontWeight="bold">
            {title}
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <AvatarGroup total={24}>
          <Avatar sx={{ bgcolor: "red" }}>R</Avatar>
        </AvatarGroup>
      </CardActions>
    </Card>
  );
};

export default CardElement;
