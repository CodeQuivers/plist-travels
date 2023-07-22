import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Main from "../layout/Main";
import Tours from "../pages/tours/Tours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'tours',
        element:<Tours/>
      }
    ]
  },
]);

export default router;
