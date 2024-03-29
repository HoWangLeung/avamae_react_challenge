import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { motion } from "framer-motion";

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
 

  useEffect(() => {
    
    
    axios.get(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details", 
  
      )
      .then((res) => {
        console.log(res.data);
         let data = res.data.Details
  
        setBannerData(data);
      })
      .catch(err=>{
       
        setError("System Error")
      })

    return () => {};
  }, []);
 
 
 
  return (
    <>
    {bannerData.length>0 && (
      <motion.div  {...AnimationSettings} key="1" data-testid="homepage">
        <SwiperSection bannerData={bannerData} />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </motion.div>
    )}
    
    {bannerData.length==0 && ! error && <div className="lds-dual-ring"></div>}

    {error && <div>System error, please come back later</div>}
     
  </>
  );
}
