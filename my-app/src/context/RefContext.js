import React, { useRef, createContext } from 'react';

const RefContext = createContext();

const RefProvider = (props) => {
    const { children } = props;

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workoutRef = useRef(null);
    const pricingRef = useRef(null);
    const communityRef = useRef(null);
    const faqRef = useRef(null);

    return (
        <RefContext.Provider value={ {homeRef, aboutRef, workoutRef, pricingRef, communityRef, faqRef} }>
            {children}
        </RefContext.Provider>
    );
}

export { RefContext };
export default RefProvider;