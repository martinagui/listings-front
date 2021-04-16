import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "../src/components/App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
