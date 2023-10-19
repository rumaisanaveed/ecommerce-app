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
  // Customer Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState(null);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostCode] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState("");

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/items"
  );
  // console.log(data);

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
