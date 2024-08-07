import { useNavigate } from "react-router-dom";

const CheckOutBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <button onClick={handleClick} className="checkout-btn">
      Checkout
    </button>
  );
};

export default CheckOutBtn;
