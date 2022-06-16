import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../Home.module.css";

export default function SwiperSection() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      )
      .then((res) => {
        setBannerData(res.data["Details"]);
      });

    return () => {};
  }, []);

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
      {bannerData &&
        bannerData.map((data,index) => (
          <div  >
            <SwiperSlide key={data.ImageUrl}>
              <div className={classes.swiper_text_group}>
                <h1>{data.Title}</h1>
                <p className={classes.swiper_text_group_subtitle} >{data.Subtitle}</p>
                <button>Contact us</button>
              </div>

              <div className={classes.grad}>
</div>

              <img
                className={classes[`swiper_img_${index}`]}
                src={data.ImageUrl}
                alt="img"
              />

            </SwiperSlide>
          </div>
        ))}
    </Swiper>
  );
}
