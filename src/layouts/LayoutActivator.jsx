import React, { useContext, useRef, useEffect, useState } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import LayoutGrid from './LayoutGrid';
import { Switch, Route, useLocation } from "react-router-dom";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

// const useMountEffect = fun => useEffect(fun, []);

const LayoutActivator = ({active}) => {

    const  { skills, aboutMe, contact, contactFormInfo, pCOWebProjects, pCOWebImages, hmiProjects, hmiImages } = useContext(StoreContext);

    const [menuActiveState, setMenuActiveState] = useState({isMainActive: false, isProjectActive: false, isContactActive: false });
    // const [contactRef, setContactRef] = useState(null);

    // const executeScroll = (myRef) => {
    //     // contactRef.current.scrollIntoView();
    //     console.log(contactRef.current)
    // }

    // useMountEffect(executeScroll); // Scroll on mount

    const dataSelectorSkills = {
        layoutType: "Skills",
        layoutGridColumnColor: "black",
        layoutGridIsInverted: true,
        layoutGridIsCelled: true,
    }

    const dataSelectorContact = {
        layoutType: "Contact",
        layoutGridColumnColor: "black",
        layoutGridIsInverted: true,
        layoutGridIsCelled: true,
    }

    const dataSelectorProjects = {
        layoutType: "Projects",
        layoutGridColumnColor: "white",
        layoutGridIsInverted: false,
        layoutGridIsCelled: false,
    }

    // const contactRefActivate = () => {
    //     setContactRef(true)
    // }
    // let location = useLocation();

    // console.log("pathname: "+location.pathname);
    // location.pathname === '/contact' && contactRef === false ? setContactRef(true) : setContactRef(false)

        useEffect(() => {
       switch (active) {
            case 'Info&Skills': 
                return setMenuActiveState({isMainActive: true, isProjectActive: false, isContactActive: false });
            case 'Projects': 
                return setMenuActiveState({isMainActive: false, isProjectActive: true, isContactActive: false });
            case 'Contact': 
                return setMenuActiveState({isMainActive: false, isProjectActive: false, isContactActive: true });
            default:
                return setMenuActiveState({isMainActive: false, isProjectActive: false, isContactActive: false }); 
            }
        }, [active]);
        
const ScrollOptions = {
    scrollMode: 'always',
    behavior: 'smooth',
}  


    return (
        <>

<ScrollIntoViewIfNeeded 
active={menuActiveState.isMainActive}
options={ScrollOptions}>
    <div>
        <LayoutGrid
            dataLeft={aboutMe}
            dataRight={skills}
            dataSelector={dataSelectorSkills}
        />
        </div>
</ScrollIntoViewIfNeeded>

<ScrollIntoViewIfNeeded 
active={menuActiveState.isProjectActive}
options={ScrollOptions}>
        <LayoutGrid
            dataLeft={pCOWebImages}
            dataRight={pCOWebProjects}
            dataSelector={dataSelectorProjects}
        />
</ScrollIntoViewIfNeeded>
        <LayoutGrid
            dataLeft={hmiImages}
            dataRight={hmiProjects}
            dataSelector={dataSelectorProjects}
        />



<ScrollIntoViewIfNeeded 
active={menuActiveState.isContactActive}
options={ScrollOptions}>
        <LayoutGrid
            dataLeft={contact}
            dataRight={contactFormInfo}
            dataSelector={dataSelectorContact}
        />
    </ScrollIntoViewIfNeeded>


        </>
      );
}
 
export default LayoutActivator;