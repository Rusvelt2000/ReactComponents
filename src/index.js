import "./index.scss";
import "./Components/components.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./Context/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
