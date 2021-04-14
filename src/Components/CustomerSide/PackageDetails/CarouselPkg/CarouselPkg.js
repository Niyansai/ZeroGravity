import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../../Assets/img1.png"
import img2 from "../../../../Assets/img2.png"
import img3 from "../../../../Assets/img3.png"
import img4 from "../../../../Assets/img4.png";
import "./styles.css";

const CarouselPkg = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (

        <div>
           <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><img className="corousel-pkg-img" src={img1} alt=""/></div>
  <div><img className="corousel-pkg-img" src={img2} alt=""/></div>
  <div><img className="corousel-pkg-img" src={img3} alt=""/></div>
  <div><img className="corousel-pkg-img" src={img4} alt=""/></div>
</Carousel>; 
            
        </div>
    )
}

export default CarouselPkg;
