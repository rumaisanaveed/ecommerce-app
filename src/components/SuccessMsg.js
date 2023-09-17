import ViewCartBtn from "./buttons/ViewCartBtn"
import { TiTick } from 'react-icons/ti'

const SuccessMsg = ( { productCount, productName }) => {
  return (
      <div className="success-msg-container">
        <div className="success-bar"></div>
        <div className="success-msg-content-container">
            <div className="success-icon-container"><TiTick className="success-icon"/></div>
            { 
              productCount > 1 ?
              (<p>{productCount} x {productName} has been added to your cart</p>)
              : 
              (<p>{productName} has been added to your cart</p>) 
            }
        </div>
        <div className="view-cart-btn-in-success-msg">
              <ViewCartBtn />
        </div>
      </div>
  )
}

export default SuccessMsg
