const PlaceOrderBtn = ({ handleFormSubmit }) => {
  return (
    <button className="place-order-btn" onClick={handleFormSubmit}>
      Place Order
    </button>
  );
};

export default PlaceOrderBtn;
