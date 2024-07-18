const CustomerInfo = ({ formValues, formErrors, handleFormChange }) => {
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
          <input
            type="text"
            name="firstname"
            placeholder=""
            value={formValues.firstname}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <p className="error error-top">{formErrors.firstname}</p>
        </div>
        <div className="lname">
          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            placeholder=""
            value={formValues.lastname}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <p className="error error-top">{formErrors.lastname}</p>
        </div>
        <div className="full">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder=""
            autoComplete="off"
            value={formValues.company}
            onChange={handleFormChange}
          />
        </div>
        <div className="full">
          <label>Country / Region</label>
          <select
            name="country"
            value={formValues.country}
            onChange={handleFormChange}
          >
            <option value="afghanistan">Afghanistan</option>
            <option value="aland islands">Aland Islands</option>
            <option value="albania">Albania</option>
            <option value="algeria">Algeria</option>
            <option value="american samoa">American Samoa</option>
            <option value="andorra">Andorra</option>
            <option value="angola">Angola</option>
            <option value="anguilla">Anguilla</option>
            <option value="antarctica">Antarctica</option>
            <option value="antigua and barbuda">Antigua and Barbuda</option>
            <option value="argentina">Argentina</option>
            <option value="armenia">Armenia</option>
            <option value="aruba">Aruba</option>
            <option value="australia">Australia</option>
            <option value="austria">Austria</option>
            <option value="azerbaijan">Azerbaijan</option>
            <option value="bahamas">Bahamas</option>
            <option value="bahrain">Bahrain</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="barbados">Barbados</option>
            <option value="belgium">Belgium</option>
            <option value="brazil">Brazil</option>
            <option value="cambodia">Cambodia</option>
            <option value="canada">Canada</option>
            <option value="china">China</option>
            <option value="denmark">Denmark</option>
            <option value="dominicia">Dominicia</option>
            <option value="egypt">Egypt</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="french">French</option>
            <option value="georgia">Georgia</option>
            <option value="germany">Germany</option>
            <option value="hong kong">Hong Kong</option>
            <option value="iceland">Iceland</option>
            <option value="indonesia">Indonesia</option>
            <option value="iran">Iraq</option>
            <option value="japan">Japan</option>
            <option value="jordan">Jordan</option>
            <option value="kuwait">Kuwait</option>
            <option value="libya">Libya</option>
            <option value="malaysia">Malaysia</option>
            <option value="mexico">Mexico</option>
            <option value="nepal">Nepal</option>
            <option value="new zealand">New Zealand</option>
            <option value="oman">Oman</option>
            <option value="pakistan">Pakistan</option>
            <option value="poland">Poland</option>
            <option value="qatar">Qatar</option>
            <option value="russia">Russia</option>
            <option value="saudi arabia">Saudi Arabia</option>
            <option value="sri lanka">Sri Lanka</option>
            <option value="thailand">Thailand</option>
            <option value="turkey">Turkey</option>
            <option value="ukraine">Ukraine</option>
            <option value="united kingdom">United Kingdom (UK)</option>
            <option value="vietnam">Vietnam</option>
            <option value="west indies">West Indies</option>
            <option value="yemen">Yemen</option>
            <option value="zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <div className="full">
          <label>Street Address</label>
          <input
            type="text"
            className="special-inputs"
            name="streetaddress"
            placeholder="House number and street name"
            autoComplete="off"
            value={formValues.streetaddress}
            onChange={handleFormChange}
          />
          <p className="error error-top">{formErrors.streetaddress}</p>
          <input
            type="text"
            name="apartment"
            className="special-inputs special-input-2"
            placeholder="Apartment, suite, unit, etc. (optional)"
            autoComplete="off"
            value={formValues.apartment}
            onChange={handleFormChange}
          />
        </div>
        <div className="full">
          <label>Town / City</label>
          <input
            type="text"
            name="town"
            placeholder=""
            autoComplete="off"
            value={formValues.town}
            onChange={handleFormChange}
          />
        </div>
        <p className="error">{formErrors.town}</p>
        <div className="full">
          <label>State / Country</label>
          <select
            name="state"
            autoComplete="off"
            value={formValues.state}
            onChange={handleFormChange}
          >
            <option value="azad kashmir">Azad Kashmir</option>
            <option value="balochistan">Balochistan</option>
            <option value="fata">Fata</option>
            <option value="gilgit">Gilgit Baltistan</option>
            <option value="islamabad">Islamabad</option>
            <option value="kpk">Khyber Pakhtunkhwa</option>
            <option value="punjab">Punjab</option>
            <option value="sindh">Sindh</option>
          </select>
        </div>
        <p className="error">{formErrors.state}</p>
        <div className="full">
          <label>Postcode / ZIP</label>
          <input
            type="text"
            name="postcode"
            placeholder=""
            autoComplete="off"
            value={formValues.postcode}
            onChange={handleFormChange}
          />
        </div>
        <p className="error">{formErrors.postcode}</p>
        <div className="full">
          <label>Phone</label>
          <input
            type="text"
            name="phoneno"
            placeholder=""
            autoComplete="off"
            value={formValues.phoneno}
            onChange={handleFormChange}
          />
        </div>
        <p className="error">{formErrors.phoneno}</p>
        <div className="full">
          <label>Email address</label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            placeholder="abc@gmail.com"
            value={formValues.email}
            onChange={handleFormChange}
          />
        </div>
        <p className="error">{formErrors.email}</p>
      </div>
    </main>
  );
};

export default CustomerInfo;
