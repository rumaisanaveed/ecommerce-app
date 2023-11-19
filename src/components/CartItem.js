import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import CartContext from "../context/CartContext";

const CartItem = ({
  cartIndex,
  productImg,
  productName,
  productPrice,
  productCount,
}) => {
  // Handling the deletion of a product from the cart
  const { setCartData, CARTDATA, setCARTDATA } = useContext(CartContext);

  const handleItemDelete = (productName) => {
    console.log(productName);
    const cartItemsAfterDeletion = CARTDATA.filter(
      (item) => item.title !== productName
    );
    setCARTDATA(cartItemsAfterDeletion);
  };

  const handleIncrement = (cartindex) => {
    const _CART = CARTDATA.map((item, index) => {
      return cartindex === index
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    setCARTDATA(_CART);
    setCartData(_CART);
  };

  const handleDecrement = (cartindex) => {
    const _CART = CARTDATA.map((item, index) => {
      return cartindex === index
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        : item;
    });
    setCARTDATA(_CART);
    setCartData(_CART);
  };

  return (
    <>
      <div className="cart-item">
        <img src={productImg} alt="" />
        <div className="cart-item-content">
          <div className="cart-content">
            <p className="cart-item-name">{productName}</p>
            <div className="item-info">
              <p>${productPrice * productCount}</p>
            </div>
          </div>
          <div className="cart-item-btns">
            <button
              className="inc-btn"
              type="number"
              onClick={() => handleIncrement(cartIndex)}
            >
              +
            </button>
            <p>{productCount}</p>
            <button
              className="dec-btn"
              type="number"
              onClick={() => handleDecrement(cartIndex)}
            >
              -
            </button>
          </div>
        </div>
        <div
          className="delete-icon"
          // Anonymous function to ensure that the function will only envoke when the button will be clicked
          onClick={() => handleItemDelete(productName)}
        >
          <RxCross1 />
        </div>
      </div>
    </>
  );
};

export default CartItem;
