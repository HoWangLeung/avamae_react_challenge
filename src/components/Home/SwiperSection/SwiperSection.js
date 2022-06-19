import axios from "axios";
import "./swiper.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "../Home.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



export default function SwiperSection({ bannerData }) {
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <Swiper
    data-testid="swiperSection"
    onInit={(ev) => {
      set_my_swiper(ev)
  }}
      loop={true}
      className={classes.swiper_container}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log("swiper")}
      onSlideChange={() => console.log("slide change")}
    >
       <div className="swiper-button-prev" onClick={()=>my_swiper.slidePrev()} ></div>
       <div className="swiper-button-next" onClick={()=>my_swiper.slideNext()}></div>
      {bannerData.length > 0 &&
        bannerData.map((data, index) => {
          return (
            <SwiperSlide key={index}  >
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
