import React from "react";
import classes from "../Contact.module.css";
export default function ErrorMessage({ errors }) {
  let errorMap = {
    FullName: "Full Name",
    EmailAddress: "Email Address",
    PhoneNumbers: [""],
    Message: "Message",
    "AddressDetails.AddressLine1":"Address 1",
    "AddressDetails.CityTown":"City/Town",
    "AddressDetails.StateCountyn":"State/County",
    "AddressDetails.Country":"Country",
    "AddressDetails.Postcode":"PostCode"
  };

  let errorMessageMap = {
    Required: "Need to supply a value",
    Invalid_Email_Address: "Email address is invalid",
    Invalid_Phone_Number: "Phone number is invalid. Cannot exceed 20 characters. If provided, a phone number value cannot be null or empty",
    Max_Length_Exceeded: "The message provided exceeds the maximum length allowed",
    Invalid_Postcode:"Not a valid UK postcode"

 
  };

  return errors.map((error, index) => (
    <div key={index} className={classes.error_container}>
      <p>
 
        {errorMap[error.FieldName]}  :  {errorMessageMap[error.MessageCode]}
      </p>
    </div>
  ));
}
