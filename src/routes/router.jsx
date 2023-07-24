import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Tours from "../pages/tours/Tours";
import Flight from "../pages/flight/Flight";
import Home from "../pages/home/Home";
import Transfer from "../pages/transfer/Transfer";
import Hotel from "../pages/hotel/Hotel";
import HotelSearchResults from "../pages/hotel/HotelSearchResults";
import FlightRoundTrip from "../pages/flight/FlightRoundTrip";
import TourDetail from "../pages/tours/TourDetail";
import TransferSearchResults from "../pages/transfer/TransferSearchResults";


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
        path: "/tour-detail",
        element: <TourDetail />,
      },
      {
        path: "/transfer",
        element: <Transfer />,
      },
      {
        path: "/transfer/search",
        element: <TransferSearchResults />,
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
