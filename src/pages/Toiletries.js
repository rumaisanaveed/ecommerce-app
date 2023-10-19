import { useContext } from "react";
import Products from "../components/product_listings/Products";
import SearchBox from "../components/searchBox";
import DataContext from "../context/DataContext";

const Toiletries = () => {
  const { search, setSearch, fetchError, isLoading, searchToiletries } =
    useContext(DataContext);
  return (
    <main className="home">
      {/* <SearchBox search={search} setSearch={setSearch} /> */}
      {isLoading && <p>Products are loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && searchToiletries.length ? (
        <Products products={searchToiletries} />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display...</p>
        </main>
      )}
    </main>
  );
};

export default Toiletries;
