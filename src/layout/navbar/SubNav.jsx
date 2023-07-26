/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./navbar.css";

const SubNav = ({ nav }) => {
  const { to, title } = nav;

  return (
    <li className="subNav-link ml-[41px]">
      <Link to={to}> {title} </Link>
    </li>
  );
};

export default SubNav;
