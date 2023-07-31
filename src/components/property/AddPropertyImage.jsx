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
          <div className="sm:col-span-6">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium text-gray-700"
            >
              Cover photo
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
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
