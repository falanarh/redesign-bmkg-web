import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PrimeReactProvider } from 'primereact/api';
import { ConfigProvider } from "antd";

// const themeConfig = {
//   token: {
//     colorPrimary: '#1C2B78',
//   },
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <NextUIProvider>
        <PrimeReactProvider>
          <App />
        {/* <ConfigProvider theme={themeConfig}>
        </ConfigProvider> */}
        </PrimeReactProvider>
      </NextUIProvider>
    </ChakraProvider>
  </React.StrictMode>
);
