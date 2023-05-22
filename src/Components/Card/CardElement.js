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
} from "@mui/material";

// Styles
import styles from "./CardEle.module.css";

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
}) => {
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
      <CardActions disableSpacing sx={{ direction: "ltr" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {comments.length ? (
          <AvatarGroup
            total={3}
            max={2}
            sx={{ direction: "ltr", marginLeft: "auto", width: 30, height: 30 }}
          >
            {comments.map((comment) => (
              <>
                <Avatar
                  key={comment.id}
                  sx={{ bgcolor: "red", width: 30, height: 30 }}
                >
                  {fistename(comment.name)}
                </Avatar>
              </>
            ))}
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
