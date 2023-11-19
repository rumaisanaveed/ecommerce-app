import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ShopNowBtn = () => {
  return (
    <Link to="/home" className="shop-btn">
      Shop Now <AiOutlineArrowRight className="arrow-icon" />
    </Link>
  );
};

export default ShopNowBtn;
