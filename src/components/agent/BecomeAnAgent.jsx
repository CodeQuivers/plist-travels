import "./becomeanagent.css";
import sign from "../../assets/image/agent/check-square (1).png";
import AgentForm from "./AgentForm";

const BecomeAnAgent = () => {
  return (
    <div className="flex items-center justify-center gap-[153px] w-[1170px] mx-auto my-[70px]">
      <div className="flex flex-col gap-[30px] w-[470px]">
        <div>
          <h1 className="list-h1">Create new listing</h1>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>More than 6.4 million vacation rentals already listed</p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>Earn a commission on every booking made through your business</p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>
              Embed the affiliate product you chose into your website, blog, or
              campaign
            </p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>
              Earn money by promoting more than 28 million accommodations, plus
              transportation options and attractions in over 60,000 locations.
            </p>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={sign} alt="" />
            <p>
              Whether it’s a hotel or a tree house, a last-minute ticket to an
              attraction, or a rental car to get around – we have it.
            </p>
          </div>
        </div>
      </div>

      <div>
        <AgentForm />
      </div>
    </div>
  );
};

export default BecomeAnAgent;
