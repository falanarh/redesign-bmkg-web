import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <div style={{ height: "1000px", overflow: "auto" }}>
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
