import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/content";
import MyThree from "./screens/3d";
import "./index.css";

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.StrictMode>
      <div className="relative h-screen">
        {/* Bottom Div (Non-scrollable) */}
        <div className="absolute inset-0 z-0">
          <MyThree />
        </div>

        {/* Top Div (Scrollable) */}
        <div id="scrollableDiv" className="absolute inset-0 z-10 overflow-auto">
          <Content />
        </div>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);