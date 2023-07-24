import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FilterByRatings = () => {
  const [radio1Checked, setRadio1Checked] = useState(false);
  const [radio2Checked, setRadio2Checked] = useState(false);
  const [radio3Checked, setRadio3Checked] = useState(false);
  const [radio4Checked, setRadio4Checked] = useState(false);

  const handleRadio1Click = () => {
    setRadio1Checked(!radio1Checked);
  };

  const handleRadio2Click = () => {
    setRadio2Checked(!radio2Checked);
  };

  const handleRadio3Click = () => {
    setRadio3Checked(!radio3Checked);
  };

  const handleRadio4Click = () => {
    setRadio4Checked(!radio4Checked);
  };

  return (
    <div className="space-y-4">
      {/* 1st */}
      <div className="flex">
        <input
          onClick={handleRadio1Click}
          type="radio"
          name="rating10"
          className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
          id="rating10"
          checked={radio1Checked}
        />
        <label
          htmlFor="rating10"
          className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
        >
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <span>(10)</span>
        </label>
      </div>
      {/* 2nd */}
      <div className="flex w-full">
        <input
          onClick={handleRadio2Click}
          type="radio"
          name="rating5"
          className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
          id="rating5"
          checked={radio2Checked}
        />
        <label
          htmlFor="rating5"
          className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
        >
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <span>(5)</span>
        </label>
      </div>
      {/* 3rd */}
      <div className="flex">
        <input
          onClick={handleRadio3Click}
          type="radio"
          name="rating2"
          className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
          id="rating2"
          checked={radio3Checked}
        />
        <label
          htmlFor="rating2"
          className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
        >
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <span>(2)</span>
        </label>
      </div>
      {/* 4th */}
      <div className="flex">
        <input
          onClick={handleRadio4Click}
          type="radio"
          name="rating1"
          className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
          id="rating1"
          checked={radio4Checked}
        />
        <label
          htmlFor="rating1"
          className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
        >
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <span>(1)</span>
        </label>
      </div>
    </div>
  );
};

export default FilterByRatings;
