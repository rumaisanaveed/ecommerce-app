import { useContext } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Cart from "./Cart";
import { Outlet } from "react-router-dom";
import CartContext from "../context/CartContext";

const Layout = () => {
  const { isCartVisible } = useContext(CartContext);
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
      {isCartVisible && <Cart />}
    </div>
  );
};

export default Layout;
