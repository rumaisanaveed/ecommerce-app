import React, { useContext, useState } from "react"; // Import React and useState (if not already imported)
import logo from "../components/logo.svg";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { RiShoppingBasketLine } from "react-icons/ri";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cartItemsCount } = useContext(CartContext);

  const { isCartVisible, setIsCartVisible, toggleCartVisibility } =
    useContext(CartContext);

  return (
    <main>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="" className="site-logo" />
          </Link>
        </div>
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/home" className="link">
                Everything
              </Link>
            </li>
            <li>
              <Link to="/groceries" className="link">
                Groceries
              </Link>
            </li>
            <li>
              <Link to="/toiletries" className="link">
                Toiletries
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="cart-icon-container" onClick={toggleCartVisibility}>
            <RiShoppingBasketLine className="cart-icon" />
            <span className="cart-items-count">{cartItemsCount}</span>
          </div>
        </div>
        <MobileMenu />
      </header>
    </main>
  );
};

export default Header;
