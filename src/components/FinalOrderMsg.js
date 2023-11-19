import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const FinalOrderMsg = () => {
  return (
    <div className="final-order-msg-container">
      <div className="final-order-msg">
        <HiOutlineShoppingBag className="bag-icon" />
        <h1>Thank You For Your Purchase</h1>
        <p className="p1">Check your email inbox for the receipt.</p>
        <p className="p2">
          If you have any questions, please email{" "}
          <span>orders@example.com</span>
        </p>
        <Link to="/home" className="btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default FinalOrderMsg;
