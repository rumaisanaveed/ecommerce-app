import React, { useState } from 'react'; // Import React and useState (if not already imported)
import logo from '../components/logo.svg';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import { RiShoppingBasketLine } from 'react-icons/ri';
import Cart from '../components/Cart';

const Header = ({
    search,
    setSearch,
    handleSearch,
    cartItemsCount,
    setCartItemsCount,
  }) => {
    // State to manage the visibility of the Cart component
    const [isCartVisible, setIsCartVisible] = useState(false);

    // Function to toggle the visibility of the Cart component
    const toggleCartVisibility = () => {
      console.log(isCartVisible);
      setIsCartVisible(!isCartVisible);
    };

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
        {/* Conditionally render the Cart component */}
        {isCartVisible && <Cart />}
      </main>
    );
};

export default Header;
