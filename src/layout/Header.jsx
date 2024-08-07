import { useContext, useState } from "react"; // Import React and useState (if not already imported)
import logo from "../components/logo.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import CartContext from "../context/CartContext";
import SearchBox from "../components/searchBox";
import { IoSearch } from "react-icons/io5";
import useScreenSize from "../hooks/useScreenSize";

const Header = () => {
  const { cartData, toggleCartVisibility } = useContext(CartContext);
  const totalCartItems = cartData?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // To handle mobile menu button
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const isSmallScreen = useScreenSize();

  return (
    <>
      <header>
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
        </div>

        <nav className={showMobileMenu ? "mobile-menu" : "navbar"}>
          <Link
            to="/home"
            className="link"
            onClick={() => setShowMobileMenu(false)}
          >
            Everything
          </Link>
          <Link
            to="/groceries"
            className="link"
            onClick={() => setShowMobileMenu(false)}
          >
            Groceries
          </Link>
          <Link
            to="/toiletries"
            className="link"
            onClick={() => setShowMobileMenu(false)}
          >
            Toiletries
          </Link>
          <Link
            to="/about"
            className="link"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </Link>
        </nav>

        <div className="mobile-right-nav">
          <div className="header-right">
            <div className="nav-right-search">
              {!isSmallScreen && <SearchBox />}
            </div>
            <div className="cart-icon-container" onClick={toggleCartVisibility}>
              <RiShoppingBasketLine className="cart-icon" />
              <span className="cart-items-count">{totalCartItems}</span>
            </div>
          </div>

          <div
            className="search-icon"
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            <IoSearch />
          </div>

          <div className="menu-icon">
            <HiOutlineMenu onClick={() => setShowMobileMenu(!showMobileMenu)} />
          </div>
        </div>
      </header>
      {isSmallScreen && showSearchBar && (
        <div className="mobile-search-box">
          <SearchBox className="mobile-search-input" />
        </div>
      )}
    </>
  );
};

export default Header;
