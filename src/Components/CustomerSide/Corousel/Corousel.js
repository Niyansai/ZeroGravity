import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../Cards/SmallCard/SmallCard";
import img1 from "../../../Assets/img1.png";
import img2 from "../../../Assets/img2.png";
import img3 from "../../../Assets/img3.png";
import img4 from "../../../Assets/img4.png";
import "./styles.css"

const Corousel = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
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

        <Carousel
  swipeable={false}
  draggable={true}
  showDots={false}
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
  <div className="corouser-card-boxshwdw"><SmallCard img={img1}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img2}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img3}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img4}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img1}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img2}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img3}/></div>
  <div className="corouser-card-boxshwdw"><SmallCard img={img4}/></div>
</Carousel>

      )

}

export default Corousel;

