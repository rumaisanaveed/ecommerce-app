import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

const Layout = ( { search, setSearch, handleSearch }) => {
  return (
    <div className="container">
        <Header 
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
