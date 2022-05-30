import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const DisplayImagesCarousel = ({cover1,cover2, page1, page2 }) => {
  
  return (
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {cover1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Cover Page</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={cover2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Other Details</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={page1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Random Page 1</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={page2}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3>Random Page 2</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

  );
};

export default DisplayImagesCarousel;
