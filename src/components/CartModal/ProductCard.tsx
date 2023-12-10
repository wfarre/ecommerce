import React, { MouseEventHandler } from "react";

import DeleteIcon from "../../assets/images/icon-delete.svg";

type Props = {
  title: string;
  url: string;
  quantity: number;
  price: number;
  handleDeleteItem(index: number): MouseEventHandler;
  index: number;
};

const ProductCard = (props: Props) => {
  const totalPrice: number = props.price * props.quantity;

  return (
    <li className="product">
      <div className="product__header">
        <div className="image-wrapper">
          <img src={props.url} alt="" />
        </div>
      </div>
      <div className="product__main">
        <p className="name">{props.title}</p>

        <div className="price-info">
          <p className="price">
            ${props.price} x {props.quantity}
          </p>
          <span className="total">${totalPrice}</span>
        </div>
      </div>

      <div className="product__footer">
        <div
          className="image-wrapper image-wrapper--icon"
          onClick={() => props.handleDeleteItem(props.index)}
        >
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
