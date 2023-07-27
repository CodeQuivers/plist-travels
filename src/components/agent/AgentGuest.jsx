import sign from "../../assets/image/agent/check-square (1).png";
import guest from "../../assets/image/agent/guest.png";

const AgentGuest = () => {
  return (
    <div className="flex items-center justify-between gap-[261.08px] w-[1170px] mx-auto my-[100px]">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="list-h1">Get to know your guests</h1>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>
              75% of nights booked are by guests with 5 or more previous
              bookings.
            </p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>68% of nights booked are by families and couples</p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>42% of nights booked are for properties other than hotels</p>
          </div>
        </div>
      </div>
      <div>
        <img src={guest} alt="" />
      </div>
    </div>
  );
};

export default AgentGuest;
