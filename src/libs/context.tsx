import { createContext } from "react";
import { CartProviderType } from "../components/Context/CartProvider";

export const CartContext = createContext<CartProviderType>({});
