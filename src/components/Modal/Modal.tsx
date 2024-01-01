import "../../App.css";
import "./assets/Modal.css";

import { MouseEventHandler } from "react";

import IconNext from "./assets/icon-next.svg?react";
import IconPrevious from "./assets/icon-previous.svg?react";
import IconClose from "./assets/icon-close.svg?react";
import Carousel from "../Carousel/Carousel";

type Props = {
  modalIsOpened: boolean;
  currentImageIndex: number;
  images: {
    image: string;
    thumbnail: string;
  }[];
  handleCloseModal: MouseEventHandler;
  setCurrentImageIndex(index: number): void;
  handleThumbClick(index: number): void;
};

const Modal = (props: Props) => {
  return (
    <div className={props.modalIsOpened ? "modal displayed" : "modal"}>
      <div className="modal__bg"></div>

      <div className="carousel-wrapper">
        <button className="btn btn--close" onClick={props.handleCloseModal}>
          <IconClose className="icon" />
        </button>
        <button
          className="btn btn--carousel btn--previous"
          aria-label="previous picture"
          onClick={() =>
            props.currentImageIndex > 0 &&
            props.setCurrentImageIndex(props.currentImageIndex - 1)
          }
        >
          <IconPrevious className="icon" />
        </button>
        <button
          className="btn btn--carousel btn--next"
          aria-label="next picture"
          onClick={() =>
            props.currentImageIndex < props.images.length - 1 &&
            props.setCurrentImageIndex(props.currentImageIndex + 1)
          }
        >
          <IconNext className="icon" />
        </button>

        <Carousel
          images={props.images}
          currentImageIndex={props.currentImageIndex}
          handleThumbClick={props.handleThumbClick}
        ></Carousel>
      </div>
    </div>
  );
};

export default Modal;
