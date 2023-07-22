import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
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
