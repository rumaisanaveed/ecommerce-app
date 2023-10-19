import { useContext, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { RiShoppingBasketLine } from "react-icons/ri";
import DataContext from "../context/DataContext";
import SearchBox from "./searchBox";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { search, setSearch } = useContext(DataContext);
  const { cartItemsCount, toggleCartVisibility } = useContext(CartContext);

  return (
    <>
      <div className="responsive-nav">
        <div className="nav-menu">
          <button onClick={toggleMenu}>
            <HiOutlineMenu className="nav-menu-icon" />
          </button>
        </div>
        <div className="mobile-cart">
          <div className="cart-icon-container" onClick={toggleCartVisibility}>
            <RiShoppingBasketLine className="cart-icon" />
            <span className="cart-items-count">{cartItemsCount}</span>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <ul className="menu-hidden">
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
        </>
      )}
    </>
  );
};

export default MobileMenu;
