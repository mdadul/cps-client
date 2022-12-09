import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import image for slide
import image from "../img/404.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../stylesheet/Banner.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import Illustration from "./Illustration";

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
          <div className="container column">
            <div className="banner">
              <h1>Welcome To Cholo Programming Shikhi</h1>
              <p>lorem10</p>
            </div>
            <Illustration src={image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
