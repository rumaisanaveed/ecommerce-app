import { useContext } from "react";
import Products from "../components/product_listings/Products";
import DataContext from "../context/DataContext";
import CartContext from "../context/CartContext";

const Home = () => {
  const { search, setSearch, fetchError, isLoading, searchResults } =
    useContext(DataContext);
  const { isCartVisible } = useContext(CartContext);
  const mainClass = isCartVisible ? "stop-scroll home" : "home";

  return (
    <main className={mainClass}>
      {/* {isLoading && <p>Loading products....</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>} */}
      {!isLoading && !fetchError && searchResults.length ? (
        <Products
          search={search}
          setSearch={setSearch}
          products={searchResults}
        />
      ) : (
        <main className="product-not-found">
          <h1>No products to display...</h1>
        </main>
      )}
    </main>
  );
};

export default Home;
