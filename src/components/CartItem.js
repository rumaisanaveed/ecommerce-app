import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import CartContext from "../context/CartContext";

const CartItem = ({ productImg, productName, productPrice, productCount }) => {
  // Handling the deletion of a product from the cart
  const { cartData, setCartData, noOfCartItems, setNoOfCartItems } =
    useContext(CartContext);
  const handleItemDelete = (productName) => {
    const cartItemsAfterDeletion = cartData.filter(
      (item) => item.title !== productName
    );
    setCartData(cartItemsAfterDeletion);
    setNoOfCartItems(noOfCartItems - 1);
  };

  return (
    <>
      <div className="cart-item">
        <img src={productImg} alt="" />
        <div className="cart-item-content">
          <div className="cart-content">
            <p className="cart-item-name">{productName}</p>
            <div className="item-info">
              {/* <p>{productCount}</p>
            <p>x</p> */}
              <p>${productPrice}</p>
            </div>
          </div>
          <div className="cart-item-btns">
            <button className="inc-btn" type="number">
              +
            </button>
            <p>1</p>
            <button className="dec-btn" type="number">
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
