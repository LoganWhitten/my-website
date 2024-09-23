import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import LightingDesign from "./screens/lighting_design.jsx";
import About from "./screens/about.jsx";
import Electrics from "./screens/electrics.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <About />
    <LightingDesign />
    <Electrics />
  </React.StrictMode>
);
