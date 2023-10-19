import React, { useState } from "react";

const GuestDetail = ({
  register,
  setValue,
  getValues,
  item,
  idx,
  fieldArrayName,
}) => {
  const ADULT = "adult";
  const CHILD = "child";
  
  const [numOfChild, setNumofChild] = useState(getValues(`${fieldArrayName}.${idx}.child`));
  const [numOfAdult, setNumOfAdult] = useState(getValues(`${fieldArrayName}.${idx}.adult`));

  const handleOnClick = (isIncrement, propName) => {
    const filedName = `${fieldArrayName}.${idx}.${propName}`;
    const fieldValue = parseInt(getValues(filedName));
    const totalGuest = parseInt(getValues("totalGuest"));
    if (!isIncrement && fieldValue > 1) {
      setValue(filedName, fieldValue - 1);
      setValue("totalGuest", totalGuest - 1);

      if(propName===ADULT){
        setNumOfAdult(fieldValue-1);
      }
      else if(propName===CHILD){
        setNumofChild(fieldValue-1);
      }
    }
    if (isIncrement && fieldValue < 4) {
      setValue(filedName, fieldValue + 1);
      setValue("totalGuest", totalGuest + 1);

      if(propName===ADULT){
        setNumOfAdult(fieldValue+1);
      }
      else if(propName===CHILD){
        setNumofChild(fieldValue+1);
      }
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <input
        className="hidden"
        {...register(`${fieldArrayName}.${idx}.adult`)}
      />
      <input
        className="hidden"
        {...register(`${fieldArrayName}.${idx}.child`)}
      />
      <div className="flex justify-between items-center gap-4">
        <p>Adults</p>
        <p className="flex gap-2 text-base">
          <button
            type="button"
            onClick={() => handleOnClick(false, ADULT)}
            className="bg-gray-200 rounded-full text-center w-6 h-6"
          >
            -
          </button>
          <span className="w-4 text-center ">
            {/* {getValues(`${fieldArrayName}.${idx}.adult`)} */}
            {numOfAdult}
          </span>
          <button
            type="button"
            onClick={() => handleOnClick(true, ADULT)}
            className="bg-gray-200 rounded-full text-center w-6 h-6"
          >
            +
          </button>
        </p>
      </div>
      <div className="flex justify-between gap-4">
        <p>Child</p>
        <p className="flex gap-2 text-base">
          <button
            type="button"
            onClick={() => handleOnClick(false, CHILD)}
            className="bg-gray-200 rounded-full text-center w-6 h-6"
          >
            -
          </button>
          <span className="w-4 text-center ">
            {/* {getValues(`${fieldArrayName}.${idx}.child`)} */}
            {numOfChild}
          </span>
          <button
            type="button"
            onClick={() => handleOnClick(true, CHILD)}
            className="bg-gray-200 rounded-full text-center w-6 h-6"
          >
            +
          </button>
        </p>
      </div>
    </div>
  );
};

export default GuestDetail;
