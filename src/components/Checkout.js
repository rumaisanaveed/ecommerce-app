import CustomerInfo from "./CustomerInfo";
import OrderInfo from "./OrderInfo";
import { useState, useEffect } from "react";
import FinalOrderMsg from "./FinalOrderMsg";

const Checkout = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    company: "",
    country: "",
    streetaddress: "",
    apartment: "",
    town: "",
    state: "",
    postcode: "",
    phoneno: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsFormSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isFormSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+?[0-9()-\s]*$/;
    if (!values.firstname) {
      errors.firstname = "First name is a required field";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is a required field";
    }
    if (!values.streetaddress) {
      errors.streetaddress = "Street address is a required field";
    }
    if (!values.town) {
      errors.town = "Town / City is a required field";
    }
    if (!values.state) {
      errors.state = "State / Country is a required field";
    }
    if (!values.postcode) {
      errors.postcode = "Postcode / Zip is a required field";
    } else if (values.postcode.length < 4) {
      errors.postcode = "Postcode must be greater than 4 digits";
    } else if (values.postcode.length > 10) {
      errors.postcode = "Postcode must not exceed from 10 digits";
    }
    if (!values.phoneno) {
      errors.phoneno = "Phone Number is a required field";
    } else if (!phoneRegex.test(values.phoneno)) {
      errors.phoneno = "Phone number isn't valid";
    }
    if (!values.email) {
      errors.email = "Email address is a required field";
    }
    // } else if (!emailRegex.test(values.email)) {
    //   errors.email = "Email isn't in valid format";
    // }
    return errors;
  };

  return (
    <>
      {console.log(Object.keys(formErrors).length)}
      {/* If no errors, then display the final msg */}
      {Object.keys(formErrors).length === 0 && isFormSubmit ? (
        <FinalOrderMsg />
      ) : (
        // else
        <div className="checkout-container">
          <CustomerInfo
            formValues={formValues}
            formErrors={formErrors}
            handleFormChange={handleFormChange}
          />
          <OrderInfo handleFormSubmit={handleFormSubmit} />
        </div>
      )}
    </>
  );
};

export default Checkout;
