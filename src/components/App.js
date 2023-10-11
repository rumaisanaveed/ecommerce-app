// Libraries
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Components and pages
import Layout from "./Layout";
import Home from "../pages/Home";
import Groceries from "../pages/Groceries";
import Toiletries from "../pages/Toiletries";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CartPage from "../pages/CartPage";
// Api
import ProductPage from "../pages/ProductPage";
import useAxiosFetch from "../hooks/useAxiosFetch";

function App() {
  // States
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterGroceries, setFilteredGroceries] = useState([]);
  const [searchGroceries, setSearchGroceries] = useState([]);
  const [filterToiletries, setFilteredToiletries] = useState([]);
  const [searchToiletries, setSearchToiletries] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isAddToCart, setIsAddToCart] = useState(false);

  // Fetching the data from api
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/items"
  );
  console.log(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [products, search]);

  useEffect(() => {
    const groceries = products.filter(
      (product) => product.category === "groceries"
    );
    setFilteredGroceries(groceries);
  }, [products]);

  useEffect(() => {
    const searchedGroceries = filterGroceries.filter((searchedGrocery) =>
      searchedGrocery.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchGroceries(searchedGroceries);
  }, [filterGroceries, search]);

  useEffect(() => {
    const toiletries = products.filter(
      (product) => product.category === "toiletries"
    );
    setFilteredToiletries(toiletries);
  }, [products]);

  useEffect(() => {
    const searchedToiletries = filterToiletries.filter((searchedToiletry) =>
      searchedToiletry.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchToiletries(searchedToiletries);
  }, [filterToiletries, search]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            cartItemsCount={cartItemsCount}
            setCartItemsCount={setCartItemsCount}
          />
        }
      >
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route index element={<Main />} />
        <Route path="/home">
          <Route
            index
            element={
              <Home
                search={search}
                setSearch={setSearch}
                fetchError={fetchError}
                isLoading={isLoading}
                products={searchResults}
              />
            }
          />
          <Route
            path=":title"
            element={
              <ProductPage
                products={searchResults}
                productCount={productCount}
                setProductCount={setProductCount}
                cartItemsCount={cartItemsCount}
                setCartItemsCount={setCartItemsCount}
                isAddToCart={isAddToCart}
                setIsAddToCart={setIsAddToCart}
              />
            }
          />
        </Route>
        <Route path="/cart"></Route>
        <Route path="/groceries">
          <Route
            index
            element={
              <Groceries
                search={search}
                setSearch={setSearch}
                fetchError={fetchError}
                isLoading={isLoading}
                groceries={searchGroceries}
              />
            }
          />
          <Route
            path=":title"
            element={
              <ProductPage
                products={filterGroceries}
                productCount={productCount}
                setProductCount={setProductCount}
                cartItemsCount={cartItemsCount}
                setCartItemsCount={setCartItemsCount}
                isAddToCart={isAddToCart}
                setIsAddToCart={setIsAddToCart}
              />
            }
          />
        </Route>
        <Route path="/toiletries">
          <Route
            index
            element={
              <Toiletries
                search={search}
                setSearch={setSearch}
                fetchError={fetchError}
                isLoading={isLoading}
                toiletries={searchToiletries}
              />
            }
          />
          <Route
            path=":title"
            element={
              <ProductPage
                products={searchToiletries}
                productCount={productCount}
                setProductCount={setProductCount}
                cartItemsCount={cartItemsCount}
                setCartItemsCount={setCartItemsCount}
                isAddToCart={isAddToCart}
                setIsAddToCart={setIsAddToCart}
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
