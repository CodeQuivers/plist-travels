import OurServices from "../../components/services/OurServices";
import WeOfferService from "../../components/services/WeOfferService";
import Divider from "../../components/tours/Divider";

const Services = () => {
    return (
        <div className="w-auto lg:w-[1170px] mx-auto pt-20">
            <div className="flex flex-col items-center ">
                <h1 className="adventure text-3xl">Our Service</h1>
            </div>
            <Divider />
            <div>
                <OurServices />
            </div>
            <Divider />
            <div>
                <WeOfferService />
            </div>
        </div>
    );
};

export default Services;