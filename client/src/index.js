//primary location for starting things out.
//this is the root of our application.
//sets up the data layer of our application

import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));
