const AddPropertyDetails = () => {
  return (
    <>
      <div className="max-w-[1170px] mt-20 mx-auto">
        <div className="text-[32px] dmsan-font font-extrabold mb-7">
          <p>Listing Details</p>
        </div>
        {/* description form */}
        <form>
          <div className="flex flex-col gap-7 pop-font">
            {/* child 1 */}
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
            {/* child 2 */}
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
            {/* child 3 */}
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
            {/* child 6 */}
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
            </div>
            {/* child 7 */}
            <div className="h-[206px] border py-8 px-9 flex flex-col gap-5">
              <div>
                <p>Custom Details</p>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="">Label</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[362px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                    placeholder="Dhaka"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="">Label</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[362px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                    placeholder="Dhaka"
                  />
                </div>
                <button
                  style={{ fontSize: "18px" }}
                  className="mt-10 ml-8 w-[250px] h-12 old-logo-color text-white rounded-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPropertyDetails;
