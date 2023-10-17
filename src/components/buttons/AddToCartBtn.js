import { useContext } from "react";
import CartContext from "../../context/CartContext";

const AddToCartBtn = ({ product }) => {
  const {
    cartItemsCount,
    setCartItemsCount,
    productCount,
    setIsAddToCart,
    cartData,
    setCartData,
    noOfCartItems,
    setNoOfCartItems,
  } = useContext(CartContext);

  // 10 is used as redix to ensure the number must be in decimal system
  // To ensure that cart count adds the previous value
  const newCartItemsCount =
    parseInt(cartItemsCount, 10) + parseInt(productCount, 10);

  const handleAddToCart = () => {
    // Retrieving the previous data in the cart also
    // console.log(cartData);
    setCartData([...cartData, product]);
    setCartItemsCount(newCartItemsCount);
    // Make sure the item has been added to cart
    setIsAddToCart(true);
    setNoOfCartItems(noOfCartItems + 1);

    setTimeout(() => {
      setIsAddToCart(false);
    }, 5000);
  };

  return (
    <button className="add-to-cart-btn" type="button" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
