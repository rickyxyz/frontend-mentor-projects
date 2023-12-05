import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <footer className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </footer> */}
  </React.StrictMode>
);
