import { WHY_US as whyAs } from "../../../utils/Data/ToursData.js";
import CardWhyUs from "./CardWhyUs.jsx";
import "./WhyUs.css"

const WhyUs = () => {
  let content = null;
  if (whyAs) {
    content = whyAs.map((obj, idx) => <CardWhyUs key={idx} idx={idx+1} cardInfo={obj} />);
  }
  return (
    <div className="w-[1170px] mx-auto">
      <div
        className="flex justify-between"
      >
     {content}
      </div>
    </div>
  );
};

export default WhyUs;
