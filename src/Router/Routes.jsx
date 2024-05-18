import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/menu',
          element : <Menu></Menu>
        }
      ]
    },
  ]);