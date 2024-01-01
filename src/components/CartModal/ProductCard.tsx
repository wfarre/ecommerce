import { useContext } from "react";
import { CartContext } from "../../libs/context";
import { CartProviderType } from "../Context/CartProvider";

import DeleteIcon from "../../assets/images/icon-delete.svg";

type Props = {
  title: string;
  url: string;
  quantity: number;
  price: number;
  index: number;
};

const ProductCard = (props: Props) => {
  const totalPrice: number = props.price * props.quantity;

  const { deleteItem } = useContext<CartProviderType>(CartContext);

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
          onClick={() => deleteItem && deleteItem(props.index)}
        >
          <img src={DeleteIcon} alt="delete icon" />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
