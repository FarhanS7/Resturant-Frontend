import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
<<<<<<< HEAD
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
=======
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
<<<<<<< HEAD
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
=======
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
    ],
  },
]);
