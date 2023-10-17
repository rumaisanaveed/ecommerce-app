import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [productCount, setProductCount] = useState(1);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [noOfCartItems, setNoOfCartItems] = useState(0);

  // Function to toggle the visibility of the Cart component
  const toggleCartVisibility = () => {
    // console.log(isCartVisible);
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartContext.Provider
      value={{
        productCount,
        setProductCount,
        cartItemsCount,
        setCartItemsCount,
        isAddToCart,
        setIsAddToCart,
        cartData,
        setCartData,
        isCartVisible,
        setIsCartVisible,
        noOfCartItems,
        setNoOfCartItems,
        toggleCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
