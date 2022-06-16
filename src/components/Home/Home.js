import React from "react";
import classes from "./Home.module.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperSection from "./SwiperSection/SwiperSection";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";

export default function Home() {
  return (
    <div>
         <SwiperSection/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </div>
  );
}
