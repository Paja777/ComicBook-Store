import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/ConfigureStore.ts";
import { AuthContextProvider } from "./app/context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
