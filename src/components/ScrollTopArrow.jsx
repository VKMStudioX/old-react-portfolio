import React, {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react'
// import '../App.css';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div style={{ float: 'right', position: 'relative', left: '-50px'}}>
        <Icon name="arrow circle up" inverted color='violet' size='big' corner='bottom right'  className="scrollTop" onClick={scrollTop} style={{height: 20, display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
}

export default ScrollTopArrow;