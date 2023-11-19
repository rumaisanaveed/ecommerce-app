import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StartShoppingBtn = () => {
  return (
    <Link className="remove-link-stylings start-shopping-btn" to="/home">
      <div className="btn-content">
        <AiOutlineShoppingCart className="about-cart-icon" />
        <p>Start Shopping</p>
      </div>
    </Link>
  );
};

export default StartShoppingBtn;
