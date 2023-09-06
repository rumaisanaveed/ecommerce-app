import Products from "../components/product_listings/Products"

const Toiletries = ({ toiletries }) => {
  return (
    <main className="home">
    {toiletries.length ? (
       <Products products={toiletries}/>
    )
      : 
    (
       <p className='no-data'>
         No Products to display.
       </p>
    )
    }
   </main>
  )
}

export default Toiletries
