import React from "react";
import "./Carousel.css";

type Props = {
  images: { image: string; thumbnail: string }[];
  currentImageIndex: number;
  setModalIsOpened?: React.MouseEventHandler<Element>;
  handleThumbClick(index: number): void;
};

const Carousel = (props: Props) => {
  return (
    <div className="carousel">
      <div
        className="picture-wrapper picture-wrapper--main"
        onClick={props.setModalIsOpened}
      >
        <img src={props.images[props.currentImageIndex].image} alt="" />
      </div>

      <div className="container">
        {props.images.map((image, key) => {
          return (
            <div
              key={key}
              className={
                key === props.currentImageIndex
                  ? "current picture-wrapper picture-wrapper--thumb"
                  : "picture-wrapper picture-wrapper--thumb"
              }
              id={"thumb" + key}
              onClick={() => props.handleThumbClick(key)}
            >
              <img src={image.thumbnail} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
