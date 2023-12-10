import React, { MouseEventHandler, useState } from "react";

import Logo from "./assets/logo.svg";
import profile from "./assets/image-avatar.png";
import CartIcon from "./assets/icon-cart.svg";
import "./Navbar.css";
import CartModal from "../CartModal/CartModal";

const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

type Props = {
  cart: {
    title: string;
    url: string;
    price: number;
    quantity: number;
    handleDeleteItem(index: number): MouseEventHandler;
  }[];
};

const Navbar = (props: Props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={Logo} alt="" />
      </div>

      <ul className="navbar__nav">
        {navLinks.map((link, key) => {
          return (
            <li className="item" key={link + key}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>

      <div className="user-info">
        <div
          className="icon-wrapper"
          onClick={() => setCartIsOpen(!cartIsOpen)}
        >
          <img src={CartIcon} alt="" />
        </div>
        <CartModal
          isOpen={cartIsOpen}
          cart={props.cart}
          handleDeleteItem={(index: number) => props.handleDeleteItem(index)}
        />

        <div className="profile">
          <img src={profile} alt="profile picture" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
