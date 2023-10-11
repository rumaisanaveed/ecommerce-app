const AddToCartBtn = ({
  product,
  cartItems,
  setCartItems,
  cartItemsCount,
  setCartItemsCount,
  setIsAddToCart,
  productCount,
  noOfCartItems,
  setNoOfCartItems,
}) => {
  // 10 is used as redix to ensure the number must be in decimal system
  // To ensure that cart count adds the previous value
  const newCartItemsCount =
    parseInt(cartItemsCount, 10) + parseInt(productCount, 10);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
    setCartItemsCount(newCartItemsCount);
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
