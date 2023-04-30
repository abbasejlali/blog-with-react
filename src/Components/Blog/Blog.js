import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default Blog;
