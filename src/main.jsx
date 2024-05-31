import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <NextUIProvider>
        <App classname="h-[2000px]" />
      </NextUIProvider>
    </ChakraProvider>
  </React.StrictMode>
);
