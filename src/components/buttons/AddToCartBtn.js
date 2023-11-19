import { useContext } from "react";
import CartContext from "../../context/CartContext";

const AddToCartBtn = ({ product }) => {
  const { setIsAddToCart, cartData, setCartData } = useContext(CartContext);

  const handleAddToCart = () => {
    // If one product is already in the cart then don't add it again
    // console.log("Before CARTDATA", CARTDATA);
    const existingItem = cartData.find((item) => item.title === product.title);
    // If item is already not in the cart
    if (!existingItem) {
      setCartData((prevCartData) => [
        ...prevCartData,
        { ...product, quantity: 1 },
      ]);
    }

    // Make sure the item has been added to cart
    setIsAddToCart(true);

    setTimeout(() => {
      setIsAddToCart(false);
    }, 5000);
    // console.log("After CARTDATA", CARTDATA);
  };

  return (
    <button className="add-to-cart-btn" type="button" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
