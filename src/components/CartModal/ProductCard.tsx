import React, { useContext } from "react";

import DeleteIcon from "../../assets/images/icon-delete.svg";
import { CartContext } from "../../libs/context";

type Props = {
  title: string;
  url: string;
  quantity: number;
  price: number;
  index: number;
};

const ProductCard = (props: Props) => {
  const totalPrice: number = props.price * props.quantity;

  const { deleteItem } = useContext(CartContext);

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
          <p className="cart-price">
            ${props.price} x {props.quantity}
          </p>
          <span className="total">${totalPrice}</span>
        </div>
      </div>

      <div className="product__footer">
        <button
          className="image-wrapper image-wrapper--icon"
          onClick={() => deleteItem(props.index)}
        >
          <img src={DeleteIcon} alt="delete icon" />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
