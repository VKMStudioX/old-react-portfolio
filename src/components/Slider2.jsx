import React, { useContext }  from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { StoreContext } from '../Store/StoreProvider';


const Slider = (props) => {

    const items = props.items;
    const slides = items.map((item) => {
        return (
            
            <div key={item.src} onClick={() => openModal(item.src)}>
            <img src={item.src} alt={item.altText} style={{opacity: '1', }} />
            {/* <p className="legend">{item.caption}</p> */}
        </div>
        );
      });

      const  { setModalOpen, setModalImage } = useContext(StoreContext);
     
      const openModal = (imgSrc) => {
        setModalImage(imgSrc)
        setModalOpen(true);
      }

  return (
      <>
        <Carousel autoPlay={true} infiniteLoop={true} interval='5000' showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} useKeyboardArrows >
                {slides}
            </Carousel>
           
</>
  );
}

export default Slider;
