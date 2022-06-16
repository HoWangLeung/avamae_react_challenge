import React from 'react'
import classes from "../Home.module.css";

export default function SectionTwo() {
  return (
    <div className={classes.even_columns} >
    <div className={classes.section2_text_container} >

       <div  className={classes.section2_text_wrapper} >
       <h3>Justo petentium te vix, scripta regione urbanitas</h3>
        <p>Nulla ac lacus ipsum. Cras erat ipsum, molestie vitae laoreet et, sollicitudin ac leo. Suspendisse commodo porta nulla, ut varius ante consequat sed. Maecenas nec eros eget urna rutrum porta auctor et quam. Morbi libero tortor, finibus eu massa eget, lacinia venenatis augue. Ut eget lacinia massa. Suspendisse id turpis arcu.</p>
        <ul>
            <li><span>Donec aliquet urna id nisi congue auctor</span></li>
            <li><span>Donec aliquet urna id nisi congue auctor</span></li>
            <li><span>Donec aliquet urna id nisi congue auctor</span></li>
            <li><span>Donec aliquet urna id nisi congue auctor</span></li>
        </ul>
        <button  className={classes.learn_more_button} >Learn more</button>
       </div>


    </div>
    <div className={classes.section2_img_wrapper}>
        <img className={classes.shutterstock_696636415} src="/images/shutterstock_696636415.jpg" alt=""/>

    </div>

</div>
  )
}
