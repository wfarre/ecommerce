import { useContext, useState } from "react";

import Logo from "./assets/logo.svg";
import profile from "./assets/image-avatar.png";
import CartIcon from "./assets/icon-cart.svg";
import "./Navbar.css";
import CartModal from "../CartModal/CartModal";
import IconClose from "./assets/icon-close.svg";
import IconMenu from "./assets/icon-menu.svg";
import { CartProviderType } from "../Context/CartProvider";
import { CartContext } from "../../libs/context";

const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const { cart } = useContext<CartProviderType>(CartContext);

  return (
    <>
      <div className={`menu-bg ${navbarIsOpen && "open"}`}></div>
      <CartModal isOpen={cartIsOpen} />
      <nav className="navbar">
        <div className="navbar__header">
          <button
            className="icon-wrapper btn--open"
            onClick={() => setNavbarIsOpen(true)}
          >
            <img src={IconMenu} alt="open menu" />
          </button>
          <div className="logo-wrapper">
            <img src={Logo} alt="sneakers logo" />
          </div>
        </div>

        <div className={`navbar__main ${navbarIsOpen && "open"}`}>
          <button
            className="icon-wrapper close-btn"
            onClick={() => setNavbarIsOpen(false)}
          >
            <img src={IconClose} alt="close menu" />
          </button>

          <ul className="navbar__nav">
            {navLinks.map((link, key) => {
              return (
                <li className="item" key={link + key}>
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar__footer">
          <div className="button-wrapper">
            <button
              className="icon-wrapper"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              <img className="icon-cart" src={CartIcon} alt="cart icon" />
            </button>
            <span
              className={`notification ${
                cart && cart.length === 0 && "hidden"
              }`}
            >
              {cart && cart.length}
            </span>
          </div>

          <div className="profile">
            <img src={profile} alt="profile picture" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
