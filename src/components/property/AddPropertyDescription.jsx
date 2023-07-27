import Select from "react-dropdown-select";

const AddPropertyDescription = () => {
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
    <>
      <div className="max-w-[1170px] mt-20 mx-auto">
        <div className="text-[32px] dmsan-font font-extrabold mb-7">
          <p>Description</p>
        </div>
        {/* description form */}
        <form>
          <div className="flex flex-col gap-7 pop-font text-base">
            {/* child 1 */}
            <div className="flex flex-col">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name=""
                id=""
                className="h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                placeholder="Title"
              />
            </div>
            {/* child 2 */}
            <div className="flex gap-8">
              <div className="w-[569px] flex flex-col">
                <label htmlFor="">
                  Category/Subcategory(Select Best Subcategory)
                </label>
                <Select
                  style={{
                    width: "569px",
                    border: "1px solid #D0D5DD",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    color: "#667085",
                    fontSize: "16px",
                  }}
                  className="mt-[6px] h-12 shadow-sm"
                  options={options}
                  placeholder="Per Day/Night"
                />
              </div>
              <div className="w-[569px] flex flex-col">
                <label htmlFor="">Listing Type (Select Best Type)</label>
                <Select
                  style={{
                    width: "569px",
                    border: "1px solid #D0D5DD",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    color: "#667085",
                    fontSize: "16px",
                  }}
                  className="mt-[6px] h-12 shadow-sm"
                  options={options}
                  placeholder="Per Day/Night"
                />
              </div>
            </div>
            {/* child 3 */}
            <div className="w-[569px] flex flex-col">
              <label htmlFor="">Max Guest No</label>
              <Select
                style={{
                  width: "569px",
                  border: "1px solid #D0D5DD",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-[6px] h-12 shadow-sm"
                options={options}
                placeholder="Per Day/Night"
              />
            </div>
            {/* child 4 */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[569px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                  placeholder="Dhaka"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Neighborhood/Area</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[569px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                  placeholder="Dhaka"
                />
              </div>
            </div>
            {/* child 5 */}
            <div className="flex flex-col">
              <label htmlFor="">Listing Description</label>
              <input
                type="text"
                name=""
                id=""
                className="w-[569px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                placeholder="Dhaka"
              />
            </div>
            {/* child 6 */}
            <div className="flex gap-3 mt-2">
              <input type="checkbox" name="" id="" />
              <p>
                Allow instant booking? If checked, you will not have the option
                to reject a booking request.
              </p>
            </div>
            {/* child 7 */}
            <button
              style={{ fontSize: "18px" }}
              className="w-[287px] h-[56px] old-logo-color text-white rounded-lg"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPropertyDescription;
