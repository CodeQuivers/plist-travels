import React from "react";

import Select from "react-dropdown-select";


const JobApplyForm = () => {
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

      const countryOptions = [
        {
            value: 1,
            label: "Bangladesh",
          },
          {
            value: 2,
            label: "Japan",
          },
      ]
      const genderOptions = [
        {
            value: 1,
            label: "Male",
          },
          {
            value: 2,
            label: "Female",
          },
      ]
  return (
    <form action="">
      <div className="flex flex-col flex-col gap-6">
        {/* First block: name title */}
        <div className="flex justify-between">
          <div className=" w-[70px] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Title<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border px-1 text-black">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                options={options}
                placeholder="Mr."
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              First Name<sup className="text-red-600">*</sup>
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="text"
                placeholder="Ismaillinks"
                className="outline-none"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm font-normal text7F8FA4">
              Last Name
            </label>
            <div className="border rounded gray-border p-1">
              <input
                type="text"
                placeholder="Hussain"
                className="outline-none"
              />
            </div>
          </div>
        </div>

        {/* second block: birthday gender, linkedin profile */}
        <div className="flex gap-9">
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Birth Day<sup className="text-red-600">*</sup>
            </label>
            <input
              type="date"
              placeholder=""
              className="border gray-border text-base px-3 py-2"
            />
          </div>

          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Gender<sup className="text-red-600">*</sup>
            </label>
            <div className="border gray-border text-base px-3">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                options={genderOptions}
                placeholder="Male"
              />
            </div>
          </div>
          {/* Linked In */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              LinkedIn Profile Links
            </label>
            <input
              type="text"
              placeholder="@linkedin"
              className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>

        {/* Third block: country, mail, phone */}
        <div className="flex gap-9">
          {/* Country */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Country *<sup className="text-red-600">*</sup>
            </label>
            <div className="border gray-border text-base px-3">
              <Select
                style={{
                  border: "none",
                  padding: "0",
                }}
                options={countryOptions}
                placeholder="Bangladesh"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Email *<sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              placeholder="mashod0rana@gmail.com"
              className="border gray-border text-base px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Phone*<sup className="text-red-600">*</sup>
            </label>
            <input
              type="number"
              placeholder="+88 09638-945755"
              className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>

        {/* Tell us Block */}
        <div>
          {/* tell us */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Tell us, in 150 words or less, why you'd love to join the Plist
              crew.
            </label>
            <textarea
              type="number"
              placeholder="Please Write"
              rows={4}
              className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>

        {/* Last Block: zip code, cv upload */}
        <div className="flex gap-9">
          {/* zip code */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Zip Code<sup className="text-red-600">*</sup>
            </label>
            <input
              type="number"
              placeholder="2586"
              className="border gray-border text-base px-3 py-2"
            />
          </div>
          {/* CV Upload */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              CV Upload<sup className="text-red-600">*</sup>
            </label>
            <input
              type="file"
              //   className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default JobApplyForm;
