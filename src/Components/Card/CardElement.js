import React from "react";

// Mui
import { Card, CardHeader, Avatar } from "@mui/material";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTSCARDSHOME } from "../GraphQl/query";

const CardElement = () => {
  const { data, loading, error } = useQuery(GET_POSTSCARDSHOME);
  console.log(data);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
    <Card>
      <CardHeader
        // avatar={<Avatar src={data.author.image.url} alt={data.title} />}
        title={"Shrimp and Chorizo Paella"}
        subheader="September 14, 2016"
      />
    </Card>
  );
};

export default CardElement;
