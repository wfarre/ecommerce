import React from "react";
import IconNext from "./assets/icon-next.svg?react";
import IconPrevious from "./assets/icon-previous.svg?react";
import IconClose from "./assets/icon-close.svg?react";
import "../../App.css";
import "./assets/Modal.css";
import { MouseEventHandler } from "react";

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

      <div className="pictures">
        <div className="viewport">
          <button
            className="btn btn--modal-nav btn--close"
            onClick={props.handleCloseModal}
          >
            <IconClose className="icon" />
          </button>
          <button
            className="btn btn--modal-nav btn--previous"
            onClick={() =>
              props.currentImageIndex > 0 &&
              props.setCurrentImageIndex(props.currentImageIndex - 1)
            }
          >
            <IconPrevious className="icon" />
          </button>
          <button
            className="btn btn--modal-nav btn--next"
            onClick={() =>
              props.currentImageIndex < props.images.length - 1 &&
              props.setCurrentImageIndex(props.currentImageIndex + 1)
            }
          >
            <IconNext className="icon" />
          </button>

          <div className="picture-wrapper picture-wrapper--main">
            <img src={props.images[props.currentImageIndex].image} alt="" />
          </div>
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
    </div>
  );
};

export default Modal;
