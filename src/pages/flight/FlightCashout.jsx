import InputField from "../../components/flight/InputField";
import plainImg from "../../assets/image/flight/images/plainImg.png";
import LongArrowRight from "../../assets/image/flight/icons/Long-arrow-right.svg";
import Security from "../../assets/image/flight/icons/Security.svg";

const FlightCashout = () => {
  return (
    <>
      <div className="w-[1170px] mx-auto">
        <div className="flex gap-7 mt-12">
          {/* flight 1st child cashout */}
          <div className="w-[670px] border-2 pt-5 pb-10 rounded-[10px]">
            <h1 className="text-2xl py-4 px-5">Traveler Information</h1>
            <hr />
            <form className="px-5">
              <h2 className=" pt-6 pb-[18px]">Adult 1</h2>
              {/* master parent */}
              <div className="flex flex-col gap-[18px]">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="">Title *</label>
                    <input
                      className="w-[70px] h-[36px] rounded-md border-2 border-solid border-gray-300 bg-white"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <InputField
                    label="Fast Name"
                    width="w-[260px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                  <InputField
                    label="Last Name"
                    width="w-[260px]"
                    type="text"
                    placholder="Hussain"
                  />
                </div>

                <div className="flex gap-5">
                  <InputField
                    label="DOB"
                    width="w-[196px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                  <InputField
                    label="Last Name"
                    width="w-[196px]"
                    type="text"
                    placholder="Hussain"
                  />
                  <InputField
                    label="ID"
                    width="w-[196px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                </div>

                <div className="flex gap-5">
                  <InputField
                    label="DOB"
                    width="w-[196px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                  <InputField
                    label="Last Name"
                    width="w-[196px]"
                    type="text"
                    placholder="Hussain"
                  />
                  <InputField
                    label="ID"
                    width="w-[196px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="">Address *</label>
                  <textarea
                    placeholder="Your Address"
                    className="w-[630px] h-[93px] border border-solid border-gray-300"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div className="flex gap-5">
                  <InputField
                    label="Zip Code"
                    width="w-[196px]"
                    type="text"
                    placholder="Ismaillinks"
                  />
                  <InputField
                    label="Payment Type"
                    width="w-[196px]"
                    type="text"
                    placholder="Hussain"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* flight 2nd child */}
          <div className="w-[470px] border-2 rounded-[10px]">
            <div>
              <div className="w-[470px] h-[281px]">
                <img src={plainImg} alt="" className="w-full" />
                <hr />
              </div>

              <div>
                <div className="px-5 mt-9 pop-font mb-5">
                  <h1 className="text-2xl font-semibold leading-8 pb-2">
                    New Delhi to Mumbai
                  </h1>
                  <p>One way Flight</p>
                </div>
                <hr />
              </div>

              <div>
                <div className="px-5 my-6 pop-font mb-5 flex gap-10">
                  <div>
                    <span>Take off</span>
                    <p>07 Jan 2024 08:00</p>
                  </div>
                  <div>
                    <img src={LongArrowRight} alt="" className="mt-5" />
                  </div>
                  <div>
                    <span>Take off</span>
                    <p>07 Jan 2024 08:00</p>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="px-5 my-4 pop-font mb-5 flex flex-col gap-5">
                  {/* item list */}
                  <div className="flex justify-between">
                    <p>Airline</p>
                    <p>Emirates</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Flight Type</p>
                    <p>economy</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Passengers</p>
                    <p>Adult: 1 Children: 0</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Duration</p>
                    <p>02 h 02 mi</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Infants</p>
                    <p>01</p>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="px-5 my-4 pop-font mb-5 flex flex-col gap-5">
                  {/* item list */}
                  <h2>Amount</h2>
                  <div className="flex justify-between">
                    <p>Base Fare</p>
                    <p>$20.000</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Total Price</p>
                    <p>$50.00</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mx-5 pop-font">
                  <button className="text-white mt-10 mb-6 w-[430px] h-[38px] rounded-b-md px-8 old-logo-color">
                    Book Now
                  </button>
                  <div className="flex justify-center gap-2 mb-7">
                    <img src={Security} alt="" />
                    <p className="text-center pop-font">Secure Checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCashout;
