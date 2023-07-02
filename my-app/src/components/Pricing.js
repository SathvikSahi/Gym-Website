import React, { useContext } from 'react';

import { pricing } from '../data';
import PlanList from './PlanList';

import { RefContext } from '../context/RefContext';

const Pricing = (props) => {
    const {
        icon,
        title,
        plans
    } = pricing;

    const { pricingRef } = useContext(RefContext);

    return (
        <div className="pt-[80px] md:pt-[100px] lg:pt-[120px]" ref={pricingRef}>
            <div className="section-title-group -space-x-16 max-w-[540px] mx-auto">
                <img src={icon} alt="icon" />

                <h2 className="h2 text-[30px] md:text-[38px] lg:text-[42px] section-title">
                    {title}
                    <span className="text-primary-200"> . </span>
                </h2>
            </div>

            <PlanList plans={plans} />
        </div>
    );
}

export default Pricing;