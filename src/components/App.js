import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Groceries from '../pages/Groceries';
import Toiletries from '../pages/Toiletries';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import ProductPage from "../pages/ProductPage";

function App() {
  const [ products, setProducts ] = useState([
      {
          id : 1, 
          image : "/images/cashewButter.jpg",
          title : "Cashew Butter",
          price : "$20",
          category : "groceries"
      },

      {
        id : 2, 
        image : "/images/coffeeAsorted.jpg",
        title : "Coffee Asorted",
        price : "$50",
        category : "groceries"
      },

      {
        id : 3, 
        image : "/images/cookies.jpg",
        title : "Cookies",
        price : "$25",
        category : "groceries"
      },
      
      {
      id : 4, 
      image : "/images/edibleOil.jpg",
      title : "Edible Oil",
      price : "$34",
      category : "groceries"
      },

      {
      id : 5, 
      image : "/images/eggs.jpg",
      title : "Eggs",
      price : "$50",
      category : "groceries"
      },

      {
      id : 6, 
      image : "/images/gucciPerfume.jpg",
      title : "Gucci Perfume",
      price : "$100",
      category : "toiletries"
      },

      {
      id : 7, 
      image : "/images/himalayaFacewash.jpg",
      title : "Himalaya Face Wash",
      price : "$30",
      category : "toiletries"
      },

      {
      id : 8, 
      image : "/images/lorealShampoo.jpg",
      title : "Loreal Shampoo",
      price : "$20",
      category : "toiletries"
      },
      {
      id : 9, 
      image : "/images/missDiorPerfume.png",
      title : "Miss Dior Perfume",
      price : "$120",
      category : "toiletries"
      },
      {
      id : 10, 
      image : "/images/orangeJuice.jpg",
      title : "Orange Juice",
      price : "$35",
      category : "groceries"
      },
      {
      id : 11, 
      image : "/images/organicHoney.jpg",
      title : "Organic Honey",
      price : "$55",
      category : "groceries"
      },

      {
      id : 12, 
      image : "/images/panteneShampoo.jpg",
      title : "Pantene Shampoo",
      price : "$15",
      category : "toiletries"
      },

      {
      id : 13, 
      image : "/images/pondsFacewash.jpg",
      title : "Ponds Face Wash",
      price : "$25",
      category : "toiletries"
      },

      {
      id : 14, 
      image : "/images/sanitizer.jpg",
      title : "Sanitizer",
      price : "$30",
      category : "toiletries"
      },

      {
      id : 15, 
      image : "/images/redChillies.jpg",
      title : "Red Chillies",
      price : "$10",
      category : "groceries"
      }
])

  const [ search, setSearch ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ filterGroceries, setFilteredGroceries ] = useState([]);
  const [ searchGroceries , setSearchGroceries ] = useState([]);
  const [ filterToiletries, setFilteredToiletries ] = useState([]);
  const [ searchToiletries, setSearchToiletries ] = useState([]);

  // It will get executed whenever the state of products will be changed 
  useEffect(() => {
    const filteredResults = products.filter((product) =>
      ((product.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  },[ products, search ])

  useEffect(() => {
    const groceries = products.filter((product) => ((product.category) === "groceries"))
    setFilteredGroceries(groceries);
  }, [products])

  useEffect(() => {
    const searchedGroceries = filterGroceries.filter((searchedGrocery) =>
      ((searchedGrocery.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchGroceries(searchedGroceries);
    console.log(searchedGroceries);
  },[ filterGroceries, search ])

  useEffect(() => {
    const toiletries = products.filter((product) => ((product.category) === "toiletries"))
    setFilteredToiletries(toiletries);
  }, [products])

  useEffect(() => {
    const searchedToiletries = filterToiletries.filter((searchedToiletry) =>
      ((searchedToiletry.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchToiletries(searchedToiletries);
  }, [ filterToiletries, search ])

  return (
      <Routes>
          <Route path="/" element={<Layout 
              search={search}
              setSearch={setSearch}
          />}>
              <Route index element={<Main />} />
              <Route path="/home">
                  <Route index element={<Home 
                      products={searchResults}
                  />}/>
                  <Route path=":title" element={<ProductPage 
                      products={searchResults}
                  />}/>
              </Route>
              <Route path="/groceries">
                <Route index element={<Groceries
                      groceries={searchGroceries}
                />}/>
                <Route path=":title" element={<ProductPage
                    products={filterGroceries}
                />}/>
              </Route>
              <Route path="/toiletries">
                 <Route index element={<Toiletries
                    toiletries={searchToiletries}
                 />}/>
                 <Route path=":title" element={<ProductPage 
                    products={searchToiletries}
                 />}/>
              </Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
  );
}

export default App;