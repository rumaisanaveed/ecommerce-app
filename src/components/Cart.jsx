import { RxCross1 } from "react-icons/rx";
import { useContext, useEffect, useCallback } from "react";
import CartItem from "./CartItem";
import CheckOutBtn from "./buttons/CheckOutBtn";
import CartContext from "../context/CartContext";

const Cart = () => {
  // Handling the cart close and open
  const { isCartClosed, setIsCartClosed } = useContext(CartContext);

  const hideCart = () => {
    setIsCartClosed(false);
  };

  // Cart data consumer
  const { CARTDATA, setCARTDATA, cartData, totalCartPrice, setTotalCartPrice } =
    useContext(CartContext);

  // Calculate total price using useCallback to memoize the function
  const calculateTotalPrice = useCallback(() => {
    const totalPrice = CARTDATA.reduce(
      (acc, dataItem) => acc + dataItem.quantity * parseFloat(dataItem.price),
      0
    );
    setTotalCartPrice(totalPrice);
  }, [CARTDATA, setTotalCartPrice]);

  useEffect(() => {
    setCARTDATA(cartData);
  }, [cartData, setCARTDATA]);

  useEffect(() => {
    calculateTotalPrice();
  }, [CARTDATA, calculateTotalPrice]);

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
                    CARTDATA.map((item, cartIndex) => (
                      <CartItem
                        key={cartIndex}
                        cartIndex={cartIndex}
                        productImg={item.image}
                        productName={item.title}
                        productPrice={item.price}
                        productCount={parseInt(item.quantity)}
                      />
                    ))}
                </div>
                <div className="last-row-wrapper">
                  <div className="cart-last-row">
                    <div className="price-container">
                      <p>Subtotal:</p>
                      <p>${totalCartPrice}</p>
                    </div>
                    <div className="cart-btns">
                      <CheckOutBtn />
                      {/* <Button className="checkout">Checkout</Button> */}
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
