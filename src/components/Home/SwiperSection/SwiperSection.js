import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../Home.module.css";
import "./swiper.css";

export default function SwiperSection({ bannerData,onLoad }) {
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
              
              onLoad={onLoad}
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
