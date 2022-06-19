import axios from "axios";
import React, { useState } from "react";
import classes from "./Contact.module.css";
import ErrorMessage from "./ErrorHandling/ErrorMessage";
import { ReactComponent as IconSubmit } from "./Icon_Submit.svg";

import { AnimationSettings } from "../Common/AnimationSettings";
import { motion } from "framer-motion";
import SuccessMessage from "./SuccessMessage";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    Message: "",
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "PhoneNumbers") {
      let newPhoneNumber = values.PhoneNumbers.filter((p, i) => i === index);
      newPhoneNumber = value;
      value = values.PhoneNumbers.map((v, i) => {
        if (i === index) {
          v = newPhoneNumber;
        }
        return v;
      });
    }

    if (name.startsWith("AddressDetails")) {
      name = name.substr(name.indexOf(".") + 1);
      setValues((state) => ({
        ...state,
        AddressDetails: {
          ...state.AddressDetails,
          [name]: value,
        },
      }));
      return;
    }

    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const addNewPhone = (e) => {
    e.preventDefault();
    setValues((state) => ({
      ...state,
      PhoneNumbers: [...state["PhoneNumbers"], ""],
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    let payload = values;

    //remove empty element in array
    payload.PhoneNumbers = payload.PhoneNumbers.filter((n) => n);

    axios
      .post(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        values
      )
      .then((res) => {
        if (res.status === 200 && res.data.Errors.length === 0) {
          setErrors([])
          setSuccess(true);
          setIsLoading(false);
     
        }
      })
      .catch((err) => {
        if (!err.response.data) {
          //e.g 404
          setErrors([
            { FieldName: "SYSTEM_ERROR", MessageCode: "SYSTEM_ERROR" },
          ]);

          return;
        }

        setErrors(err.response.data.Errors);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      {...AnimationSettings}
      key="2"
      className={classes.contact_container}
    >
      <div className={classes.contact_inner_container}>
        <div className={classes.contact_left_container}>
          <div>
            <h2>Contact us</h2>
            <p>
              Populo facillsi nam no, dolor deleniti deserulsse ne cum, nam
              quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo
              accumsan at vix.
            </p>

            {!success && (
              <div className={classes.form_out_container}>
                <form
                  onSubmit={handleSubmit}
                  className={classes.form_container}
                >
                  <div className={classes.form_group}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      name="FullName"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      value={values.FullName}
                    />
                  </div>

                  <div className={classes.form_group}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      name="EmailAddress"
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.EmailAddress}
                    />
                  </div>

                  {values.PhoneNumbers.map((phone, index) => (
                    <div key={index} className={`${classes.form_group}`}>
                      <label htmlFor="phoneNumber1">
                        <span>{`Phone number 0${index + 1}`}</span>
                        <span className={classes.optional}> - optional</span>
                      </label>
                      <input
                        name="PhoneNumbers"
                        type="text"
                        className="form-control"
                        onChange={(e) => handleChange(e, index)}
                        value={phone}
                      />
                    </div>
                  ))}

                  <button
                    onClick={addNewPhone}
                    className={classes.form_add_phone_button}
                  >
                    Add new phone number
                  </button>

                  <div className={classes.form_group}>
                    <div className={classes.form_group_message_text_wrapper}>
                      <label htmlFor="message">Message</label>
                      <span>Maximum text length is 500 characters</span>
                    </div>

                    <textarea
                      name="Message"
                      onChange={handleChange}
                      value={values.Message}
                      className="form-control"
                      rows="5"
                    ></textarea>
                  </div>

                  <div
                    className={classes.form_group_checkbox}
                    onClick={() =>
                      setValues((state) => ({
                        ...state,
                        bIncludeAddressDetails: !state.bIncludeAddressDetails,
                      }))
                    }
                    data-testid="address_checkbox"
                  >
                    <input
                      type="checkbox"
                      name="bIncludeAddressDetails"
                      checked={values.bIncludeAddressDetails}
                      onChange={() => {}}
                    />
                    <label htmlFor="vehicle1"> Add address details</label>
                  </div>

                  {values.bIncludeAddressDetails && (
                    <div className={classes.form_address_container}>
                      <div className={classes.form_group}>
                        <label htmlFor="name">Address Line 1</label>
                        <input
                          name="AddressDetails.AddressLine1"
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          value={values.AddressDetails.AddressLine1}
                        />
                      </div>

                      <div className={classes.form_group}>
                        <label htmlFor="exampleInputEmail1">
                          Address Line 2
                        </label>
                        <input
                          name="AddressDetails.AddressLine2"
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={handleChange}
                          value={values.AddressDetails.AddressLine2}
                        />
                      </div>

                      <div className={classes.form_group}>
                        <label htmlFor="name">City/Town</label>
                        <input
                          name="AddressDetails.CityTown"
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          value={values.AddressDetails.CityTown}
                        />
                      </div>

                      <div className={classes.form_group}>
                        <label htmlFor="exampleInputEmail1">State/County</label>
                        <input
                          name="AddressDetails.StateCounty"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={handleChange}
                          value={values.AddressDetails.StateCounty}
                        />
                      </div>

                      <div className={classes.form_group}>
                        <label htmlFor="name">PostCode</label>
                        <input
                          name="AddressDetails.Postcode"
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          value={values.AddressDetails.Postcode}
                        />
                      </div>

                      <div className={classes.form_group}>
                        <label htmlFor="exampleInputEmail1">Country</label>
                        <input
                          name="AddressDetails.Country"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={handleChange}
                          value={values.AddressDetails.Country}
                        />
                      </div>
                    </div>
                  )}
                </form>
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  className={classes.form_submit_button}
                  data-testid="submit_button"
                >
                  <IconSubmit id="fixed" />
                  <span>{isLoading ? "Processing..." : "Submit"}</span>
                </button>
              </div>
            )}

            {errors.length > 0 && <ErrorMessage errors={errors} />}

            <SuccessMessage success={success}/>
          </div>

        </div>

        <div className={classes.contact_img_container}>
          <div>
            <img src="/images/Img_Contact.png" alt="img" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
