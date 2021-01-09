import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container, Row, Col
} from 'reactstrap';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// const Slider = (props) => {

//   return (
//         <Carousel style={{ height: '400px'}} showArrows={true} showThumbs={false} useKeyboardArrows className="presentation-mode">
//                 <div>
//                     <img src={Drutex1} alt="Drutex1" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={Drutex2} alt="Drutex2" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={Drutex3} alt="Drutex3" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//   );
// }

// export default Slider;

// const items = [
//   {
//     // src: 'data:image/svg+xml;
//     // charset=UTF-8,
//     // <svg width ="800" height ="400" xmlns ="http://www.w3.org/2000/svg" viewBox ="0 0 800 400" preserveAspectRatio ="none">
//     // <defs><style type ="text/css">#holder_15ba800aa1d text { fill:#555;font-weight:normal;font-family:Helvetica, monospace;font-size:40pt } </style></defs>
//     // <g id ="holder_15ba800aa1d"><rect width ="800" height ="400" fill ="#777"></rect><g><text x ="285.921875" y ="218.3">First slide</text></g></g></svg>',
//     src: Drutex1,
//     caption: 'Drutex - Wybór urządzeń',
//     altText: 'Wizualizacja - pCOWeb'
//   },
//   {
//     // src: 'data:image/svg+xml;charset=UTF-8,<svg width ="800" height ="400" xmlns ="http://www.w3.org/2000/svg" viewBox ="0 0 800 400" preserveAspectRatio ="none"><defs><style type ="text/css">#holder_15ba800aa20 text { fill:#444;font-weight:normal;font-family:Helvetica, monospace;font-size:40pt } </style></defs><g id ="holder_15ba800aa20"><rect width ="800" height ="400" fill ="#666"></rect><g><text x ="247.3203125" y ="218.3">Second slide</text></g></g></svg>',
//     src: Drutex2,
//     caption: 'Drutex - Kompresorownia cz.I',
//     altText: 'Wizualizacja - pCOWeb'
//   },
//   {
//     // src: 'data:image/svg+xml;charset=UTF-8,<svg width ="800" height ="400" xmlns ="http://www.w3.org/2000/svg" viewBox ="0 0 800 400" preserveAspectRatio ="none"><defs><style type ="text/css">#holder_15ba800aa21 text { fill:#333;font-weight:normal;font-family:Helvetica, monospace;font-size:40pt } </style></defs><g id ="holder_15ba800aa21"><rect width ="800" height ="400" fill ="#555"></rect><g><text x ="277" y ="218.3">Third slide</text></g></g></svg>',
//     src: Drutex3,
//     caption: 'Drutex - Kompresorownia cz.II',
//     altText: 'Wizualizacja - pCOWeb'
//   }
// ];



const Slider = (props) => {
  const items = props.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* style={{ width: "60%", align: 'center'}} */}
        {/* className="d-block w-100" */}
        <img src={item.src} alt={item.altText} style={{ height: '45vh', width: 'auto'}} />
        <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
  <Container className="mt-3 mb-3">
  <Row>
        <Col cols="1"></Col>
        <Col cols="10">
    <Carousel
    //  className="carousel-indicators"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel></Col>
    <Col cols="1"></Col>
    </Row>
    </Container>

  );
}

export default Slider;


