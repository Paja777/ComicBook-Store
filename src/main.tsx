import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/ConfigureStore.ts";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
  domain="dev-c001py8v2i7c8vi3.eu.auth0.com"
  clientId="98mkfIQVjXDX4gz90xChmirdr7905n0z"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
);
