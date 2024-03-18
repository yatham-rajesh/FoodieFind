import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


/**
 * Header
 *    -Logo
 *    -Nav Items
 * Body
 *    -Search
 *    -Restro Cards
 *         -img
 *         -name
 *         -cuisines
 *         -Star rating, ETD
 * Footer
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:resId",
        element: <RestaurantMenu />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
