import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import Select from "react-dropdown-select";
import { useForm } from "react-hook-form";
import ErrorAlert from "../shared/alert/ErrorAlert";

const PersonInfo = ({ title, register, Controller, control, errors, idx, type}) => {
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

  const genderOptions = [
    {
      value: "m",
      label: "Male",
    },
    {
      value: "f",
      label: "Female",
    },
    {
      value: "o",
      label: "Other",
    },
  ];
  return (
    <>
      <h4 className="text-base font-medium text-[#334150]">{title} {idx+1}</h4>

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
                  options={options}
                  placeholder="Mr."
                  onChange={(val) => onChange(val[0].label)}
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
              placeholder="MR."
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
              placeholder="MR."
              className="outline-none"
              {...register(`${type}.${idx}.last_name`)}
            />
          </div>
        </div>
      </div>
      {errors.title && <ErrorAlert message={errors.title.message} />}
      {errors.first_name && <ErrorAlert message={errors.first_name.message} />}
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
                  options={genderOptions}
                  onChange={(val) => onChange(val[0].label)}
                  placeholder="Flutterwave"
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
              placeholder="MR."
              className="outline-none w-full"
              {...register(`${type}.${idx}.id`)}
            />
          </div>
        </div>
      </div>
      {errors.dob && <ErrorAlert message={errors.dob.message} />}

      {errors.gender && <ErrorAlert message={errors.gender.message} />}
    </>
  );
};

export default PersonInfo;
