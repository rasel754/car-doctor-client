import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/checkout/CheckOut";
import Booking from "../pages/booking/Booking";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },{
          path: "/login",
          element:<Login></Login>
        },{
          path:"/signUp",
          element:<SignUp></SignUp>
        },{
          path:"checkout/:id",
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },{
          path:"/bookings",
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
         }
      ]
    },
  ]);



  export default router;