import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";
import Home from "../pages/home/Home";
import Transfer from "../pages/transfer/Transfer";
import Hotel from "../pages/hotel/Hotel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flight",
        element: <Flight />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/transfer",
        element: <Transfer />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
    ],
  },
]);

export default router;
