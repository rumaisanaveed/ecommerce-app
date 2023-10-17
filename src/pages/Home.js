import { useContext } from "react";
import Products from "../components/product_listings/Products";
import SearchBox from "../components/searchBox";
import DataContext from "../context/DataContext";

const Home = () => {
  const { search, setSearch, fetchError, isLoading, searchResults } =
    useContext(DataContext);

  return (
    <main className="home">
      {/* <SearchBox search={search} setSearch={setSearch} /> */}
      {isLoading && <p>Loading products....</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && searchResults.length ? (
        <Products
          search={search}
          setSearch={setSearch}
          products={searchResults}
        />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display</p>
        </main>
      )}
    </main>
  );
};
export default Home;
