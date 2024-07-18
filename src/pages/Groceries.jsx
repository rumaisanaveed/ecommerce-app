import { useContext } from "react";
import Products from "../components/productListings/Products";
import DataContext from "../context/DataContext";

const Groceries = () => {
  const { fetchError, isLoading, searchGroceries } = useContext(DataContext);
  // console.log(searchGroceries);
  return (
    <main className="home">
      {!isLoading && !fetchError && searchGroceries.length ? (
        <Products products={searchGroceries} />
      ) : (
        <main className="product-not-found">
          <h1>No products to display...</h1>
        </main>
      )}
    </main>
  );
};

export default Groceries;
