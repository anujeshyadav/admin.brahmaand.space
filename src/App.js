import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
const resourceRoutes = require("./resourceRoutes");
const warRoutes = require("./warRoutes");

const App = props => {
  return <Router />
}

export default App
