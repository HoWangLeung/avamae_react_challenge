import axios from "axios";
import "./swiper.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "../Home.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default function SwiperSection({ bannerData }) {
  return (
    <Swiper
      loop={true}
      className={classes.swiper_container}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bannerData.length > 0 &&
        bannerData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={classes.swiper_text_group}>
                <h1>{data.Title}</h1>
                <p className={classes.swiper_text_group_subtitle}>
                  {data.Subtitle}
                </p>
           <Link to="contact-us">
           <button className={classes.swiper_text_group_button}>
                  Contact us
                </button>
                </Link>
              </div>

              <div className={classes.grad}></div>

              <img
              
          
                className={classes[`swiper_img_${index}`]}
                src={data.ImageUrl}
                alt="img"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
