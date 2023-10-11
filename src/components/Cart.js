import { RxCross1 } from "react-icons/rx";
import CartBtn from "./buttons/CartBtn";
import { useState } from "react";
import CartItem from "./CartItem";
import ViewCartBtn from "./buttons/ViewCartBtn";
import CheckOutBtn from "./buttons/CheckOutBtn";
import { RiH1 } from "react-icons/ri";

const Cart = ({
  productImg,
  productName,
  productQuantity,
  productPrice,
  noOfCartItems,
}) => {
  const [isCartClosed, setIsCartClosed] = useState(true);

  const hideCart = () => {
    setIsCartClosed(false);
  };

  return (
    <>
      {console.log(noOfCartItems)}
      {console.log(isCartClosed)}
      {isCartClosed && (
        <div className="cart-container">
          <div className="cart-first-row">
            <h1>Shopping Cart</h1>
            <RxCross1 className="cross-icon" onClick={hideCart} />
          </div>
          {/* Cart Body */}
          {noOfCartItems === 0 && (
            <>
              <h1>Hey 2</h1>
              <div className="cart-msg">
                <p>No products in the cart</p>
              </div>
              <CartBtn />
            </>
          )}
          {noOfCartItems > 0 && (
            <>
              <h1>Hey 3</h1>
              <div className="cart-body">
                <CartItem
                  productImg={productImg}
                  productName={productName}
                  productQuantity={productQuantity}
                  productPrice={productPrice}
                />
                <div className="cart-btns">
                  <ViewCartBtn />
                  <CheckOutBtn />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
