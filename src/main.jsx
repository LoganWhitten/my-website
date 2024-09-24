import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/content";
import MyThree from "./screens/3d";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="grid relative">
      <Content />
      <MyThree />
    </div>
  </React.StrictMode>
);
