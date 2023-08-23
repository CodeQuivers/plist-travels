import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import GuestDetail from "./GuestDetail";

const GuestDropdown = ({
  register,
  setValue,
  control,
  getValues,
}) => {
  const fieldArrayName = "guest";
  const { fields, append, remove } = useFieldArray({
    name: fieldArrayName,
    control,
  });
  const handleNumberOfRoomChange = (flag) => {
    const numOfRoom = parseInt(getValues("rooms"));
    const totalGuest = parseInt(getValues('totalGuest'));
    if (flag && numOfRoom < 4) {
      setValue("rooms", numOfRoom + 1);
      append({
        adult: 1,
        child: 0,
      });
      setValue('totalGuest', totalGuest+1)
    }
    if (!flag && numOfRoom > 1) {
      remove(numOfRoom - 1);
      setValue("rooms", numOfRoom - 1);
      setValue('totalGuest', totalGuest-1)

    }
  };
  return (
    <div className="relative ">
      <div className="absolute p-2 drop-shadow-md rounded bg-white mt-3 flex flex-col gap-5">
        <div className="flex justify-between gap-4">
          <p>Rooms</p>
          <p className="flex text-base gap-2 justify-between items-center">
            <button
              className="bg-gray-200 rounded-full text-center w-6 h-6"
              onClick={() => handleNumberOfRoomChange(false)}
            >
              -
            </button>
            <input className="hidden" type="number" {...register("rooms")} />
            <span>{getValues("rooms")}</span>
            <button
              className="bg-gray-200 rounded-full text-center w-6 h-6"
              onClick={() => handleNumberOfRoomChange(true)}
            >
              +
            </button>
          </p>
        </div>
        <hr className="gray-divider" />
        {fields.map((item, idx) => (
          <GuestDetail
            key={idx}
            item={item}
            idx={idx}
            register={register}
            setValue={setValue}
            getValues={getValues}
            fieldArrayName={fieldArrayName}
          />
        ))}
        <button
        //   onClick={setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GuestDropdown;
