import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/products/products";
import HomePage from "../pages/Home/home-page";
import AboutUs from "../pages/about-us/about-us";
import Contactus from "../pages/contact-us/contact-us";
import Dashboard from "../pages/dashboard/dashboard";
import ProductDetails from "../pages/product-details/product-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/show-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
