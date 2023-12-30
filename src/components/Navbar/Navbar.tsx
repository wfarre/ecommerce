import React, { useState } from "react";

import Logo from "./assets/logo.svg";
import profile from "./assets/image-avatar.png";
import CartIcon from "./assets/icon-cart.svg";
import "./Navbar.css";
import CartModal from "../CartModal/CartModal";
import { CartItem } from "../../libs/types";
import IconClose from "./assets/icon-close.svg";
import IconMenu from "./assets/icon-menu.svg";

const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

type Props = {
  cart: CartItem[];
};

const Navbar = (props: Props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <>
      <div className={`menu-bg ${navbarIsOpen && "open"}`}></div>
      <CartModal isOpen={cartIsOpen} cart={props.cart} />
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
              className={`notification ${props.cart.length === 0 && "hidden"}`}
            >
              {props.cart.length}
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
