import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

const Layout = ({
  search,
  setSearch,
  handleSearch,
  cartItemsCount,
  setCartItemsCount,
}) => {
  return (
    <div className="container">
      <Header
        handleSearch={handleSearch}
        cartItemsCount={cartItemsCount}
        setCartItemsCount={setCartItemsCount}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
