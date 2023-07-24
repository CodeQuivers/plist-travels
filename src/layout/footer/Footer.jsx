import { Link } from "react-router-dom";
import footerlogo from "../../assets/image/footer/footer-logo.png";
import "./footer.css";
import phone from "../../assets/image/home/phone.png";
import bankNote from "../../assets/image/home/banknote.png";
import closePayment from "../../assets/image/home/x.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[161px] my-[100px] w-[1170px] mx-auto">
        <div className="flex gap-[20px] w-[274px]">
          <div className="footer-contact flex items-center justify-center">
            <img src={phone} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="footer-contact-h1">Need Help? Contact Us</h1>
            <p className="footer-contact-p">yourmail@mail.com</p>
            <p className="text-[10px]">+123 1234 12345</p>
          </div>
        </div>
        <div className="flex gap-[20px] w-[274px]">
          <div className="footer-contact flex items-center justify-center ">
            <img src={bankNote} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="footer-contact-h1">Payments</h1>
            <p className="footer-contact-p">
              We Accept All Credit Cards Payment?
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] w-[274px]">
          <div className="footer-contact flex items-center justify-center">
            <img src={closePayment} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="footer-contact-h1">Cancel Policy</h1>
            <Link to="" className="footer-contact-p">
              Click Here To Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-1 ">
        <div className="container mx-auto">
          <div className="box-1">
            <img src={footerlogo} alt="" className="w-[58px] h-[52px]" />
            <p className="footer-2">
              Explore some of the most trendy cities and local areas in Nigeria
              to visit. Whether you need to go on a family vacation, a business
              trip, a well deserved get away or planning that memorable event,
              plistbooking.com is the place to be.
            </p>
          </div>
          <div className="flex items-start gap-[32px] text-[16px]">
            <div className="heading">
              <h1 className="company">Company</h1>
              <Link className="link" to="">
                {" "}
                About Us
              </Link>
              <Link className="link" to="">
                {" "}
                Service
              </Link>
              <Link className="link" to="">
                {" "}
                Job
              </Link>
              <Link className="link" to="">
                {" "}
                Blog
              </Link>
              <Link className="link" to="">
                {" "}
                Support
              </Link>
              <Link className="link" to="">
                {" "}
                Return Policy
              </Link>
            </div>
            <div className="heading ml-[32px]">
              <h1 className="company">Resource</h1>
              <Link className="link" to="">
                {" "}
                Hotel Booking
              </Link>
              <Link className="link" to="">
                {" "}
                Flight Booking
              </Link>
              <Link className="link" to="">
                {" "}
                Cruise Booking
              </Link>
              <Link className="link" to="">
                {" "}
                Tour Booking
              </Link>
              <Link className="link" to="">
                {" "}
                Car Booking
              </Link>
            </div>
            <div>
              <h1 className="stay">Stay up to date</h1>
              <div className="flex gap-5 mt-5">
                <input
                  className="footer-input"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <button className="footer-btn">subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border w-[1170px] border-[#e4e7ec7c] " />
        <div className="container mx-auto  ">
          <h1 className="rights">© 2023 . All rights reserved.</h1>
          <div className="flex gap-3 terms">
            <p>Terms</p>
            <p>Privecy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
