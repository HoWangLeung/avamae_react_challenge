import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperSection from "./SwiperSection/SwiperSection";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";
import axios from "axios";
import { MotionConfig } from "framer-motion";

import {AnimationSettings} from '../Common/AnimationSettings'

export default function Home(props) {

  
  
  const [bannerData, setBannerData] = useState([]);
  const [error,setError] = useState()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      )
      .then((res) => {
        setBannerData(res.data["Details"]);
      })
      .catch(err=>{
        setError("System Error")
      })

    return () => {};
  }, []);

  function onLoad() {
    console.log('loaded');
    setLoaded(true);
  }

  console.log(props);
  return (
    <>
      { (bannerData.length==0||!loaded)  && <div className="lds-dual-ring"></div>}

        {  <motion.div  {...AnimationSettings} key="1"  style={{display: loaded ?  "block":"none"}}  >
          <SwiperSection bannerData={bannerData} onLoad={onLoad} loaded={loaded} />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </motion.div>}
     
     

      {error && <div>System error, please come back later</div>}
    </>
  );
}
