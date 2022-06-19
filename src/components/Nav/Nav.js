import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
   <div>
      <div className={classes.nav_container}>
      <nav className={classes.nav}>
      <Link  to="/">
        <img className={classes.logo} src="/images/Logo.svg" alt="logo" />
        </Link>
        <div className={classes.navMenu} ata-test="nav-menu">

          <Link data-test="nav-home-link" className={classes.navlink} to="/">
            HOME
          </Link>

          <Link className={classes.navlink} to="/about-us">
            ABOUT &nbsp; US
          </Link>

          <Link className={classes.navlink} to="/contact-us">
            CONTACT &nbsp; US
          </Link>

          <Link className={classes.navlink} to="/">
            <button className={classes.nav_login_button}>Log in</button>
          </Link>
          
        </div>
      </nav>
     
    </div>
    <hr/>
   </div>
  );
}
