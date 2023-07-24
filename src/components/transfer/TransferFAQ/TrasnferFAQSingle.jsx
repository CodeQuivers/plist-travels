/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import accordionMinusImg from "../../../assets/image/hotel/accordionMinus.png";

const TrasnferFAQSingle = ({ faqLists }) => {
    // console.log('object', accordionItems);
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className="space-y-4 max-w-sm ">
            {faqLists?.map((item, index) => (
                <div
                    key={index}
                    className={`border max-w-sm  rounded-lg ${index === activeIndex ? "border-[#0F58B2] " : "border-transparent"
                        }`}
                >
                    <div
                        onClick={() => handleClick(index)}
                        className="flex gap-1 px-3 items-center cursor-pointer rounded-t-lg  focus:outline-none "
                    >
                        {index === activeIndex ? (
                            <img
                                className="duration-300  ease-in-out transition-all"
                                src={accordionMinusImg}
                                alt=""
                            />
                        ) : (
                            <span>
                                <BiPlusCircle
                                    className="text-[#B1B5C3] duration-300 ease-in-out transition-all"
                                    size={25}
                                />
                            </span>
                        )}

                        <button className="w-full  text-left px-4 py-2 font-semibold ">
                            {item.title}
                        </button>
                    </div>

                    <div
                        className={`transition-all duration-500 ease-in-out ${index === activeIndex ? "max-h-40" : "max-h-0"
                            } overflow-hidden`}
                    >
                        <div className="p-4">
                            {item.content.map((itm) => (
                                <ul className="list-disc  pl-16" key={Math.random()}>
                                    <li className="text-[#667085]">{itm}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrasnferFAQSingle;