import React from "react";

// react router dom
import { useParams } from "react-router-dom";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTTOBLOG } from "../GraphQl/query";

const Blog = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_POSTTOBLOG, {
    variables: { slug },
  });
  console.log(data);
  return <div>{slug}</div>;
};

export default Blog;
