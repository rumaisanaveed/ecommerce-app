import { Link } from "react-router-dom"

const CheckOutBtn = () => {
  return (
    <Link to="/checkout">
        <button className="checkout-btn">
            Checkout
        </button>
    </Link>
  )
}

export default CheckOutBtn
