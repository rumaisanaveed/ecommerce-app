import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import CartContext from "../context/CartContext";

const CartItem = ({
  productImg,
  productName,
  productQuantity,
  productPrice,
}) => {
  // Handling the deletion of a product from the cart
  const { cartData, setCartData } = useContext(CartContext);
  const handleItemDelete = (productName) => {
    const cartItemsAfterDeletion = cartData.filter(
      (item) => item.title != productName
    );
    setCartData(cartItemsAfterDeletion);
    console.log(cartData);
  };

  return (
    <>
      <div className="cart-item">
        <img src={productImg} alt="" />
        <div className="cart-item-content">
          <p className="cart-item-name">{productName}</p>
          <div className="item-info">
            <p>{productQuantity}</p>
            <p>{productPrice}</p>
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
