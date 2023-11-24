import { useContext } from "react";
import Products from "../components/product_listings/Products";
import DataContext from "../context/DataContext";

const Home = () => {
  const { search, setSearch, fetchError, isLoading, searchResults } =
    useContext(DataContext);

  return (
    <main className="home">
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
