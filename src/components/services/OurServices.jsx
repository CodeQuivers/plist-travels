import './OurServices.css';
import hotel from "../../../src/assets/image/services/hotel.svg";
import police from "../../../src/assets/image/services/police.svg";
import restaurant from "../../../src/assets/image/services/restaurant.svg";
import vacation from "../../../src/assets/image/services/Vacation.svg";
import arrow from "../../../src/assets/image/services/primary.svg";
const OurServices = () => {

    const ourServices = [
        {
            title: "Vacation Rentals",
            text: "Live like a local. From expansive homes cost effective shared rooms",
            image: vacation
        },
        {
            title: "Hotel",
            text: "Live like a local. From expansive homes cost effective shared rooms",
            image: hotel
        },
        {
            title: "Restaurant",
            text: "Live like a local. From expansive homes cost effective shared rooms",
            image: restaurant
        },
        {
            title: "Tourist Gard",
            text: "Live like a local. From expansive homes cost effective shared rooms",
            image: police
        }


    ];

    return (
        <div>
            <div className="h-[291px] flex flex-col lg:flex-row gap-[25px] mt-[40px] ">
                {
                    ourServices?.map(services =>
                        <>
                            <div className="rounded-lg bg-gradient-to-r from-[#0e55b1] to-[#169fc3] shadow-xl p-[24px] flex flex-col items-center gap-[12px]">
                                <img src={services.image} alt="" />
                                <h1 className="service-h1">{services.title}</h1>
                                <p className="service-p">
                                    {services.text}
                                </p>
                                <img src={arrow} alt="" />
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default OurServices;