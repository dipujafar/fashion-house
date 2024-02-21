import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Details from "../Pages/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: 'shop',
          element: <Products></Products>
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
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