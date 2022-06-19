import React from 'react'
import classes from "./Contact.module.css";
import { ReactComponent as IconValid } from "./Icon_Valid.svg";

export default function SuccessMessage({success}) {
  return (
    success && (
        <div className={classes.form_success_container}>
          <div>
            <IconValid />
            <h3>Your message has been sent</h3>
            <p>We will be in contact with you in 24 hours.</p>
          </div>
        </div>
      )
  )
}
