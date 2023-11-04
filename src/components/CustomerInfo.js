import CountrySelect from "./CountrySelect";
import StateSelect from "./StateSelect";

const CustomerInfo = () => {
  return (
    <main className="customer-info-container">
      <div className="customer-form-main-heading">
        <h1>Checkout</h1>
      </div>
      <div className="customer-form-sec-heading">
        <h2>Billing Details</h2>
      </div>
      <div className="customer-form">
        <div className="fname">
          <label>First name</label>
          <input type="text" />
        </div>
        <div className="lname">
          <label>Last name</label>
          <input type="text" />
        </div>
        <div className="full">
          <label>Company name</label>
          <input type="text" />
        </div>
        <div className="full">
          <label>Country / Region</label>
          <CountrySelect />
        </div>
        <div className="full">
          <label>Street Address</label>
          <input
            type="text"
            className="special-inputs"
            placeholder="House number and street name"
          />
          <input
            type="text"
            className="special-inputs special-input-2"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
        <div className="full">
          <label>Town / City</label>
          <input type="text" />
        </div>
        <div className="full">
          <label>State / Country</label>
          <StateSelect />
        </div>
        <div className="full">
          <label>Postcode / ZIP</label>
          <input type="text" />
        </div>
        <div className="full">
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className="full">
          <label>Email address</label>
          <input type="text" />
        </div>
      </div>
    </main>
  );
};

export default CustomerInfo;
