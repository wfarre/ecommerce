import "./assets/CartModal.css";

import { useContext } from "react";
import { CartProviderType } from "../Context/CartProvider";
import { CartContext } from "../../libs/context";

import ProductCard from "./ProductCard";

type Props = {
  isOpen: boolean;
};

const CartModal = (props: Props) => {
  const { cart } = useContext<CartProviderType>(CartContext);

  return (
    <div className={props.isOpen ? "cartModal" : "cartModal hidden"}>
      <div className="cartModal__header">
        <h2 className="title">Cart</h2>
      </div>
      <div className="cartModal__main">
        <ul className="cart-list">
          {cart && cart.length === 0 ? (
            <p className="empty-message">The cart is empty</p>
          ) : (
            cart &&
            cart.map((item, key) => {
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
        {cart && cart.length > 0 && (
          <button className="btn btn--checkout">Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartModal;
