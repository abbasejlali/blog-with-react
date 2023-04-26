import React from "react";
import { GET_AUTHOR } from "./Components/GraphQl/query";
import { useQuery } from "@apollo/client";
function App() {
  const { data } = useQuery(GET_AUTHOR);
  console.log(data);
  return <div>app</div>;
}

export default App;
