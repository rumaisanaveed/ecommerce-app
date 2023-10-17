import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StartShoppingBtn = () => {
  return (
    <button className="start-shopping-btn">
      <Link className="remove-link-stylings" to="/home">
        <div className="btn-content">
          <AiOutlineShoppingCart className="about-cart-icon" />
          <p>Start Shopping</p>
        </div>
      </Link>
    </button>
  );
};

export default StartShoppingBtn;
