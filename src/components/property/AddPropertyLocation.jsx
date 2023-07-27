const AddPropertyLocation = () => {
  return (
    <div className="max-w-[1170px] mt-20 mx-auto">
      <div>
        <h3 className="text-[#101828] text-3xl font-bold">Listing Location</h3>
      </div>

      {/* location */}
      <form>
        {/*Address and postal code*/}
        <div className="flex justify-between  gap-[30px] mt-6">
          <div className="w-full ">
            <label className=" text-[#7F8FA4]">Address</label>
            <input
              type="text"
              className="w-full px-3 mt-1  border py-1.5 focus:outline-none rounded-md "
              placeholder="Address"
            />
          </div>
          <div className="w-full">
            <p className="text-[#7F8FA4]">Postal Code</p>
            <input
              type="text"
              className="w-full border mt-1 py-1.5 px-3 focus:outline-none rounded-md "
              placeholder="Postal Code"
            />
          </div>
        </div>

        {/* state and local area */}
        <div className="flex justify-between gap-[30px]">
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">State</label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">Local Govt Area</label>
            <input
              type="text"
              className="w-full px-3 mt-1 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* select map */}

        <div className="mt-8 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25216.02725253413!2d144.969087430368!3d-37.81338919236517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1690440253485!5m2!1sen!2sbd"
            width="1170"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            className="absolute border border-[#7F56D9]  bg-gradient-to-r from-[#0E58B2] to-[#169BC2] left-[40%] bottom-4 text-white px-20 leading-[32px] rounded-md text-lg font-bold py-2"
            type="button"
          >
            Place Pin with Address
          </button>
        </div>

        {/* Latitude (for Maps Pin Position) */}
        <div className="flex justify-between gap-[30px]">
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">
              Latitude (for Maps Pin Position)
            </label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
          <div className="w-full mt-5">
            <label className="text-[#7F8FA4]">
              Longitude (for Maps Pin Position)
            </label>
            <input
              type="text"
              className="w-full mt-1 px-3 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* Weekend Price */}
        <div className="w-[570px] mt-5">
          <div className="w-full ">
            <label className="text-[#7F8FA4]">
              Street View - Camera Angle (value from 0 to 360)
            </label>
            <input
              type="text"
              className="w-full px-3  mt-1 border py-1.5 focus:outline-none rounded-md "
              placeholder="Title"
            />
          </div>
        </div>

        {/* submit Button */}

        <div className="mt-10">
          <button
            className="border py-[15px] px-32 bg-gradient-to-r from-[#0E59B2] to-[#159AC2] text-white text-[15px] font-medium rounded-md "
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyLocation;
