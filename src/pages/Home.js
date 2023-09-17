import Products from '../components/product_listings/Products'

const Home = ({ fetchError, isLoading, products }) => {
  return (
    <main className='home'>
      {isLoading && <p>Loading products....</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (products.length) ? (
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
