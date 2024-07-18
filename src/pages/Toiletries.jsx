import { useContext } from "react";
import Products from "../components/productListings/Products";
import DataContext from "../context/DataContext";

const Toiletries = () => {
  const { fetchError, isLoading, searchToiletries } = useContext(DataContext);
  return (
    <main className="home">
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
