import React from "react";

// Mui
import { Card, CardHeader, Avatar } from "@mui/material";

const CardElement = ({ title, author, date }) => {
  return (
    <Card xs={12}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }}
            src={author.image.url}
            alt={title}
          />
        }
        title={author.name}
        subheader={date}
      />
    </Card>
  );
};

export default CardElement;
