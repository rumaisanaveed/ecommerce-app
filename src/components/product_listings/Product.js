import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <>
      <Link style={{textDecoration:"none", color:"inherit"}} to={`${product.title.replace(/\s+/g, "-").toLowerCase()}`}>
          <main className="product">
              <img className="product-image" src={(product.image)} alt="" />
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
          </main> 
       </Link>
    </>
  )
}

export default Product
