import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <div>
      <p>
        coded by{" "}
        <a
          href="https://65240ec886f6a70008ff8f4a--bejewelled-faun-042079.netlify.app"
          target="blank"
        >
          Miriro.
        </a>{" "}
        See my{" "}
        <a href="https://github.com/mimmuv/my-app" target="blank">
          Github repository test.
        </a>
      </p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
