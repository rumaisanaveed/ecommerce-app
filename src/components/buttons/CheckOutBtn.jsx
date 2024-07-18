import { Link } from "react-router-dom";

const CheckOutBtn = () => {
  return (
    <Link to="/checkout" className="checkout-btn">
      Checkout
    </Link>
  );
};

export default CheckOutBtn;
