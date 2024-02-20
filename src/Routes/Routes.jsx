import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    },
    {
      path:'/login',
      errorElement: <ErrorPage></ErrorPage>,
      element:<Login></Login>
    }
  ]);
  export default router;