import CustomerInfo from "./CustomerInfo";
import OrderInfo from "./OrderInfo";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <CustomerInfo />
      <OrderInfo />
    </div>
  );
};

export default Checkout;
