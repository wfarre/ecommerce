import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CartContext } from "../../libs/context";
import { CartItem, Item } from "../../libs/types";

export interface CartProviderType {
  cart?: CartItem[];
  setCart?: Dispatch<SetStateAction<CartItem[]>>;
  addItem?: (item: Item, quantity: number) => void;
  deleteItem?: (itemIndex: number) => void;
}

type Props = { children: ReactNode };

const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: Item, quantity: number) => {
    setCart([
      {
        title: item.title,
        url: item.images[0].thumbnail,
        quantity: quantity,
        price: item.price - item.price * item.discount,
      },
      ...cart,
    ]);
  };

  const deleteItem = (itemIndex: number) => {
    const newArray = cart.filter((item) => cart.indexOf(item) !== itemIndex);

    setCart(newArray);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, deleteItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
