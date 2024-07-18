import ShopNowBtn from "../../components/buttons/ShopNowBtn";
// import basilLeaf from '../../public/images/basilLeaf.png'

const ProductCards = () => {
  return (
    <div className="product-cards-container">
      <div className="product-card">
        <h1>Farm Fresh Fruits</h1>
        <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
        <ShopNowBtn />
      </div>
      <div className="product-card">
        <h1>Fresh Vegetables</h1>
        <p>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
        <ShopNowBtn />
      </div>
      <div className="product-card">
        <h1>Organic Legume</h1>
        <p>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
        <ShopNowBtn />
      </div>
    </div>
  );
};

export default ProductCards;
