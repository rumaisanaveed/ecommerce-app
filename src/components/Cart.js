import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import ViewCartBtn from "./buttons/ViewCartBtn";
import CheckOutBtn from "./buttons/CheckOutBtn";
import CartContext from "../context/CartContext";

const Cart = () => {
  // Handling the cart close and open
  const [isCartClosed, setIsCartClosed] = useState(true);
  const hideCart = () => {
    setIsCartClosed(false);
  };

  // Cart data consumer
  const { cartData, noOfCartItems } = useContext(CartContext);

  return (
    <>
      {isCartClosed && (
        <div className="cart-container">
          <div className="cart-first-row">
            <h1>Shopping Cart</h1>
            <RxCross1 className="cross-icon" onClick={hideCart} />
          </div>
          {/* if cart has no items */}
          {noOfCartItems === 0 && (
            <>
              {/* {console.log(noOfCartItems)} */}
              <div className="cart-msg">
                <p>No products in the cart</p>
              </div>
            </>
          )}

          {/* If cart has items */}
          {noOfCartItems > 0 && (
            <>
              {/* {console.log(noOfCartItems)} */}
              <div className="cart-body">
                {cartData.map((item, index) => {
                  // console.log(item);
                  return (
                    <CartItem
                      key={index}
                      productImg={item.image}
                      productName={item.title}
                      productPrice={item.price}
                    />
                  );
                })}
                <div className="price-container">
                  <p>Subtotal:</p>
                  <p>$18</p>
                </div>
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
