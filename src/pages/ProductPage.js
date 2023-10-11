import { useParams } from "react-router-dom";
import AddToCartBtn from "../components/buttons/AddToCartBtn";
import { useState } from "react";
import Cart from "../components/Cart";

const ProductPage = ({
  products,
  productCount,
  setProductCount,
  cartItemsCount,
  setCartItemsCount,
  isAddToCart,
  setIsAddToCart,
}) => {
  const { title } = useParams();
  const product = products.find(
    (product) =>
      product.title ===
      title
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
  );
  const [cartItems, setCartItems] = useState([]);
  const [noOfCartItems, setNoOfCartItems] = useState(0);

  return (
    <>
      {product && (
        <main className="product-container">
          {isAddToCart && alert("Item has been added to your cart.")}
          <section className={`product-details-container`}>
            <div className="product-image-container">
              <img className="product-img" src={product.image} alt="" />
            </div>
            <div className="product-details">
              <h1>{product.title}</h1>
              <h2>{product.price}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident quis ex officia eveniet at,aliquam rem, libero sequi
                harum voluptatem perferendis, repudiandae voluptatum dolorum
                explicabo nulla cupiditate exercitationem neque iusto?
              </p>
              <div className="btns-container">
                <AddToCartBtn
                  product={product}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  cartItemsCount={cartItemsCount}
                  setCartItemsCount={setCartItemsCount}
                  isAddToCart={isAddToCart}
                  setIsAddToCart={setIsAddToCart}
                  productCount={productCount}
                  noOfCartItems={noOfCartItems}
                  setNoOfCartItems={setNoOfCartItems}
                />
                <Cart
                  productImg={product.image}
                  productName={product.title}
                  productPrice={product.price}
                  noOfCartItems={noOfCartItems}
                />
              </div>
            </div>
          </section>
        </main>
      )}

      {!product && (
        <main className="product-not-found">
          <p className="no-data">Oops!!! Product Not Found</p>
        </main>
      )}
    </>
  );
};

export default ProductPage;
