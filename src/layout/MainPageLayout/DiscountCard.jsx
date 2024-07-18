import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const DiscountCard = () => {
  return (
    <div className="discount-card">
      <p>Get 25% Off On Your First Purchase!</p>
      <button className="shop-now-discount">
        <Link to="/home" className="shop-now-link">
          <div className="shop-now-discount-content">
            <p>Shop Now</p>
            <p>
              <AiOutlineArrowRight className="arrow-icon" />
            </p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default DiscountCard;
