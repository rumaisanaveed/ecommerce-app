import { useContext } from "react";
import CartContext from "../../context/CartContext";

const AddToCartBtn = ({ product }) => {
  const {
    setIsAddToCart,
    cartData,
    setCartData,
    cartItemsCount,
    setCartItemsCount,
    noOfCartItems,
    setNoOfCartItems,
    productCount,
  } = useContext(CartContext);

  const newCartItemsCount =
    parseInt(cartItemsCount, 10) + parseInt(productCount, 10);

  const handleAddToCart = () => {
    // If one product is already in the cart then don't add it again
    if (!cartData.some((item) => item.title === product.title)) {
      // Retrieving the previous data in the cart also
      setCartData([...cartData, product]);
    }
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
