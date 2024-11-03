import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/', //or, index: true,
          element: <Home></Home>
        },
        {
          path: '/coffees',
          element: <Coffees/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
      ]
    },
  ]);

  export default routes;