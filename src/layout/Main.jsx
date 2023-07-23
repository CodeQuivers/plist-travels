import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
