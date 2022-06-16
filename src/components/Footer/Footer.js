import React from 'react'
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer_container}  >


       <div >
       <hr   />
        <p  >Website Development by <span className={classes.underline} >AVAMAE</span></p>
       </div>
    </div>
  )
}
