import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";
import Transfer from "../pages/transfer/Transfer";

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
        path: "tours",
        element: <Tours />,
      },
      {
        path: "transfer",
        element: <Transfer />,
      },
    ],
  },
]);

export default router;
