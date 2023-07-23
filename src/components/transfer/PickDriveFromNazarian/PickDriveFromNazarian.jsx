import './PickDriveFromNazarian.css'
import imgae1 from "../../../assets/image/home/image-1.png";
import imgae2 from "../../../assets/image/home/image-2.png";
import imgae3 from "../../../assets/image/home/image-3.png";
import imgae4 from "../../../assets/image/home/image-4.png";
// import imgae2 from "../../../assets/image/home/image-2.png";
// import imgae3 from "../../../assets/image/home/image-3.png";
// import imgae4 from "../../../assets/image/home/image-4.png";
// import star from "../../assets/image/home/star.png";
import heart from "../../../assets/image/home/Vector.png";

const PickDriveFromNazarian = () => {
    return (
        <>
            <div className="max-md:px-5 ">
                <div className="my-10">
                    <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
                    Pick Your Drive From Nazarian
                    </h1>
                </div>
            </div>
            <div className="h-[381px] w-[265px]  flex flex-col lg:flex-row items-center gap-[33px] ">
                {/* card 1 */}
                <div className="flex flex-col  rounded-lg">
                    <div className="relative">
                        <img src={imgae1} alt="" className="rounded-t-lg" />
                        <button className="absolute top-[21px] right-[21px]">
                            <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
                        </button>
                    </div>
                    <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
                        <div className="flex items-start ">
                            <div>
                                <h3 className="explore-nigeria-name">Jeep Renegadet</h3>
                                <p className="explore-nigera-location">Car</p>
                            </div>
                            <div>
                                <p className="ml-[40px] explore-nigeria-price ">$548</p>
                            </div>
                        </div>
                        <hr className="text-white border-[1px] w-full" />
                        <div className="flex items-start explore-nigeria-date">
                                <span className='text-[12px]'>4 Sit - 4 Door - Engine 300</span>                            
                                 <p className="text-[12px]">- Petrol Car</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="flex flex-col  rounded-lg">
                    <div className="relative">
                        <img src={imgae2} alt="" className="rounded-t-lg" />
                        <button className="absolute top-[21px] right-[21px]">
                            <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
                        </button>
                    </div>
                    <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
                        <div className="flex items-start ">
                            <div>
                                <h3 className="explore-nigeria-name">Jeep Renegadet</h3>
                                <p className="explore-nigera-location">Car</p>
                            </div>
                            <div>
                                <p className="ml-[40px] explore-nigeria-price ">$548</p>
                            </div>
                        </div>
                        <hr className="text-white border-[1px] w-full" />
                        <div className="flex items-start explore-nigeria-date">
                                <span className='text-[12px]'>4 Sit - 4 Door - Engine 300</span>                            
                                 <p className="text-[12px]">- Petrol Car</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="flex flex-col  rounded-lg">
                    <div className="relative">
                        <img src={imgae3} alt="" className="rounded-t-lg" />
                        <button className="absolute top-[21px] right-[21px]">
                            <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
                        </button>
                    </div>
                    <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
                        <div className="flex items-start ">
                            <div>
                                <h3 className="explore-nigeria-name">Jeep Renegadet</h3>
                                <p className="explore-nigera-location">Car</p>
                            </div>
                            <div>
                                <p className="ml-[40px] explore-nigeria-price ">$548</p>
                            </div>
                        </div>
                        <hr className="text-white border-[1px] w-full" />
                        <div className="flex items-start explore-nigeria-date">
                                <span className='text-[12px]'>4 Sit - 4 Door - Engine 300</span>                            
                                 <p className="text-[12px]">- Petrol Car</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="flex flex-col border border-blue-500 rounded-lg">
                    <div className="relative">
                        <img src={imgae4} alt="" className="rounded-t-lg" />
                        <button className="absolute top-[21px] right-[21px]">
                            <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
                        </button>
                    </div>
                    <div className="explore-nigeria-card1 flex flex-col items-start h-[141px] w-[267px]">
                        <div className="flex items-start ">
                            <div>
                                <h3 className="explore-nigeria-name1">Jeep Renegade</h3>
                                <p className="explore-nigera-location1">Car</p>
                            </div>
                            <div>
                                <p className="ml-[40px] explore-nigeria-price1 ">$548</p>
                            </div>
                        </div>
                        <hr className="text-white border-[1px] w-full" />
                        
                        <div className="flex items-start explore-nigeria-date1">
                                <span className='text-[12px]'>4 Sit - 4 Door - Engine 300</span>                            
                                 <p className="text-[12px]">- Petrol Car</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PickDriveFromNazarian;