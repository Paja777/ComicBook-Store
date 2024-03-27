import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./app/context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app/router/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
