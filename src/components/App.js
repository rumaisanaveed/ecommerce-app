// Libraries
import { Route, Routes } from "react-router-dom";
// Components and pages
import Layout from "./Layout";
import Home from "../pages/Home";
import Groceries from "../pages/Groceries";
import Toiletries from "../pages/Toiletries";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
// Contexts
import { DataProvider } from "../context/DataContext";
import { CartContextProvider } from "../context/CartContext";

function App() {
  return (
    <DataProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />}></Route>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/home">
              <Route index element={<Home />} />
              <Route path=":title" element={<ProductPage />} />
            </Route>
            <Route path="/groceries">
              <Route index element={<Groceries />} />
              <Route path=":title" element={<ProductPage />} />
            </Route>
            <Route path="/toiletries">
              <Route index element={<Toiletries />} />
              <Route path=":title" element={<ProductPage />} />
            </Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </DataProvider>
  );
}

export default App;
