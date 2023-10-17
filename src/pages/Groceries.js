import { useContext } from "react";
import Products from "../components//product_listings/Products";
import DataContext from "../context/DataContext";
import SearchBox from "../components/searchBox";

const Groceries = () => {
  const { search, setSearch, fetchError, isLoading, searchGroceries } =
    useContext(DataContext);
  // console.log(searchGroceries);
  return (
    <main className="home">
      {/* <SearchBox search={search} setSearch={setSearch} /> */}
      {isLoading && <p>Products are loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && searchGroceries.length ? (
        <Products products={searchGroceries} />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display....</p>
        </main>
      )}
    </main>
  );
};

export default Groceries;
