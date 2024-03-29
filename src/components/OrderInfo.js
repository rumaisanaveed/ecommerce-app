import { useContext } from "react";
import PlaceOrderBtn from "./buttons/PlaceOrderBtn";
import CartContext from "../context/CartContext";

const OrderInfo = ({ handleFormSubmit }) => {
  const { cartData, totalCartPrice } = useContext(CartContext);

  return (
    <main className="order-info-container">
      <h1>Your Order</h1>
      <div className="order-rows">
        <div className="order-info-row bold-text">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        {cartData.map((item, index) => {
          return (
            <div className="order-info-row" key={index}>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          );
        })}
        <div className="order-info-row">
          <p>Total</p>
          <p>${totalCartPrice}</p>
        </div>
      </div>
      <div className="payment-methods-btns">
        <div className="payment-methods">
          <div className="radio-btn">
            <input type="radio" name="payment-method" />
            <p>Online payment</p>
          </div>
        </div>
        <div className="payment-methods">
          <div className="radio-btn">
            <input type="radio" name="payment-method" />
            <p>Cash on delivery</p>
          </div>
        </div>
      </div>
      {/* handleFormSubmit */}
      <PlaceOrderBtn handleFormSubmit={handleFormSubmit} />
    </main>
  );
};

export default OrderInfo;
