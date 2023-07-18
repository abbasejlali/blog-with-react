import React from "react";
import ReactDOM from "react-dom/client";

// General Style
import "./index.css";
import "./Styles/fonts.css";

// App Main
import App from "./App";



// react-router-dom
import { BrowserRouter } from "react-router-dom";

// Mui
import { ThemeProvider } from "@mui/material";
import { cacheRtl, theme } from "./MaterialUi/theme";

//Rtl Mui
import { CacheProvider } from "@emotion/react";

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
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  </ApolloProvider>
);
