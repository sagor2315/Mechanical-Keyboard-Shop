import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
// import { ThemeProvider } from "./components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
