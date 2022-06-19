import React from "react";
import { Link } from "react-router-dom";
import classes from "../Home.module.css";

export default function SectionTwo() {
  return (
    <div className={classes.even_columns} data-testid="section2">
      <div className={classes.section2_text_container}>
        <div className={classes.section2_text_wrapper}>
          <h2>Justo petentium te vix, scripta regione urbanitas</h2>
          <p>
            Nulla ac lacus ipsum. Cras erat ipsum, molestie vitae laoreet et,
            sollicitudin ac leo. Suspendisse commodo porta nulla, ut varius ante
            consequat sed. Maecenas nec eros eget urna rutrum porta auctor et
            quam. Morbi libero tortor, finibus eu massa eget, lacinia venenatis
            augue. Ut eget lacinia massa. Suspendisse id turpis arcu.
          </p>
          <ul>
            <li>
              <span>Donec aliquet urna id nisi congue auctor</span>
            </li>
            <li>
              <span>Donec aliquet urna id nisi congue auctor</span>
            </li>
            <li>
              <span>Donec aliquet urna id nisi congue auctor</span>
            </li>
            <li>
              <span>Donec aliquet urna id nisi congue auctor</span>
            </li>
          </ul>
          <div  className={classes.learn_more_button_wrapper}>
         
              {" "}
              <button className={classes.learn_more_button}>
              <Link to="/about-us">
                Learn more
                </Link>
                </button>
           
          </div>
        </div>
      </div>
      <div className={classes.section2_img_wrapper}>
        <img
          className={classes.shutterstock_696636415}
          src="/images/shutterstock_696636415.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
