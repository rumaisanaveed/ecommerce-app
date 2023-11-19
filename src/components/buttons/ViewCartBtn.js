import { Link } from "react-router-dom";

const ViewCartBtn = () => {
  return (
    <Link to="/cart" className="view-cart-btn">
      View Cart
    </Link>
  );
};

export default ViewCartBtn;
