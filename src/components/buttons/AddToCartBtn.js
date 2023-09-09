const AddToCartBtn = ({ cartItemsCount, setCartItemsCount, setIsAddToCart, productCount }) => {
    // 10 is used as redix for ensure the number must be in decimal system 
    // To ensure that cart count adds the previous value
    const newCartItemsCount = parseInt(cartItemsCount, 10) + parseInt(productCount, 10);

    const handleAddToCart = () => {
      setCartItemsCount(newCartItemsCount);
      setIsAddToCart(true);

      setTimeout(() => {
        setIsAddToCart(false);
      }, 10000);
    }

    return (
        <button className="add-to-cart-btn" type='button' onClick={handleAddToCart}>Add to Cart</button>
    )
}

export default AddToCartBtn