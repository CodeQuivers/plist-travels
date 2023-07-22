import React from 'react'

import { WHY_US as whyAs } from '../../utils/Data/ToursData.js';
import CardWhyUs from './CardWhyUs';


const WhyUs = () => {
    let content =null;
    if (whyAs){
        content = whyAs.map(obj=><CardWhyUs cardInfo={obj}/>)
    }
  return (
    <div className="xl:container mx-auto">
        <div class="flex flex-wrap justify-between">
            {content}
        </div>
    </div>
  )
}

export default WhyUs;