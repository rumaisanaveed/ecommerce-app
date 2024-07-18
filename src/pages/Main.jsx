import DiscountCard from "../layout/MainPageLayout/DiscountCard";
import Hero from "../layout/MainPageLayout/Hero";
import ProductCards from "../layout/MainPageLayout/ProductCards";
import Qualities from "../layout/MainPageLayout/Qualities";
import Reviews from "../layout/MainPageLayout/Reviews";

const Main = () => {
  return (
    <>
      <Hero />
      <Qualities />
      <ProductCards />
      <DiscountCard />
      <Reviews />
    </>
  );
};

export default Main;
