import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        // /cookies
        to={`${product.title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <main className="product">
          <div className="product-image">
            <img src={product.image} alt="" />
          </div>
          <p className="product-title">{product.title}</p>
          <p className="product-price">${product.price}</p>
        </main>
      </Link>
    </>
  );
};

export default Product;
