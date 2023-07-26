
// import service1 from "../../../src/assets/image/services/WeAlsoOfferService/we Offer also service (1).jpg";
// import service2 from "../../../src/assets/image/services/WeAlsoOfferService/we Offer also service (2).jpg";
// import service3 from "../../../src/assets/image/services/WeAlsoOfferService/we Offer also service (3).jpg";
import service4 from "../../../src/assets/image/services/WeAlsoOfferService/we Offer also service (4).jpg";
const WeOfferService = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-semibold ">Services Also We Offer</h1>
            </div>

            {/* Card Section */}
            <div className="h-[381px] w-[265px] flex flex-col lg:flex-row items-center gap-[33px] mt-[40px] ">
                {/* card 1 */}
                <div className="flex flex-col border">
                    <div>
                        <img src={service4} alt="" className="rounded-t-lg" />
                    </div>
                    <div className="popular-card rounded-b-xl w-[267px]">
                        <div className="pt-5 px-5">
                            <h3 className="text-base text-white">A wonderful serenity tafone</h3>
                            <p className="text-xs text-white py-1">A wonderful serenity has taken possession of my entire soul, like these sweet</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="flex flex-col border">
                    <div>
                        <img src={service4} alt="" className="rounded-t-lg" />
                    </div>
                    <div className="popular-card rounded-b-xl w-[267px]">
                        <div className="pt-5 px-5">
                            <h3 className="text-base text-white">A wonderful serenity tafone</h3>
                            <p className="text-xs text-white py-1">A wonderful serenity has taken possession of my entire soul, like these sweet</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="flex flex-col border">
                    <div>
                        <img src={service4} alt="" className="rounded-t-lg" />
                    </div>
                    <div className="popular-card rounded-b-xl w-[267px]">
                        <div className="pt-5 px-5">
                            <h3 className="text-base text-white">A wonderful serenity tafone</h3>
                            <p className="text-xs text-white py-1">A wonderful serenity has taken possession of my entire soul, like these sweet</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="flex flex-col border">
                    <div>
                        <img src={service4} alt="" className="rounded-t-lg" />
                    </div>
                    <div className="popular-card rounded-b-xl w-[267px]">
                        <div className="pt-5 px-5">
                            <h3 className="text-base text-white">A wonderful serenity tafone</h3>
                            <p className="text-xs text-white py-1">A wonderful serenity has taken possession of my entire soul, like these sweet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOfferService;