import { Link } from "react-router-dom";

const ViewCartBtn = () => {
  return (
    <Link to="/cart">
      <button className="view-cart-btn">View Cart</button>
    </Link>
  );
};

export default ViewCartBtn;
