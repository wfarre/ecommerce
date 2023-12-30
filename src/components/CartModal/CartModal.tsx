import React from "react";
import "./assets/CartModal.css";

// import DeleteIcon from "../../assets/images/icon-delete.svg";
// import ProductIcon from "../../assets/images/image-product-1-thumbnail.jpg";
import ProductCard from "./ProductCard";

type Props = {
  isOpen: boolean;
  cart: {
    title: string;
    url: string;
    price: number;
    quantity: number;
  }[];
};

const CartModal = (props: Props) => {
  return (
    <div className={props.isOpen ? "cartModal" : "cartModal hidden"}>
      <div className="cartModal__header">
        <h2 className="title">Cart</h2>
      </div>
      <div className="cartModal__main">
        <ul className="cart-list">
          {props.cart.length === 0 ? (
            <p className="empty-message">The cart is empty</p>
          ) : (
            props.cart.map((item, key) => {
              return (
                <ProductCard
                  key={key}
                  index={key}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  url={item.url}
                />
              );
            })
          )}

          {}
        </ul>
      </div>

      <div className="cartModal__footer">
        {props.cart.length > 0 && (
          <button className="btn btn--checkout">Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartModal;
