import Products from "../components//product_listings/Products";
import SearchBox from "../components/searchBox";

const Groceries = ({ search, setSearch, fetchError, isLoading, groceries }) => {
  console.log(groceries);
  return (
    <main className="home">
      <SearchBox search={search} setSearch={setSearch} />
      {isLoading && <p>Products are loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && groceries.length ? (
        <Products products={groceries} />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display....</p>
        </main>
      )}
    </main>
  );
};

export default Groceries;
