const InputBtn = ({ quantity, onQuantityChange }) => {
  // Avoid the decrement to go below 0
  const minValue = 0;
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="product-quantity-btn"
          type="number"
          min={minValue}
          defaultValue={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
        />
      </form>
    </>
  );
};

export default InputBtn;
