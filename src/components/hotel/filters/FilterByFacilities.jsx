import { useState } from "react";

const FilterByFacilities = () => {
  const [radio1Checked, setRadio1Checked] = useState(true);
  const [radio2Checked, setRadio2Checked] = useState(false);
  const [radio3Checked, setRadio3Checked] = useState(false);
  const [radio4Checked, setRadio4Checked] = useState(false);
  const [radio5Checked, setRadio5Checked] = useState(false);
  const [radio6Checked, setRadio6Checked] = useState(false);
  const [radio7Checked, setRadio7Checked] = useState(false);
  const [radio8Checked, setRadio8Checked] = useState(false);
  const [radio9Checked, setRadio9Checked] = useState(false);
  const [radio10Checked, setRadio10Checked] = useState(false);
  const [radio11Checked, setRadio11Checked] = useState(false);
  const [radio12Checked, setRadio12Checked] = useState(false);
  const [radio13Checked, setRadio13Checked] = useState(false);
  const [radio14Checked, setRadio14Checked] = useState(false);
  const [radio15Checked, setRadio15Checked] = useState(false);
  const [radio16Checked, setRadio16Checked] = useState(false);
  const [radio17Checked, setRadio17Checked] = useState(false);
  const [radio18Checked, setRadio18Checked] = useState(false);
  const [radio19Checked, setRadio19Checked] = useState(false);
  const [radio20Checked, setRadio20Checked] = useState(false);

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
  const handleRadio5Click = () => {
    setRadio5Checked(!radio5Checked);
  };
  const handleRadio6Click = () => {
    setRadio6Checked(!radio6Checked);
  };
  const handleRadio7Click = () => {
    setRadio7Checked(!radio7Checked);
  };
  const handleRadio8Click = () => {
    setRadio8Checked(!radio8Checked);
  };
  const handleRadio9Click = () => {
    setRadio9Checked(!radio9Checked);
  };
  const handleRadio10Click = () => {
    setRadio10Checked(!radio10Checked);
  };
  const handleRadio11Click = () => {
    setRadio11Checked(!radio11Checked);
  };
  const handleRadio12Click = () => {
    setRadio12Checked(!radio12Checked);
  };
  const handleRadio13Click = () => {
    setRadio13Checked(!radio13Checked);
  };
  const handleRadio14Click = () => {
    setRadio14Checked(!radio14Checked);
  };
  const handleRadio15Click = () => {
    setRadio15Checked(!radio15Checked);
  };
  const handleRadio16Click = () => {
    setRadio16Checked(!radio16Checked);
  };
  const handleRadio17Click = () => {
    setRadio17Checked(!radio17Checked);
  };
  const handleRadio18Click = () => {
    setRadio18Checked(!radio18Checked);
  };
  const handleRadio19Click = () => {
    setRadio19Checked(!radio19Checked);
  };
  const handleRadio20Click = () => {
    setRadio20Checked(!radio20Checked);
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-[#7F8FA4]">Filter By accommodation</h4>
        </div>
        {/* 1st */}
        <div className="flex">
          <input
            onClick={handleRadio1Click}
            type="radio"
            name="accommodation1"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation1"
            checked={radio1Checked}
          />
          <label
            htmlFor="accommodation1"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Room Only
          </label>
        </div>
        {/* 2 */}
        <div className="flex">
          <input
            onClick={handleRadio2Click}
            type="radio"
            name="accommodation2"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation2"
            checked={radio2Checked}
          />
          <label
            htmlFor="accommodation2"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Laundry Service
          </label>
        </div>
        {/* 3 */}
        <div className="flex">
          <input
            onClick={handleRadio3Click}
            type="radio"
            name="accommodation3"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation3"
            checked={radio3Checked}
          />
          <label
            htmlFor="accommodation3"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Laundrette
          </label>
        </div>
        {/* 4 */}
        <div className="flex">
          <input
            onClick={handleRadio4Click}
            type="radio"
            name="accommodation4"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation4"
            checked={radio4Checked}
          />
          <label
            htmlFor="accommodation4"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Medical Service
          </label>
        </div>
        {/* 5 */}
        <div className="flex">
          <input
            onClick={handleRadio5Click}
            type="radio"
            name="accommodation5"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation5"
            checked={radio5Checked}
          />
          <label
            htmlFor="accommodation5"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Bicycle hire Service
          </label>
        </div>
        {/* 6 */}
        <div className="flex">
          <input
            onClick={handleRadio6Click}
            type="radio"
            name="accommodation6"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation6"
            checked={radio6Checked}
          />
          <label
            htmlFor="accommodation6"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Hotel Safe
          </label>
        </div>
        {/* 7 */}
        <div className="flex">
          <input
            onClick={handleRadio7Click}
            type="radio"
            name="accommodation7"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation7"
            checked={radio7Checked}
          />
          <label
            htmlFor="accommodation7"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Hotel Safe
          </label>
        </div>
        {/* 8 */}
        <div className="flex">
          <input
            onClick={handleRadio8Click}
            type="radio"
            name="accommodation8"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation8"
            checked={radio8Checked}
          />
          <label
            htmlFor="accommodation8"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Gym
          </label>
        </div>
        {/* 9 */}
        <div className="flex">
          <input
            onClick={handleRadio9Click}
            type="radio"
            name="accommodation9"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation9"
            checked={radio9Checked}
          />
          <label
            htmlFor="accommodation9"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Day-Care Center
          </label>
        </div>
        {/* 10 */}
        <div className="flex">
          <input
            onClick={handleRadio10Click}
            type="radio"
            name="accommodation10"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation10"
            checked={radio10Checked}
          />
          <label
            htmlFor="accommodation10"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Car Hire
          </label>
        </div>
        {/* 11 */}
        <div className="flex">
          <input
            onClick={handleRadio11Click}
            type="radio"
            name="accommodation11"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation11"
            checked={radio11Checked}
          />
          <label
            htmlFor="accommodation11"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Secure Parking
          </label>
        </div>
        {/* 12 */}
        <div className="flex">
          <input
            onClick={handleRadio12Click}
            type="radio"
            name="accommodation12"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation12"
            checked={radio12Checked}
          />
          <label
            htmlFor="accommodation12"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Luggage Room
          </label>
        </div>
        {/* 13 */}
        <div className="flex">
          <input
            onClick={handleRadio13Click}
            type="radio"
            name="accommodation13"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation13"
            checked={radio13Checked}
          />
          <label
            htmlFor="accommodation13"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Valet Parking
          </label>
        </div>
        {/* 14 ----------------------------------------------- */}
        <div className="flex">
          <input
            onClick={handleRadio14Click}
            type="radio"
            name="accommodation14"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation14"
            checked={radio14Checked}
          />
          <label
            htmlFor="accommodation14"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Luggage Room
          </label>
        </div>
        {/* 15 */}
        <div className="flex">
          <input
            onClick={handleRadio15Click}
            type="radio"
            name="accommodation15"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation15"
            checked={radio15Checked}
          />
          <label
            htmlFor="accommodation15"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Valet Parking
          </label>
        </div>
        {/* 16 */}
        <div className="flex">
          <input
            onClick={handleRadio16Click}
            type="radio"
            name="accommodation16"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation16"
            checked={radio16Checked}
          />
          <label
            htmlFor="accommodation16"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Late Check-Out
          </label>
        </div>
        {/* 17 */}
        <div className="flex">
          <input
            onClick={handleRadio17Click}
            type="radio"
            name="accommodation17"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation17"
            checked={radio17Checked}
          />
          <label
            htmlFor="accommodation17"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Towels And Bed Linen
          </label>
        </div>
        {/* 18 */}
        <div className="flex">
          <input
            onClick={handleRadio18Click}
            type="radio"
            name="accommodation18"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation18"
            checked={radio18Checked}
          />
          <label
            htmlFor="accommodation18"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Hotels own bike shop/ workshop
          </label>
        </div>
        {/* 19 */}
        <div className="flex">
          <input
            onClick={handleRadio19Click}
            type="radio"
            name="accommodation19"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation19"
            checked={radio19Checked}
          />
          <label
            htmlFor="accommodation19"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Partners bike shop/workshop
          </label>
        </div>
        {/* 20 */}
        <div className="flex">
          <input
            onClick={handleRadio20Click}
            type="radio"
            name="accommodation20"
            className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
            id="accommodation20"
            checked={radio20Checked}
          />
          <label
            htmlFor="accommodation20"
            className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
          >
            Cloackroom
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByFacilities;
