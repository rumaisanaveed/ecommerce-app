import { RxCross1 } from 'react-icons/rx'
import CartBtn from './buttons/CartBtn'
import { useState } from 'react';
import CartItem from './CartItem'
import ViewCartBtn from './buttons/ViewCartBtn';
import CheckOutBtn from './buttons/CheckOutBtn'

const Cart = ({ productImg, productName, productQuantity, productPrice, noOfCartItems }) => {
  const [ isCartClosed, setIsCartClosed ] = useState(true);
  
  const hideCart = () => {
     setIsCartClosed(false);
  }

  return (
    <>
      { isCartClosed && (
        <div className="cart-container">
          <div className="cart-first-row">
              <h1>Shopping Cart</h1>
              <RxCross1 className='cross-icon' onClick={hideCart} />
          </div>
          {console.log(noOfCartItems)}
          {/* Cart Body */}
          { 
            noOfCartItems === 0 && (
              <>
                <div className="cart-msg">
                  <p>No products in the cart</p>
                </div>
                <CartBtn />
              </>
            )
          }

          {
            noOfCartItems > 0 && (
              <>
                <div className='cart-body'>
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
            )
          }
        </div>
      )}
    </>
  )
}

export default Cart