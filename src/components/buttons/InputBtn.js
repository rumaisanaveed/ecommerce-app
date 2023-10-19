import { useContext } from "react";
import CartContext from "../../context/CartContext";

const InputBtn = ({ quantity, onQuantityChange }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="product-quantity-btn"
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
        />
      </form>
    </>
  );
};

export default InputBtn;
