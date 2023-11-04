import { useContext } from "react";
import Products from "../components/product_listings/Products";
import DataContext from "../context/DataContext";
import CartContext from "../context/CartContext";

const Toiletries = () => {
  const { search, setSearch, fetchError, isLoading, searchToiletries } =
    useContext(DataContext);
  const { isCartVisible } = useContext(CartContext);
  return (
    <main className={isCartVisible ? "stop-scroll home" : "home"}>
      {/* {isLoading && <p>Products are loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>} */}
      {!isLoading && !fetchError && searchToiletries.length ? (
        <Products products={searchToiletries} />
      ) : (
        <main className="product-not-found">
          <h1>No products to display...</h1>
        </main>
      )}
    </main>
  );
};

export default Toiletries;
