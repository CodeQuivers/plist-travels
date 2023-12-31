import Select from "react-dropdown-select";
import { FaAngleRight } from "react-icons/fa6";

const HotelBookingTravelerInformation = () => {
  const options = [
    {
      value: 1,
      label: "Mr.",
    },
    {
      value: 2,
      label: "Ms.",
    },
    {
      value: 3,
      label: "Mrs.",
    },
  ];
  const genderLists = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];
  const countryLists = [
    {
      value: 1,
      label: "India",
    },
    {
      value: 2,
      label: "Bangladesh",
    },
    {
      value: 3,
      label: "USA",
    },
    {
      value: 4,
      label: "UAE",
    },
  ];

  const payOpts = [
    {
      value: 1,
      label: "Flutterwave",
    },
    {
      value: 2,
      label: "Mobile Banking",
    },
    {
      value: 3,
      label: "Card",
    },
  ];

  return (
    <div className="border-gradientBox flex flex-col gap-6 !py-5">
      <div>
        <h2 className="text-[#334150] text-2xl font-semibold px-5 pop-font">
          Traveler Information
        </h2>
      </div>
      <div className="w-full gray-divider"></div>
      <div className="flex flex-col gap-5 px-5 mb-7">
        <h4 className="text-base font-medium text-[#334150] flex items-center gap-2">
          Room 1{" "}
          <span>
            <FaAngleRight size={12} />
          </span>{" "}
          Adult 1
        </h4>
        <div className="flex justify-between">
          {/* block of information */}
          <div className=" w-[80px] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Title<sup className="text-red-600 ml-2 ">*</sup>
            </label>
            <div className="border rounded gray-border px-1 text-black">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                searchable={false}
                options={options}
                placeholder="Mr."
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              First Name<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <input type="text" placeholder="MR." className="outline-none" />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Last Name
            </label>
            <div className="border rounded gray-border p-1">
              <input type="text" placeholder="MR." className="outline-none" />
            </div>
          </div>
        </div>

        {/* second block for information */}
        <div className="flex justify-between">
          <div className=" w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              DOB<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1 text-black">
              <input type="date" placeholder="MR." className="outline-none" />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Gender<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded px-1 gray-border ">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                searchable={false}
                options={genderLists}
                placeholder="Your Gender"
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              ID
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="text"
                placeholder="Your ID.."
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Third block for information */}

        <div className="flex justify-between">
          <div className=" w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Country<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border  text-black px-2">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                searchable={false}
                options={countryLists}
                placeholder="Your Country"
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Email<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1.5">
              <input
                type="text"
                placeholder="Your Email"
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Phone<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1.5">
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex-col ">
          <label htmlFor="" className="text-sm font-normal text7F8FA4">
            Address<sup className="text-red-600">*</sup>
          </label>
          <div className="border rounded gray-border p-2">
            <input
              type="text"
              placeholder="Your Address"
              className="outline-none pb-10 placeholder:text-[#334150] w-full "
            />
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-1.5">
          <label htmlFor="" className="text-sm font-normal text7F8FA4">
            Payment Type<sup className="text-red-600">*</sup>
          </label>
          <div className="border rounded gray-border px-2">
            <Select
              style={{
                border: "none",
                padding: "0",
              }}
              options={payOpts}
              placeholder="Flutterwave"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingTravelerInformation;
