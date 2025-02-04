import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./layout/styles.css";
import "semantic-ui-css/semantic.min.css";
import App from "./layout/App";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
