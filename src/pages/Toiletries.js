import Products from "../components/product_listings/Products";
import SearchBox from "../components/searchBox";

const Toiletries = ({
  search,
  setSearch,
  fetchError,
  isLoading,
  toiletries,
}) => {
  return (
    <main className="home">
      <SearchBox search={search} setSearch={setSearch} />
      {isLoading && <p>Products are loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && toiletries.length ? (
        <Products products={toiletries} />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display</p>
        </main>
      )}
    </main>
  );
};

export default Toiletries;
