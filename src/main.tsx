import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import CategoriesPage from "./Pages/Categories/CategoriesPage.tsx";
import Lunches from "./Pages/lunches/index.tsx";
import Breakfasts from "./Pages/Breakfasts/index.tsx";
import Drinks from "./Pages/drinks/index.tsx";
import Soups from "./Pages/soups/Soups.tsx";
import Others from "./Pages/others/Other.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/lunch",
    element: <Lunches />,
  },
  {
    path: "/breakfast",
    element: <Breakfasts />,
  },
  {
    path: "/drinks",
    element: <Drinks />,
  },
  {
    path: "/soups",
    element: <Soups />,
  },
  {
    path: "/others",
    element: <Others />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
