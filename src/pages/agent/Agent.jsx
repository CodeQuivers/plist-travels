import AgentCard from "../../components/agent/AgentCard";
import BecomeAnAgent from "../../components/agent/BecomeAnAgent";
import "./agent.css";

const Agent = () => {
  return (
    <div className="my-[76px]">
      <h1 className="agent-h1">Become An Agent</h1>
      <hr className="bg-[#CBE6F6] border-[1px] mt-[20px]" />
      <BecomeAnAgent />
      <AgentCard />
    </div>
  );
};

export default Agent;
