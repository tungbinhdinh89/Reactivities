import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./layout/styles.css";
import "semantic-ui-css/semantic.min.css";
import App from "./layout/App";
import { store, StoreContext } from "./app/stores/stores";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </StrictMode>
);
