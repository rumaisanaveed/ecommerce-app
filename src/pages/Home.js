import Products from "../components/product_listings/Products";
import SearchBox from "../components/searchBox";

const Home = ({ search, setSearch, fetchError, isLoading, products }) => {
  return (
    <main className="home">
      <SearchBox search={search} setSearch={setSearch} />
      {isLoading && <p>Loading products....</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && products.length ? (
        <Products search={search} setSearch={setSearch} products={products} />
      ) : (
        <main className="product-not-found">
          <p className="no-data">No products to display</p>
        </main>
      )}
    </main>
  );
};

export default Home;
