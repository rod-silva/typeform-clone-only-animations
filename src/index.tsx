import React from "react";
import ReactDOM from "react-dom";

import { Global } from "./styles/global";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
