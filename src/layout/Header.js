import React, { useContext } from "react"; // Import React and useState (if not already imported)
import logo from "../components/logo.svg";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { RiShoppingBasketLine } from "react-icons/ri";
import CartContext from "../context/CartContext";
import SearchBox from "../components/searchBox";

const Header = () => {
  const { noOfCartItems, toggleCartVisibility } = useContext(CartContext);

  return (
    <main>
      <header>
        <Link to="/">
          <div className="site-logo">
            <img src={logo} alt="" />
          </div>
        </Link>
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
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <SearchBox />
            </li>
            <li>
              <div
                className="cart-icon-container"
                onClick={toggleCartVisibility}
              >
                <RiShoppingBasketLine className="cart-icon" />
                <span className="cart-items-count">{noOfCartItems}</span>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {/* <MobileMenu /> */}
    </main>
  );
};

export default Header;
