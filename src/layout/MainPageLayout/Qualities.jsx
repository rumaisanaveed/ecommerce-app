import { MdLocalShipping } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const Qualities = () => {
  return (
    <div className="qualities-container">
      <div className="quality-card">
        <MdLocalShipping className="quality-icon" />
        <h1>Free Shipping</h1>
        <p>Above $5 only</p>
      </div>
      <div className="quality-card">
        <AiFillSafetyCertificate className="quality-icon" />
        <h1>Certified Organic</h1>
        <p>100% Guarantee</p>
      </div>
      <div className="quality-card">
        <FaMoneyBillAlt className="quality-icon" />
        <h1>Huge Savings</h1>
        <p>At Lowest Price</p>
      </div>
      <div className="quality-card">
        <GiReturnArrow className="quality-icon" />
        <h1>Easy Returns</h1>
        <p>No Questions Asked</p>
      </div>
    </div>
  );
};

export default Qualities;
