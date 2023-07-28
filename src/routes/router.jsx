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
import TourBooking from "../pages/tours/TourBooking";
import Services from "../pages/services/Services";
import HotelDetails from "../pages/hotel/HotelDetails";
import Jobs from "../pages/jobs/Jobs";
import OneWayTrip from "../pages/flight/OneWayTrip";
import FlightCashout from "../pages/flight/FlightCashout";
import HotelBookingSummary from "../pages/hotel/HotelBookingSummary";
import Support from "../pages/support/Support";
import Blogs from "../pages/blogs/Blogs";
import AddProperty from "../pages/property/AddProperty";
import Agent from "../pages/agent/Agent";
import BlogDetail from "../components/blogs/BlogDetail";
import Privacy from "../pages/privacy/Privacy";
import Contact from "../pages/contact/Contact";

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
        path: "/flight/oneway",
        element: <OneWayTrip />,
      },
      {
        path: "/flight/cashout",
        element: <FlightCashout />,
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
        path: "/tour-booking",
        element: <TourBooking />,
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
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog-detail",
        element: <BlogDetail />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/hotel/search",
        element: <HotelSearchResults />,
      },
      {
        path: "/hotel/booking",

        element: <HotelBookingSummary />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/hotel/details",
        element: <HotelDetails />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/add-property",
        element: <AddProperty />,
      },
      {
        path: "/agent",
        element: <Agent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
