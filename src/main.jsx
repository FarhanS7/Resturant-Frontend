import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
=======
import "./index.css";

import { RouterProvider } from "react-router-dom";
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
=======
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
  </StrictMode>
);
