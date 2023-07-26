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
            <label className="text-[#7F8FA4]">Price Per Night (7 Day+)</label>
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
      </form>
    </div>
  );
};

export default AddPropertyPriceForm;
