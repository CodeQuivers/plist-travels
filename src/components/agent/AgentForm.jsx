import Select from "react-dropdown-select";

const AgentForm = () => {
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
  ];
  const genderOptions = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];
  return (
    <form action="">
      <div className="flex  flex-col gap-6">
        {/* First block: name title */}
        <div className="flex justify-between">
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

        {/* Second block: country, mail, phone */}
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
              Address
            </label>
            <textarea
              type="number"
              placeholder="Your Full Address"
              rows={4}
              className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>

        {/* Last Block: zip code, cv upload */}
        <div className="flex gap-9">
          {/* Password */}
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Password<sup className="text-red-600">*</sup>
            </label>
            <input
              type="password"
              placeholder="********"
              className="border gray-border text-base px-3 py-2"
            />
          </div>
          <div className="w-[30%] flex flex-col gap-1.5">
            <label htmlFor="" className="text-sm text7F8FA4">
              Confirm Password<sup className="text-red-600">*</sup>
            </label>
            <input
              type="password"
              placeholder="********"
              className="border gray-border text-base px-3 py-2"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-[25px]">
        <input type="checkbox" name="" id="" />
        <p>
          I agree to the <span className="tc">Terms</span>,{" "}
          <span className="tc">Privacy Policy</span> and{" "}
          <span className="tc">Fees</span>
        </p>
      </div>

      <div className="w-full flex mx-auto pop-font p-5">
        <div className=" old-logo-color text-white dmsan-font font-bold flex justify-center items-center rounded-[10px] mx-auto">
          <div className="w-[310px] h-[48px] flex justify-center items-center">
            <button>Become An Agent</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AgentForm;
