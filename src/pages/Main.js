import { useContext } from "react";
import DiscountCard from "../layout/main_page_layout/DiscountCard";
import Hero from "../layout/main_page_layout/Hero";
import ProductCards from "../layout/main_page_layout/ProductCards";
import Qualities from "../layout/main_page_layout/Qualities";
import Reviews from "../layout/main_page_layout/Reviews";
import CartContext from "../context/CartContext";

const Main = () => {
  const { isCartVisible } = useContext(CartContext);
  return (
    <div className={isCartVisible ? "stop-scroll" : ""}>
      <Hero />
      <Qualities />
      <ProductCards />
      <DiscountCard />
      <Reviews />
    </div>
  );
};

export default Main;
