// import { useState } from "react";
// import { HiOutlineMenu } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const MobileMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="nav-menu">
//         <button onClick={toggleMenu}>
//           <HiOutlineMenu className="nav-menu-icon" />
//         </button>
//       </div>
//       {isMenuOpen && (
//         <ul className="menu-hidden">
//           <li>
//             <Link to="/home" className="link">
//               Everything
//             </Link>
//           </li>
//           <li>
//             <Link to="/groceries" className="link">
//               Groceries
//             </Link>
//           </li>
//           <li>
//             <Link to="/toiletries" className="link">
//               Toiletries
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="link">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="link">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       )}
//     </>
//   );
// };

// export default MobileMenu;

import React, { useContext } from "react";
import logo from "../components/logo.svg";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { RiShoppingBasketLine } from "react-icons/ri";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cartItemsCount, toggleCartVisibility } = useContext(CartContext);

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
          <div className="cart-menu-container">
            <div className="cart-icon-container" onClick={toggleCartVisibility}>
              <RiShoppingBasketLine className="cart-icon" />
              <span className="cart-items-count">{cartItemsCount}</span>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
