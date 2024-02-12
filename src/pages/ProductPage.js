import { useParams } from "react-router-dom";
import AddToCartBtn from "../components/buttons/AddToCartBtn";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import CartContext from "../context/CartContext";

const ProductPage = () => {
  const { searchResults, filterGroceries, searchToiletries } =
    useContext(DataContext);

  const { cartData, setCartData } = useContext(CartContext);

  // Checking the current page
  const { title } = useParams();
  // console.log(title);
  const isHomePage =
    !title.includes("groceries") && !title.includes("toiletries");
  const isGroceriesPage = title.includes("groceries");

  // Assigining products according to the current page
  let products;
  if (isHomePage) {
    products = searchResults;
  } else if (isGroceriesPage) {
    products = filterGroceries;
  } else {
    products = searchToiletries;
  }

  // Finding which product has been added to cart
  const product = products.find(
    (product) =>
      product.title ===
      title
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
  );
  // console.log(product);

  return (
    <>
      {product && (
        <main className="product-container">
          <section className={`product-details-container`}>
            <div className="product-image-container">
              <img className="product-img" src={product.image} alt="" />
            </div>
            <div className="product-details">
              <h1>{product.title}</h1>
              <h2>${product.price}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident quis ex officia eveniet at,aliquam rem, libero sequi
                harum voluptatem perferendis, repudiandae voluptatum dolorum
                explicabo nulla cupiditate exercitationem neque iusto?
              </p>
              <div className="btns-container">
                <AddToCartBtn product={product} />
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
