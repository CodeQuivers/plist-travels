import { useState } from "react";

const FilterByBoard = () => {
  const [radio1Checked, setRadio1Checked] = useState(true);

  const handleRadio1Click = () => {
    setRadio1Checked(!radio1Checked);
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-[#7F8FA4]">Filter By Board</h4>
        </div>
        {/* 1st */}
        <div className="flex">
          <input
            onClick={handleRadio1Click}
            type="radio"
            name="board1"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="board1"
            checked={radio1Checked}
          />
          <label
            htmlFor="board1"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Room Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByBoard;
