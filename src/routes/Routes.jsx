import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <p>Error</p>,
      children: [
        {
          path: '/', //or, index: true,
          element: <Home></Home>,
          loader: ()=> fetch('./categories.json')
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