import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import image for slide
import image from '../img/404.gif'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../stylesheet/Banner.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="slide"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={image} alt="slide"/>
        </SwiperSlide>
        <SwiperSlide><img src={image} alt="slide"/></SwiperSlide>
        <SwiperSlide>
        <img src={image} alt="slide"/>
        </SwiperSlide>
        <SwiperSlide><img src={image} alt="slide"/></SwiperSlide>
        <SwiperSlide><img src={image} alt="slide"/></SwiperSlide>
        <SwiperSlide><img src={image} alt="slide"/></SwiperSlide>
        
      </Swiper>
    </>
  );
}
