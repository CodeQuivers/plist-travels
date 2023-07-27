import Select from "react-dropdown-select";

const AddPropertyPriceForm = () => {
  const options = [
    {
      value: 1,
      label: "Per Day/Night",
    },
    {
      value: 2,
      label: "1 Room(s) - 2 Guest(s)",
    },
    {
      value: 3,
      label: "2 Room(s) - 4 Guest(s)",
    },
  ];
  return (
    <div className="max-w-[1170px] mt-20 mx-auto">
      <div>
        <h3 className="text-[#101828] text-3xl font-bold">Listing Price</h3>
      </div>

      {/* form */}

      <form>
        <div className="w-[570px] mt-5">
          <label className="text-[#7F8FA4]">Booking Type</label>
          <Select
            style={{
              border: "1px solid red",
              borderRadius: "5px",
              paddingLeft: "10px",
              color: "#667085",
              fontSize: "16px",
            }}
            className="mt-2 pl-10  w-[570px] border !border-[#808996a9]  rounded"
            options={options}
            placeholder="Per Day/Night"
          />
        </div>
        {/* price per night , before label , after label */}
        <div className="flex justify-between gap-[30px] mt-6">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">Price Per Night</label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="$"
            />
          </div>
          <div className="w-full">
            <p className="text-[#7F8FA4]">Before Label</p>
            <input
              type="text"
              className="w-full border py-1.5 px-3 focus:outline-none rounded-md "
              placeholder="Label"
            />
          </div>
          <div className="w-full">
            <p className="text-[#7F8FA4]">After Label </p>
            <input
              type="text"
              className="w-full border py-1.5 px-3 focus:outline-none rounded-md "
              placeholder="Dhaka"
            />
          </div>
        </div>

        {/* value (taxes ) */}
        <div className="w-[570px] mt-5">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">
              Value (Taxes Are Considered Included iIn The Price)
            </label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Per Day/Night"
            />
          </div>
        </div>

        {/* Price per Night */}
        <div className="flex justify-between gap-[30px]">
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">Price Per Night (7 Day+)</label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
            <span className="text-[#667085] mt-1 text-sm">
              Price per night if the item is rented for more than 1 week (7
              nights) or more than 1 month (30 nights)
            </span>
          </div>
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">Price Per Night (30 Day+)</label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* Weekend Price */}
        <div className="w-[570px] mt-5">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">Weekend Price</label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Per Day/Night"
            />
          </div>
        </div>

        {/* Cleaning fee */}
        <div className="flex justify-between gap-[30px]">
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">
              Cleaning Fee in (only numbers)
            </label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">Cleaning Fee calculation</label>
            <Select
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                paddingLeft: "10px",
                color: "#667085",
                fontSize: "16px",
              }}
              className="mt-1  pl-10  w-[570px] border !border-[#808996a9]  rounded"
              options={options}
              placeholder="Single Fee"
            />
          </div>
        </div>
        {/* City  fee */}
        <div>
          <div className="flex justify-between gap-[30px]">
            <div className="w-full mt-5">
              <label className="text-[#7F8FA4]">
                City Fee in ₦ (only numbers)
              </label>
              <input
                type="text"
                className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
                placeholder="Title"
              />
            </div>
            <div className="w-full mt-5">
              <label className="text-[#7F8FA4]">City Fee calculation</label>
              <Select
                style={{
                  border: "1px solid red",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-1  pl-10  w-[570px] border !border-[#808996a9]  rounded"
                options={options}
                placeholder="Single Fee"
              />
            </div>
          </div>

          <div className="mt-2">
            <input id="cityFeeAccept" type="checkbox" />
            <label htmlFor="cityFeeAccept" className="pl-2 text-[#667085]">
              City Fee is a % of the daily fee
            </label>
          </div>
        </div>

        {/* Minimum nights of booking */}
        <div className="w-[570px] mt-5">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">Minimum nights of booking</label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* security deposit*/}
        <div className="w-[570px] mt-5">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">Security Deposit</label>
            <input
              type="text"
              className="w-full px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
          <span className="text-[13px] text-[#667085]">
            Security Deposit in ₦ - will be refunded if no complaints are
            received from the owner
          </span>
        </div>

        {/* Value in % and minimum  no of days in advance */}
        <div className="flex justify-between gap-[30px]">
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">Value in %</label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
            <span className="text-[#667085] text-sm">
              Early Bird Discount - in % from the price per nigh t
            </span>
          </div>
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">
              Minimum no of days in advance
            </label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* Extra Price per guest per night  */}
        <div>
          <div className="flex mt-5 items-center justify-between gap-[30px]">
            <div className="w-full ">
              <label className="text-[#7F8FA4]">
                Extra Price per guest per night in ₦
              </label>
              <input
                type="text"
                className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
                placeholder="Title"
              />
            </div>
            <div className="w-full mt-7 ">
              <input id="allowGuestCapacity" type="checkbox" />
              <label
                htmlFor="allowGuestCapacity"
                className="ml-2 text-[#7F8FA4]"
              >
                Allow guests above capacity?
              </label>
            </div>
          </div>
          <div className="w-[570px] flex items-center mt-5">
            <input id="payByNoOfGhost" type="checkbox" />
            <label
              htmlFor="payByNoOfGhost"
              className="text-[13px] ml-2  text-[#667085]"
            >
              Pay by the no of guests (room prices will NOT be used anymore and
              billing will be done by guest no only)
            </label>
          </div>
        </div>

        {/* Allow only bookings starting with the check-in on */}
        <div>
          <div className="flex justify-between gap-[30px]">
            <div className="w-full mt-5">
              <label className="text-[#7F8FA4]">
                Allow only bookings starting with the check-in on
              </label>
              <Select
                style={{
                  border: "1px solid red",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-1  pl-10  w-[570px] border !border-[#808996a9]  rounded"
                options={options}
                placeholder="All"
              />
            </div>
            <div className="w-full mt-5">
              <label className="text-[#7F8FA4]">
                Allow only bookings with the check-in/check-out on
              </label>
              <Select
                style={{
                  border: "1px solid red",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-1  pl-10  w-[570px] border !border-[#808996a9]  rounded"
                options={options}
                placeholder="All"
              />
            </div>
          </div>
        </div>

        {/* extra options */}
        <div className="mt-8 px-4 py-5 border rounded-2xl border-[#0E55B1]">
          <div>
            <h4 className="font-bold text-lg text-[#101828]">Extra Option</h4>
          </div>

          <div className="mt-5 flex justify-between items-end gap-4">
            <div className="w-full">
              <label htmlFor="extraName" className="font-medium text-[#0D233E]">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-2 px-3 border border-[#D0D5DD] py-1.5 focus:outline-none rounded-md "
                placeholder="Your Name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="extraName" className="font-medium text-[#0D233E]">
                Value
              </label>
              <input
                type="text"
                className="w-full mt-2 px-3 border border-[#D0D5DD]  py-1.5 focus:outline-none rounded-md "
                placeholder="01"
              />
            </div>

            <div className="w-full">
              <label htmlFor="singleFee" className="font-medium text-[#0D233E]">
                Single Fee
              </label>
              <Select
                style={{
                  border: "1px solid #D0D5DD",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-1  pl-10  w-[570px] border !border-[#808996a9]  rounded"
                options={options}
                placeholder="Per Night"
              />
            </div>
            <div className="w-full">
              <button
                className="border py-[7px] bg-gradient-to-r from-[#0E59B2] to-[#159AC2] text-white text-[15px] font-medium rounded-md w-full"
                type="button"
              >
                Add Option
              </button>
            </div>
          </div>
        </div>

        {/* submit Button */}

        {/* <div className="mt-10">
          <button
            className="border py-[7px] px-32 bg-gradient-to-r from-[#0E59B2] to-[#159AC2] text-white text-[15px] font-medium rounded-md "
            type="submit"
          >
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default AddPropertyPriceForm;
