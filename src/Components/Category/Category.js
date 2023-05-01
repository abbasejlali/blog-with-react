import React from "react";

// react-router-dom
import { useParams } from "react-router-dom";

const Category = () => {
  const { slug } = useParams();
  return <div>category - {slug}</div>;
};

export default Category;
