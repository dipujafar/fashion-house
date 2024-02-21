import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct";



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
          element: <PrivateRoute> <Details></Details> </PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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