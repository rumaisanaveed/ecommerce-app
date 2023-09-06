import DiscountCard from "../layout/main_page_layout/DiscountCard"
import Hero from "../layout/main_page_layout/Hero"
import ProductCards from "../layout/main_page_layout/ProductCards"
import Qualities from "../layout/main_page_layout/Qualities"
import Reviews from "../layout/Reviews"

const Main = () => {
    return (
        <>
            <Hero />
            <Qualities />
            <ProductCards />
            <DiscountCard />
            <Reviews />
        </>
    )
}

export default Main