import { RxCross1 } from "react-icons/rx"

const CartItem = ({ productImg, productName, productQuantity, productPrice }) => {

    const handleDelete = () => {
        alert("Button clicked!");
    }

  return (
    <>
        <div className="cart-item">
            <img src={productImg} alt="" />
            <div className="cart-item-content">
                <p>{productName}</p>
                <div className="item-info">
                    <p>{productQuantity}</p>
                    <p>{productPrice}</p>
                </div>
            </div>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
            <RxCross1 />
        </div>
    </>
  )
}

export default CartItem
