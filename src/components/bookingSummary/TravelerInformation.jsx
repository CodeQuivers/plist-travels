import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { useFieldArray, useForm } from "react-hook-form";
import ErrorAlert from "../shared/alert/ErrorAlert";
import PersonInfo from "./PersonInfo";

const TravelerInformation = ({
  travelerInfo,
  register,
  Controller,
  control,
  errors,
  fields,
  append,
}) => {
  const { adults, children, infants } = travelerInfo || {};
  const [isAlertClose, setIsAlertClose] = useState(true);
  const { fields: adultList, append: adultListAppend } = useFieldArray({
    name: "person",
    control,
  });
  const { fields: childList, append: childListAppend } = useFieldArray({
    name: "child",
    control,
  });

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

  useEffect(() => {
    for (let i = 1; i <= adults; i++) {
      console.log("00000000000000000000000000000", adults);
      adultListAppend({
        title: "Mr.",
        first_name: "Mashod",
        last_name: "rana",
        dob: "",
        gender: "Male",
        id: "",
      });
    }
    for (let i = 1; i <= children; i++) {
      console.log("00000000000000000000000000000", children);
      childListAppend({
        title: "Mr.",
        first_name: "Mashod",
        last_name: "rana",
        dob: "",
        gender: "Male",
        id: "",
      });
    }
  }, [adults, children]);
  return (
    <div className="grad-border-olc flex flex-col gap-6 py-5">
      <div>
        <h2 className="text-[#334150] text-2xl font-semibold px-5 pop-font">
          Traveler Information
        </h2>
      </div>
      <div className="w-full gray-divider"></div>

      {/* ...............Form start here................ */}

      <div className="flex flex-col gap-5 px-5 mb-7">
        {adultList.map((item, idx) => (
          <PersonInfo
            key={idx}
            idx={idx}
            title={"Adult"}
            register={register}
            Controller={Controller}
            control={control}
            errors={errors}
            type={'adult'}
          />
        ))}
        {childList.map((item, idx) => (
          <PersonInfo
            key={idx}
            idx={idx}
            title={"Child"}
            type={'child'}
            register={register}
            Controller={Controller}
            control={control}
            errors={errors}
          />
        ))}


        {/* Third block for information */}

        <div className="flex justify-between">
          <div className=" w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Country<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1 text-black">
              <input
                type="text"
                placeholder="MR."
                className="outline-none"
                {...register("country", { required: "Country is required" })}
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Email<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="email"
                placeholder="MR."
                className="outline-none w-full"
                {...register("email", { required: "Email is required" })}
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Phone<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="text"
                placeholder="MR."
                className="outline-none w-full"
                {...register("phone", { required: "Phone is required" })}
              />
            </div>
          </div>
        </div>
        {errors.country && (
          <ErrorAlert
            message={errors.country.message}
            closeAltert={setIsAlertClose}
          />
        )}
        {errors.email && (
          <ErrorAlert
            message={errors.email.message}
            closeAltert={setIsAlertClose}
          />
        )}
        {errors.phone && (
          <ErrorAlert
            message={errors.phone.message}
            closeAltert={setIsAlertClose}
          />
        )}
        <div className="felx flex-col ">
          <label htmlFor="" className="text-sm font-normal text7F8FA4">
            Address<sup className="text-red-600">*</sup>
          </label>
          <div className="border rounded gray-border p-1">
            <textarea
              type="text"
              placeholder="Your Address"
              className="outline-none w-full"
              {...register("address", { required: "Address is required!" })}
            />
          </div>
        </div>
        {errors.address && (
          <ErrorAlert
            message={errors.address.message}
            closeAltert={setIsAlertClose}
          />
        )}

        {/* Zip code and Payment type */}
        <div className="flex gap-5">
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Zip Code<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="text"
                placeholder="3520"
                className="outline-none w-full"
                {...register("zip_code", { required: "Zip code is required!" })}
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Payment Type<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <Controller
                name="payment_type"
                control={control}
                rules={{ required: "Payment is rquired!" }}
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
                    options={payOpts}
                    onChange={(val) => onChange(val[0].label)}
                    placeholder="Flutterwave"
                  />
                )}
              />
            </div>
          </div>
        </div>

        {errors.zip_code && (
          <ErrorAlert
            message={errors.zip_code.message}
            closeAltert={setIsAlertClose}
          />
        )}
        {errors.payment_type && (
          <ErrorAlert
            message={errors.payment_type.message}
            closeAltert={setIsAlertClose}
          />
        )}
      </div>
    </div>
  );
};

export default TravelerInformation;
