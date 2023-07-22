import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Main from "../layout/Main";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/flight",
        element: <Flight />,
      },
      {
        path:'tours',
        element:<Tours/>
      }
    ]
  },
]);

export default router;
