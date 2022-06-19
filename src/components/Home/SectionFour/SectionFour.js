import React from "react";
import { Link } from "react-router-dom";
import classes from "../Home.module.css";

export default function SectionFour() {
  return (
    <div className={classes.section4_container} data-testid="section4">

     <div  >
     <p className={classes.section4_title} >Sed libero justo, lobortis sit amet suscipit non</p>
      <p className={classes.section4_subtitle}>taria duo ut vis semper abhorreant</p>

      <div className={classes.section4_paragraphs_container}  >
        <div  className={classes.section4_paragraph_container}>
          <p className={classes.first_p} >
            Praesent sollicitudin ultrices velit. Maecenas mattis ipsum sed orci
            pulvinar, ut euismod mauris fringilla. Vestibulum non fermentum
            nunc. Aliquam vulputate, risus nec pulvinar varius, lectus tellus
            convallis lorem, sit amet tincidunt lectus lorem at quam. Nunc
            hendrerit sit amet massa vel accumsan. Vestibulum erat dui, suscipit
            sed malesuada ac, eleifend sed lectus. Donec sagittis sed tortor ut
            cursus. Pellentesque et vehicula diam, id vestibulum dolor.
            Suspendisse potenti. Proin tristique condimentum mattis. Nulla
            malesuada, tortor quis ornare volutpat, sapien sapien tincidunt
            nibh, eget viverra metus nisi quis arcu. Nunc pretium, orci non
            posuere ullamcorper, nisl ante lacinia ex, porta venenatis lectus
            nunc tempus enim. Cras lacinia pretium facilisis. Nunc volutpat quam
            odio, sed luctus felis imperdiet blandit. Praesent orci ante,
            viverra non bibendum et, finibus vitae sapien.
          </p>
          <p>
            Nulla viverra varius sem, in interdum leo. Vivamus tortor nisi,
            venenatis sed nisl gravida, consectetur aliquet mauris.
          </p>
        </div>

        <div className={classes.section4_paragraph_container}>
          <p>
            Praesent sollicitudin ultrices velit. Maecenas mattis ipsum sed orci
            pulvinar, ut euismod mauris fringilla. Vestibulum non fermentum
            nunc. Aliquam vulputate, risus nec pulvinar varius, lectus tellus
            convallis lorem, sit amet tincidunt lectus lorem at quam. Nunc
            hendrerit sit amet massa vel accumsan. Vestibulum erat dui, suscipit
            sed malesuada ac, eleifend sed lectus. Donec sagittis sed tortor ut
            cursus. Pellentesque et vehicula diam, id vestibulum dolor.
            Suspendisse potenti. Proin tristique condimentum mattis. Nulla
            malesuada, tortor quis ornare volutpat, sapien sapien tincidunt
            nibh, eget viverra metus nisi quis arcu. Nunc pretium, orci non
            posuere ullamcorper, nisl ante lacinia ex, porta venenatis lectus
            nunc tempus enim. Cras lacinia pretium facilisis. Nunc volutpat quam
            odio, sed luctus felis imperdiet blandit. Praesent orci ante,
            viverra non bibendum et, finibus vitae sapien.
          </p>
          <p>
            Nulla viverra varius sem, in interdum leo. Vivamus tortor nisi,
            venenatis sed nisl gravida, consectetur aliquet mauris.
          </p>
        </div>

        <div className={classes.section4_paragraph_container}>
          <p>
            Praesent sollicitudin ultrices velit. Maecenas mattis ipsum sed orci
            pulvinar, ut euismod mauris fringilla. Vestibulum non fermentum
            nunc. Aliquam vulputate, risus nec pulvinar varius, lectus tellus
            convallis lorem, sit amet tincidunt lectus lorem at quam. Nunc
            hendrerit sit amet massa vel accumsan. Vestibulum erat dui, suscipit
            sed malesuada ac, eleifend sed lectus. Donec sagittis sed tortor ut
            cursus. Pellentesque et vehicula diam, id vestibulum dolor.
            Suspendisse potenti. Proin tristique condimentum mattis. Nulla
            malesuada, tortor quis ornare volutpat, sapien sapien tincidunt
            nibh, eget viverra metus nisi quis arcu. Nunc pretium, orci non
            posuere ullamcorper, nisl ante lacinia ex, porta venenatis lectus
            nunc tempus enim. Cras lacinia pretium facilisis. Nunc volutpat quam
            odio, sed luctus felis imperdiet blandit. Praesent orci ante,
            viverra non bibendum et, finibus vitae sapien.
          </p>
          <p>
            Nulla viverra varius sem, in interdum leo. Vivamus tortor nisi,
            venenatis sed nisl gravida, consectetur aliquet mauris.
          </p>
        </div>
      </div>

     <Link to="contact-us">
     <button className={classes.section4_contact_button}   >Contact us</button></Link>
     </div>

    </div>
  );
}
