import deadline from "../../assets/image/agent/deadline.png";
import customer from "../../assets/image/agent/customer.png";
import management from "../../assets/image/agent/management.png";
import payment from "../../assets/image/agent/payment.png";
import "./becomeanagent.css";

const AgentCard = () => {
  return (
    <div className="flex items-center gap-[31px] w-[1170px] mx-auto">
      {/* Card 1 */}
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="card flex justify-center items-center">
          <img src={deadline} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px]">
          <h1 className="card-h1">Customer Deadline</h1>
          <p className="card-p">
            A wonderful serenity has taken poss of my entire soul, like these
            sweet mornings of spring.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="card flex justify-center items-center">
          <img src={customer} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px]">
          <h1 className="card-h1">Authentic Customer</h1>
          <p className="card-p">
            A wonderful serenity has taken poss of my entire soul, like these
            sweet mornings of spring.
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="card flex justify-center items-center">
          <img src={management} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px]">
          <h1 className="card-h1">Proper Management </h1>
          <p className="card-p">
            A wonderful serenity has taken poss of my entire soul, like these
            sweet mornings of spring.
          </p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="card flex justify-center items-center">
          <img src={payment} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px]">
          <h1 className="card-h1">Fast Payment</h1>
          <p className="card-p">
            A wonderful serenity has taken poss of my entire soul, like these
            sweet mornings of spring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
