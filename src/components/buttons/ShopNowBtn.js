import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ShopNowBtn = () => {
  return (
    <button className="shop-btn">
      <Link to="/home" className="shop-now-link">
        Shop Now <AiOutlineArrowRight className="arrow-icon" />
      </Link>
    </button>
  );
};

export default ShopNowBtn;
