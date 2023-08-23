import React from "react";

const GuestDropdown = () => {
  return (
    <div className="absolute p-2 drop-shadow-md rounded bg-white mt-3 flex flex-col gap-5">
      <div className="flex justify-between gap-4">
        <p>Rooms</p>
        <p className="flex gap-2 text-base">
          <button className="bg-gray-200 rounded-full text-center w-6 h-6">
            -
          </button>
          <span>10</span>
          <button className="bg-gray-200 rounded-full text-center w-6 h-6">
            +
          </button>
        </p>
      </div>
      <hr className="gray-divider" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-4">
          <p>Adults</p>
          <p className="flex gap-2 text-base">
            <button className="bg-gray-200 rounded-full text-center w-6 h-6">
              -
            </button>
            <span>10</span>
            <button className="bg-gray-200 rounded-full text-center w-6 h-6">
              +
            </button>
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <p>Child</p>
          <p className="flex gap-2 text-base">
            <button className="bg-gray-200 rounded-full text-center w-6 h-6">
              -
            </button>
            <span>10</span>
            <button className="bg-gray-200 rounded-full text-center w-6 h-6">
              +
            </button>
          </p>
        </div>
      </div>
      <button
      //   onClick={setIsOpen(false)}
      >
        Close
      </button>
    </div>
  );
};

export default GuestDropdown;
