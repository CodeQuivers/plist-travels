import BecomeAnAgent from "../../components/contact/BecomeAnAgent";
import ContactUs from "../../components/contact/ContactUs";

const Contact = () => {
    return (
        <div className="w-auto lg:w-[1170px] mx-auto pt-20">
            <h2 className="grad-text-olc text-center text-3xl font-bold pb-5">Contact Us</h2>
            <hr className="my-2 pb-[70px]" />
            <BecomeAnAgent />
            <ContactUs />
        </div>
    );
};

export default Contact;