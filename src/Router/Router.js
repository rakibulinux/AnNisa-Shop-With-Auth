import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Shop from "../components/Shop/Shop";
import Orders from "../components/Orders/Orders";
import OrderReview from "../components/OrderReview/OrderReview";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import { productsAddCartLoader } from "../loaders/productsAndCartLoader";
import Shipping from "../components/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/shop",
        loader: () => fetch("https://annisa-shop-server.vercel.app/products"),
        element: <Shop />,
      },
      {
        path: "/order",
        loader: () => productsAddCartLoader(),
        element: <Orders />,
      },
      {
        path: "/order-review",
        element: <OrderReview />,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
