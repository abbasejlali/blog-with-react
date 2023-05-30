import React from "react";

// react router dom
import { useParams } from "react-router-dom";
const AuthorsSlug = () => {
  const params = useParams();

  return <div>author - {params.slug}</div>;
};

export default AuthorsSlug;
