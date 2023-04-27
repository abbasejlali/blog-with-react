import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: process.env.REACT_APP_GET_DATA,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
