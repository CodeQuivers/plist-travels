import Select from "react-dropdown-select";
import flightFrom from "../../assets/image/flight/icons/FlightFrom.png";
import depature from "../../assets/image/flight/icons/depature.png";
import flightTo from "../../assets/image/flight/icons/flightTo.png";
import returnCalender from "../../assets/image/flight/icons/return-calender.png";

const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];

const Flight = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <div className="h-[416px] pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
        <div className="inline-flex items-start gap-7">
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>One way</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>Round-Trip</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>Direct Flight</p>
          </div>
        </div>

        {/*  */}
        <div className="mt-5 flex gap-2">
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={flightFrom} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying To</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={flightTo} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={depature} alt="flightFromIcon" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={returnCalender} alt="flightFromIcon" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className="mt-5 flex">
            <div className="w-[265px] pt-[2px] pr-7">
              <p>Flying From</p>
              <div>
                <Select
                  className="mt-2 pl-10 w-[271px] border-2 border-gray-300 h-12 rounded"
                  options={options}
                  placeholder="Delhi and NCR, India"
                />
              </div>
            </div>
            <div className="w-[265px] pt-[2px] pr-7">
              <p>Flying From</p>
              <div>
                <Select
                  style={{
                    border: "1px solid red",
                    borderRadius: "5px",
                    color: "blue",
                    fontSize: "16px",
                  }}
                  className="mt-2 pl-10 w-[243px] border-red-700 h-12 rounded"
                  options={options}
                  placeholder="Delhi and NCR, India"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>test</h1>
    </div>
  );
};

export default Flight;
