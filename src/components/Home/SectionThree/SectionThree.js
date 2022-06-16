import React from "react";
import classes from "../Home.module.css";

export default function SectionThree() {
  return (
    <div className={classes.section3_container}>
      <div className={classes.section3_text_container} >
        <p>Nulla sem urna, dictum sed nisi in ,viverra rutrum neque</p>
        <p>
          Suspendisse sodales commodo viverra. Suspendisse nec nulla diam. Sed
          at risus nec elit ultrices rhoncus. Phasellus porta et ex sed posuere.
          Donec vehicula convallis dolor at varius. Mauris egestas, justo id
          maximus tempus, arcu turpis hendrerit lorem, id mollis augue nisl ac
          orci. Mauris ac felis dui. Praesent facilisis molestie lorem, sit amet
          ultricies tellus condimentum fermentum. Vivamus nec lorem maximus,
          varius nisi at, consequat purus. Aenean blandit enim ac enim bibendum,
          at fringilla ligula varius.
        </p>
        <button     className={classes.section3_login_button}  >Log in </button>
      </div>

      <img
        className={classes.section3_img}
        src="/images/shutterstock_1302552622.jpg"
        alt=""
      />
    </div>
  );
}
