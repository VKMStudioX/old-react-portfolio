import React, { useRef, useState, useEffect } from 'react'
import StoreProvider from './Store/StoreProvider';
import HeaderSui from './layouts/HeaderSui';
import ModalImageViewer from './components/Modal';
import ScrollTopArrow from './components/ScrollTopArrow'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SkillsSUI from './layouts/SkillsSUI';
import FooterSui from './layouts/FooterSUI';
import ProjectsSui from './layouts/ProjectsSui';
import ContactSUI from './layouts/ContactSUI';
import { Segment } from 'semantic-ui-react';
import ScrollToTop from './components/ScrollToTop';

const App = () =>  {
  
    const mainRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    const ScrolltoY = (y) => {
      window.scrollTo({
        top: y,
        left: 0,
        behavior: "smooth"
      });
    }

    const executeScroll = (ref) => {
      if (ref === 'main') {ScrolltoY(mainRef.current.offsetTop-80)}
      else if(ref ==='projects') { ScrolltoY(projectsRef.current.offsetTop-75)}
      else if(ref ==='contact') { ScrolltoY(contactRef.current.offsetTop)}
      else {}
    }

    const [active, setActive] = useState();

  useEffect(() => {
    switch (active) {
         case 'main': 
             return executeScroll('main')
         case 'projects': 
             return executeScroll('projects')
         case 'contact': 
             return executeScroll('contact')
         default:
             return executeScroll('main')
         }
     }, [active]);


    return (
      <>
      <StoreProvider>
        <Router>
        {/* <ScrollToTop> */}
        <Segment className='background' padded={false}> 
        <HeaderSui />

          <Switch>
            <Route exact path='/' render={() => {setActive('main')}} />
            <Route path='/projects' render={() => {setActive('projects')}} />
            <Route path='/contact' render={() => {setActive('contact')}} />
          </Switch>

          <div ref={mainRef}>
            <SkillsSUI/>
          </div>
          
          <div ref={projectsRef}>
          <ProjectsSui/>
          </div>

          <div ref={contactRef}>
          <ContactSUI/>
          </div>

          <ModalImageViewer />
          <ScrollTopArrow />
          <FooterSui/>
          </Segment>
        {/* </ScrollToTop> */}
        </Router>
      </StoreProvider>
            </>
      );
  };

export default App;