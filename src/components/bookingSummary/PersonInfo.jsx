import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { useFieldArray, useForm } from "react-hook-form";
import ErrorAlert from "../shared/alert/ErrorAlert";
import {
  GENDER_OPTIONS,
  PERSON_TITLE_OPTIONS,
} from "../../utils/Data/FlightData";

const PersonInfo = ({
  title,
  register,
  Controller,
  control,
  errors,
  type,
  persons,
}) => {
  
  const { fields, append } = useFieldArray({
    name: `${type}`,
    control,
  });

  useEffect(() => {
    for (let i = 1; i <= persons; i++) {
      append({
        title: "",
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        id: "",
      });
    }
  }, [persons]);

  return (
    <>
      {fields.map((item, idx) => (
        <>
          <h4 className="text-base font-medium text-[#334150]">
            {title} {idx + 1}
          </h4>

          <div className="flex justify-between">
            {/* block of information */}
            <div className=" w-[70px] flex flex-col gap-1.5">
              <label htmlFor="" className="text-sm font-normal text7F8FA4">
                Title<sup className="text-red-600">*</sup>
              </label>
              <div className="border rounded gray-border px-1 text-black">
                <Controller
                  name={`${type}.${idx}.title`}
                  control={control}
                  rules={{ required: "Title is rquired!" }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    // fieldState: { invalid, isTouched, isDirty, error },
                    // formState,
                  }) => (
                    <Select
                      style={{
                        border: "none",
                        padding: "0",
                      }}
                      options={PERSON_TITLE_OPTIONS}
                      placeholder="Mr."
                      onChange={(val) => onChange(val[0].value)}
                    />
                  )}
                />
              </div>
            </div>
            {/* First name */}
            <div className="w-2/5 flex flex-col gap-1.5">
              <label
                htmlFor="first name"
                className="text-sm font-normal text7F8FA4"
              >
                First Name<sup className="text-red-600">*</sup>
              </label>
              <div className="border rounded gray-border p-1">
                <input
                  type="text"
                  placeholder="Mashod"
                  className="outline-none"
                  {...register(`${type}.${idx}.first_name`, {
                    required: "First name is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters!",
                    },
                  })}
                />
              </div>
            </div>
            {/* Last name */}
            <div className="w-2/5 flex flex-col gap-1.5">
              <label htmlFor="" className="text-sm font-normal text7F8FA4">
                Last Name
              </label>
              <div className="border rounded gray-border p-1">
                <input
                  type="text"
                  placeholder="Rana"
                  className="outline-none"
                  {...register(`${type}.${idx}.last_name`)}
                />
              </div>
            </div>
          </div>

          {/* Show Error message for title and first name filed */}
          {errors?.[type]?.[idx]?.title && <ErrorAlert message={errors?.[type]?.[idx]?.title.message} />}
          {errors?.[type]?.[idx]?.first_name && <ErrorAlert message={errors?.[type]?.[idx]?.first_name.message} />}

          {/* second block for information */}
          <div className="flex justify-between">
            <div className=" w-[30%] flex flex-col gap-1.5">
              <label htmlFor="" className="text-sm font-normal text7F8FA4">
                DOB<sup className="text-red-600">*</sup>
              </label>
              <div className="border rounded gray-border p-1 text-black">
                <input
                  type="date"
                  placeholder="MR."
                  className="outline-none"
                  {...register(`${type}.${idx}.dob`, {
                    required: "Date of birth is required!",
                  })}
                />
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-1.5">
              <label htmlFor="" className="text-sm font-normal text7F8FA4">
                Gender<sup className="text-red-600">*</sup>
              </label>
              <div className="border rounded gray-border p-1">
                <Controller
                  name={`${type}.${idx}.gender`}
                  control={control}
                  rules={{ required: "Gender is rquired!" }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    // fieldState: { invalid, isTouched, isDirty, error },
                    // formState,
                  }) => (
                    <Select
                      style={{
                        border: "none",
                        padding: "0",
                      }}
                      options={GENDER_OPTIONS}
                      onChange={(val) => onChange(val[0].value)}
                      placeholder="Male"
                    />
                  )}
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
                  placeholder="Ismaillinks"
                  className="outline-none w-full"
                  {...register(`${type}.${idx}.id`)}
                />
              </div>
            </div>
          </div>
          {errors?.[type]?.[idx]?.dob && <ErrorAlert message={errors?.[type]?.[idx]?.dob.message} />}
          {errors?.[type]?.[idx]?.gender && <ErrorAlert message={errors?.[type]?.[idx]?.gender.message} />}
        </>
      ))}
    </>
  );
};

export default PersonInfo;
