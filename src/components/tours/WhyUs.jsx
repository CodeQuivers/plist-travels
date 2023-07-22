import React from "react";

import { WHY_US as whyAs } from "../../utils/Data/ToursData.js";
import CardWhyUs from "./CardWhyUs";

const WhyUs = () => {
  let content = null;
  if (whyAs) {
    content = whyAs.map((obj, idx) => <CardWhyUs key={idx} cardInfo={obj} />);
  }
  return (
    <div className="xl:container mx-auto px-12">
      <div
        className="
            lg:mx-0
            md:px-4
            lg:px-0
            flex 
            flex-wrap
            justify-center
            md:justify-between
            gap-y-5
        "
      >
     {content}
      </div>
    </div>
  );
};

export default WhyUs;
