import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favicon from "react-favicon";
import favicon from "./images/favicon.png";
import Helmet from "react-helmet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>My - portfolio -- Cao</title>
    </Helmet>
    <Favicon url={favicon}></Favicon>
    <App />
  </React.StrictMode>
);
