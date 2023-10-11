import Product from "./Product";

const Products = ({ products }) => {
  return (
    <main className="products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </main>
  );
};

export default Products;
