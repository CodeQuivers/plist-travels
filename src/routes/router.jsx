import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";
import Home from "../pages/home/Home";
import Transfer from "../pages/transfer/Transfer";
import Hotel from "../pages/hotel/Hotel";
import HotelSearchResults from "../pages/hotel/HotelSearchResults";
import FlightRoundTrip from "../pages/flight/FlightRoundTrip";

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
        path: "/flight/roundtrip",
        element: <FlightRoundTrip />,
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
      {
        path: "/hotel/search",
        element: <HotelSearchResults />,
      },
    ],
  },
]);

export default router;
