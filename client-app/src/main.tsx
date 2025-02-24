import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./layout/styles.css";
import "semantic-ui-css/semantic.min.css";
import App from "./layout/App";
import { store, StoreContext } from "./app/stores/stores";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>
);
