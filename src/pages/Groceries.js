import Products from "../components//product_listings/Products"

const Groceries = ({ groceries }) => {
  console.log(groceries);
  return (
    <main className="home">
       {groceries.length ? (
          <Products products={groceries}/>
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

export default Groceries