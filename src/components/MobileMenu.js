import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-menu">
        <button onClick={toggleMenu}>
          <HiOutlineMenu className="nav-menu-icon" />
        </button>
      </div>
      {isMenuOpen && (
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
      )}
    </>
  );
};

export default MobileMenu;
