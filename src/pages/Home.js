import Products from '../components/product_listings/Products'

const Home = ({ products }) => {
  return (
    <main className='home'>
       {products.length ? (
          <Products products={products} />
       )
         : 
       (
        <main className='product-not-found'>
          <p className='no-data'>
              No products to display
          </p>
        </main>
       )
       }
    </main>
  )
}

export default Home
