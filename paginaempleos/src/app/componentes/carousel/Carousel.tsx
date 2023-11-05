import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Carousel/Carousel.module.css";

const slides = [{
    id: 1,
    desc: 'Lorem ipsum.',
    image: './img/carousel/slide-placeholder.png'
}, {
    id: 2,
    desc: 'Lorem ipsum.',
    image: './img/carousel/slide-placeholder.png'
}, {
    id: 3,
    desc: 'Lorem ipsum.',
    image: './img/carousel/slide-placeholder.png'
}]

export const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.imageCarousel} pause={"hover"} indicators={false}>
        {slides.map(({id, desc, image}) => (
          <Carousel.Item key={id} className={styles.itemCarousel} interval={4000}>
            <img src={image} alt={desc}/>
          </Carousel.Item>
        ))}
      </Carousel>
      );
}
