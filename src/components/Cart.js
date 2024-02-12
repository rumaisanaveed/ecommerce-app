import { RxCross1 } from "react-icons/rx";
import { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CheckOutBtn from "./buttons/CheckOutBtn";
import CartContext from "../context/CartContext";

const Cart = () => {
  // Handling the cart close and open
  const [isCartClosed, setIsCartClosed] = useState(true);
  const hideCart = () => {
    setIsCartClosed(false);
  };

  // Cart data consumer
  const { CARTDATA, setCARTDATA, cartData, totalCartPrice, setTotalCartPrice } =
    useContext(CartContext);

  // Cart total amount

  const totalPrice = CARTDATA.reduce(
    (acc, dataItem) => acc + dataItem.quantity * parseFloat(dataItem.price),
    0
  );
  setTotalCartPrice(totalPrice);

  useEffect(() => {
    setCARTDATA(cartData);
  }, [cartData]);

  return (
    <>
      {isCartClosed && (
        <div className="cart-wrapper">
          <div className="cart-container">
            <div className="cart-first-row">
              <h1>Shopping Cart</h1>
              <RxCross1 className="cross-icon" onClick={hideCart} />
            </div>
            {/* if cart has no items */}
            {CARTDATA.length === 0 && (
              <>
                {/* {console.log(noOfCartItems)} */}
                <div className="cart-msg">
                  <p>No products in the cart</p>
                </div>
              </>
            )}

            {/* If cart has items */}
            {CARTDATA.length > 0 && (
              <>
                <div className="cart-body">
                  {CARTDATA &&
                    CARTDATA.map((item, cartIndex) => {
                      return (
                        <CartItem
                          key={cartIndex}
                          cartIndex={cartIndex}
                          productImg={item.image}
                          productName={item.title}
                          productPrice={item.price}
                          productCount={parseInt(item.quantity)}
                        />
                      );
                    })}
                </div>
                <div className="last-row-wrapper">
                  <div className="cart-last-row">
                    <div className="price-container">
                      <p>Subtotal:</p>
                      <p>${totalCartPrice}</p>
                    </div>
                    <div className="cart-btns">
                      <CheckOutBtn />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
