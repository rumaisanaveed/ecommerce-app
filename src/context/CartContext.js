import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [CARTDATA, setCARTDATA] = useState([]);
  // Flag for item has been added to cart
  const [isAddToCart, setIsAddToCart] = useState(false);
  // Actual data in the cart
  const [cartData, setCartData] = useState([]);
  // Flag for showing cart
  const [isCartVisible, setIsCartVisible] = useState(false);
  // Total items in the cart
  const [noOfCartItems, setNoOfCartItems] = useState(0);
  // Cart total price
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  // Function to toggle the visibility of the Cart component
  const toggleCartVisibility = () => {
    // console.log(isCartVisible);
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartContext.Provider
      value={{
        // productCount,
        // setProductCount,
        CARTDATA,
        setCARTDATA,
        isAddToCart,
        setIsAddToCart,
        cartData,
        setCartData,
        isCartVisible,
        setIsCartVisible,
        noOfCartItems,
        setNoOfCartItems,
        toggleCartVisibility,
        totalCartPrice,
        setTotalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
