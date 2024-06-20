import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PrimeReactProvider } from "primereact/api";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

const themeConfig = {
  token: {
    colorPrimary: "#1C2B78",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <PrimeReactProvider>
          <ConfigProvider theme={themeConfig}>
            <App />
          </ConfigProvider>
        </PrimeReactProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
