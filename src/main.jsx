import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routs/Routs.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
