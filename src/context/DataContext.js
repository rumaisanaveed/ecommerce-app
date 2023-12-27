import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterGroceries, setFilteredGroceries] = useState([]);
  const [searchGroceries, setSearchGroceries] = useState([]);
  const [filterToiletries, setFilteredToiletries] = useState([]);
  const [searchToiletries, setSearchToiletries] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/items"
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // for search items
  useEffect(() => {
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [products, search]);

  // get grocery items
  useEffect(() => {
    const groceries = products.filter(
      (product) => product.category === "groceries"
    );
    setFilteredGroceries(groceries);
  }, [products]);

  // get search items on grocery page
  useEffect(() => {
    const searchedGroceries = filterGroceries.filter((searchedGrocery) =>
      searchedGrocery.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchGroceries(searchedGroceries);
  }, [filterGroceries, search]);

  // get toiletry items
  useEffect(() => {
    const toiletries = products.filter(
      (product) => product.category === "toiletries"
    );
    setFilteredToiletries(toiletries);
  }, [products]);

  // get search items on toiletry page
  useEffect(() => {
    const searchedToiletries = filterToiletries.filter((searchedToiletry) =>
      searchedToiletry.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchToiletries(searchedToiletries);
  }, [filterToiletries, search]);

  return (
    <DataContext.Provider
      value={{
        // Home Page
        search,
        setSearch,
        fetchError,
        isLoading,
        // Product Page
        searchResults,
        // Groceries Page
        searchGroceries,
        filterGroceries,
        // Toiletries Page
        searchToiletries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
