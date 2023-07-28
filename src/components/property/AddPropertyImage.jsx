import Select from "react-dropdown-select";

const AddPropertyImage = () => {
  const options = [
    {
      value: 1,
      label: "Youtube",
    },
    {
      value: 2,
      label: "Facebook",
    },
    {
      value: 3,
      label: "Twitter",
    },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col gap-[30px]">
          {/* Head title  */}
          <p className="dmsan-font text-[32px]">Image</p>
          {/* drag and drop file upload */}
          <div className="">
            <div className="py-4 px-6 h-[136px] border bg-[#F9FAFB] border-[#E4E7EC] rounded-lg">
              <input type="file" name="" id="" />
            </div>
            <div className="mt-5">
              <p>*Double Click on the image to select featured.</p>
              <p>**Change images order with Drag & Drop.</p>
            </div>
          </div>
          {/* video from */}
          <div className="flex gap-[30px]">
            <div>
              <label htmlFor="">Video from</label>
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
            <div>
              <label htmlFor="">Video id</label>
              <input
                type="text"
                name=""
                id=""
                className="w-[569px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                placeholder="Dhaka"
              />
            </div>
          </div>
          {/* video id textarea */}
          <div>
            <label htmlFor="">Video id:</label>
            <textarea
              className="w-full h-[198px] border focus:outline-none border-[#D0D5DD] rounded py-3 px-4 mt-[6px]"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          {/* button */}
          <button></button>
        </div>
      </div>
    </>
  );
};

export default AddPropertyImage;
