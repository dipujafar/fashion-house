import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";

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
  ]);
  export default router;