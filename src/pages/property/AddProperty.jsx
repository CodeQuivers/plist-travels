import { useState } from "react";

import checkBoxIcon from "../../assets/image/property/checkBoxIcon.svg";
import circleIcon from "../../assets/image/property/circleIcon.svg";
import circleIconWhite from "../../assets/image/property/circleIconWhite.svg";
import blueLine from "../../assets/image/property/blueLine.svg";
import whiteLine from "../../assets/image/property/whiteLine.svg";
import AddPropertyLocation from "../../components/property/AddPropertyLocation";
import AddPropertyPriceForm from "../../components/property/AddPropertyPriceForm";

const AddProperty = () => {
  const [activeList, setActiveList] = useState(2);
  return (
    <>
      <div className="flex justify-center mt-20 border-b pb-6">
        <h1 className="font-bold text-3xl">Add Your property</h1>
      </div>

      <div className="max-w-[1170px] mt-20 mx-auto">
        <div className="flex items-center pl-8 mx-auto">
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex">
              <img
                className="w-[32px]"
                src={activeList === 1 ? circleIcon : checkBoxIcon}
                alt=""
              />
              <img src={activeList === 1 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium -ml-5  text-[#344054]">Description</p>
          </div>
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 2
                    ? circleIcon
                    : activeList < 2
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />
              <img src={activeList <= 2 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium  text-[#344054]">Price</p>
          </div>
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 3
                    ? circleIcon
                    : activeList < 3
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />
              <img src={activeList <= 3 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium -ml-1.5 text-[#344054]">Image</p>
          </div>
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 4
                    ? circleIcon
                    : activeList < 4
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />
              <img src={activeList <= 4 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium -ml-1.5 text-[#344054]">Details</p>
          </div>
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 5
                    ? circleIcon
                    : activeList < 5
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />
              <img src={activeList <= 5 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium -ml-3 text-[#344054]">Location</p>
          </div>
          {/* step 1 */}
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 6
                    ? circleIcon
                    : activeList < 6
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />{" "}
              <img src={activeList <= 6 ? whiteLine : blueLine} alt="" />
            </div>
            <p className="font-medium -ml-5 text-[#344054]">Amenities</p>
          </div>
          <div className="space-y-2">
            <div className="flex ">
              <img
                className="w-[32px]"
                src={
                  activeList === 7
                    ? circleIcon
                    : activeList < 7
                    ? circleIconWhite
                    : checkBoxIcon
                }
                alt=""
              />
            </div>
            <p className="font-medium -ml-3 text-[#344054]">Calender</p>
          </div>
        </div>

        <div>
          {activeList === 2 && <AddPropertyPriceForm />}
          {activeList === 5 && <AddPropertyLocation />}
        </div>
      </div>
    </>
  );
};

export default AddProperty;
